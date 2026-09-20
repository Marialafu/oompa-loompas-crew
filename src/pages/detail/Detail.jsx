import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOompaById } from "../../api/oompaApi";
import { setDetails } from "../../store/oompaSlice";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const oompa = useSelector((state) => state.oompas.details[0]);

  useEffect(() => {
    const fetchOompaDetail = async () => {
      const oompa = await getOompaById(id);
      dispatch(setDetails(oompa));
    };
    fetchOompaDetail();
  }, [id]);

  return (
    <h2>
      Oompa Loompa {oompa} {id}
    </h2>
  );
};

export default Detail;
