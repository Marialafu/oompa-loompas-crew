import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((state) => state.oompas.items);

  return <h1>Home {items.length}</h1>;
};

export default Home;
