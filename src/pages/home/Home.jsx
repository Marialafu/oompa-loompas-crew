import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getOompaCrew } from "../../api/oompaApi";
import { useEffect, useRef, useState } from "react";
import { addItems, setItems } from "../../store/oompaSlice";
import Header from "../../components/header/Header";
import OompaCard from "../../components/oompaCard/OompaCard";
import Loading from "../../components/loading/Loading";

const Home = () => {
  const oompas = useSelector((state) => state.oompas.items);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const loadRef = useRef(null);

  useEffect(() => {
    const fetchOompaCrew = async () => {
      const crew = await getOompaCrew(1);
      dispatch(setItems(crew.results));
      setPage(crew.current);
      setTotalPages(crew.total);
    };
    fetchOompaCrew();
  }, []);

  useEffect(() => {
    const loadObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadNextPage();
      }
    });
    loadObserver.observe(loadRef.current);

    return () => {
      loadObserver.disconnect();
    };
  }, [page, totalPages, isLoading]);

  const loadNextPage = async () => {
    if (isLoading || page >= totalPages) return;
    setLoading(true);

    try {
      const nextPage = page + 1;
      const newCrew = await getOompaCrew(nextPage);
      console.log(newCrew);

      dispatch(addItems(newCrew.results));
      setPage(newCrew.current);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="home-main">
        <section className="hero">
          <h1 className="title">Find your Oompa Loompa</h1>
          <h2 className="subtitle">There are more than 100k</h2>
        </section>

        <div className="oompas-crew">
          <div className="oompas-grid">
            {oompas.map((oompa) => (
              <OompaCard key={oompa.id} {...oompa} />
            ))}
          </div>

          {isLoading && <Loading />}
          <div ref={loadRef} />
        </div>
      </main>
    </>
  );
};

export default Home;
