import "./Home.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOompaCrew } from "../../api/oompaApi";
import { addItems, setItemsData } from "../../store/oompaSlice";
import { isRequestExpired } from "../../utils/isRequestExpired";
import { filterOompas } from "../../utils/filterOompas";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";
import OompasGrid from "../../components/oompasGrid/OompasGrid";

const Home = () => {
  const dispatch = useDispatch();
  const {
    items: oompas,
    currentPage,
    totalPages,
    lastRequest,
  } = useSelector((state) => state.oompas);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const loadRef = useRef(null);

  const filteredOompas = filterOompas(oompas, searchTerm);

  const loadNextPage = async () => {
    if (isLoading || currentPage >= totalPages) return;
    setIsLoading(true);
    setError(null);

    try {
      const nextPage = currentPage + 1;
      const newCrew = await getOompaCrew(nextPage);
      dispatch(addItems(newCrew));
    } catch {
      setError("Error al cargar más Oompa Loompas. Prueba más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const requestExpired = isRequestExpired(lastRequest);
    if (!requestExpired) return;

    const fetchOompaCrew = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const crew = await getOompaCrew(1);
        dispatch(setItemsData(crew));
      } catch {
        setError("Error cargando Oompa Loompas. Prueba más tarde.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchOompaCrew();
  }, []);

  useEffect(() => {
    if (searchTerm || totalPages === null) return;

    const loadObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadNextPage();
      }
    });
    loadObserver.observe(loadRef.current);

    return () => {
      loadObserver.disconnect();
    };
  }, [currentPage, totalPages, isLoading, searchTerm]);

  return (
    <>
      <Header />
      <main className="home-main">
        <SearchBar setSearchTerm={setSearchTerm} />

        <section className="hero">
          <h1 className="title">Find your Oompa Loompa</h1>
          <h2 className="subtitle">There are more than 100k</h2>
        </section>

        {error ? (
          <p className="body">{error}</p>
        ) : (
          <OompasGrid
            oompas={filteredOompas}
            isLoading={isLoading}
            loadRef={loadRef}
          />
        )}
      </main>
    </>
  );
};

export default Home;
