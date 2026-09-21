import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getOompaCrew } from "../../api/oompaApi";
import { useEffect } from "react";
import { setItems } from "../../store/oompaSlice";
import Header from "../../components/header/Header";
import OompaCard from "../../components/oompaCard/OompaCard";

const Home = () => {
  const oompas = useSelector((state) => state.oompas.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOompaCrew = async () => {
      const list = await getOompaCrew(1);
      dispatch(setItems(list.results));
    };
    fetchOompaCrew();
  }, []);

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
      </main>
    </>
  );
};

export default Home;
