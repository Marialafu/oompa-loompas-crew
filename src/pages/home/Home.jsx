import { useDispatch, useSelector } from "react-redux";
import { getOompaCrew } from "../../api/oompaApi";
import { useEffect } from "react";
import { setItems } from "../../store/oompaSlice";

const Home = () => {
  const items = useSelector((state) => state.oompas.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOompaCrew = async () => {
      const list = await getOompaCrew(2);
      dispatch(setItems(list.results));
    };
    fetchOompaCrew();
  }, []);

  return (
    <>
      <h1>Home {items.length}</h1>
    </>
  );
};

export default Home;
