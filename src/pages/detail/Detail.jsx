import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return <h2>Oompa Loompa {id}</h2>;
};

export default Detail;
