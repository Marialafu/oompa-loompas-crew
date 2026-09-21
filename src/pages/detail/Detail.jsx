import "./Detail.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOompaById } from "../../api/oompaApi";
import { setDetails } from "../../store/oompaSlice";
import Header from "../../components/header/Header";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const oompa = useSelector((state) => state.oompas.details);
  console.log(oompa);

  useEffect(() => {
    const fetchOompaDetail = async () => {
      const oompa = await getOompaById(id);
      dispatch(setDetails(oompa));
    };
    fetchOompaDetail();
  }, [id]);

  return (
    <>
      <Header />
      <main className="detail-main">
        <div>
          <img src={oompa.image} alt="nombre" />
        </div>

        <div className="detail-content">
          <div className="detail-info">
            <h3 className="heading oompa-card-hover">{oompa.first_name}</h3>
            <span className="caption">{oompa.gender}</span>
            <span className="caption">{oompa.profession}</span>
          </div>

          <div
            className="body detail-description"
            dangerouslySetInnerHTML={{ __html: oompa.description }}
          />
        </div>
      </main>
    </>
  );
};

export default Detail;
