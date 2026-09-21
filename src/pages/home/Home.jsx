import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getOompaCrew } from "../../api/oompaApi";
import { useEffect, useRef, useState } from "react";
import { addItems, setItems } from "../../store/oompaSlice";
import Header from "../../components/header/Header";
import OompaCard from "../../components/oompaCard/OompaCard";

const Home = () => {
  const oompas = useSelector((state) => state.oompas.items);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const loadRef = useRef(null);

  useEffect(() => {
    const fetchOompaCrew = async () => {
      const crew = await getOompaCrew(1);
      dispatch(setItems(crew.results));

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
  }, [page, totalPages]);

  const loadNextPage = async () => {
    if (page >= totalPages) return;

    const nextPage = page + 1;
    const newCrew = await getOompaCrew(nextPage);
    dispatch(addItems(newCrew.results));

    setPage(newCrew.current);
  };

  return (
    <>
      <Header />
      <main className="home-main">
        <section className="hero">
          <h1 className="title">Find your Oompa Loompa</h1>
          <h2 className="subtitle">There are more than 100k</h2>
        </section>

        <div className="oompas-grid">
          {oompas.map((oompa) => (
            <OompaCard key={oompa.id} {...oompa} />
          ))}
        </div>
        <div ref={loadRef} />
      </main>
    </>
  );
};

export default Home;
