import "./Detail.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOompaById } from "../../api/oompaApi";
import { isRequestExpired } from "../../utils/isRequestExpired";
import { setDetails } from "../../store/oompaSlice";
import Header from "../../components/header/Header";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const detail = useSelector((state) => state.oompas.details[id]);
  const oompa = detail?.data;

  const requestExpired = isRequestExpired(detail?.lastRequest);

  useEffect(() => {
    if (!requestExpired) return;

    const fetchOompaDetail = async () => {
      const oompa = await getOompaById(id);
      dispatch(setDetails({ id, oompa }));
    };
    fetchOompaDetail();
  }, [id]);

  return (
    <>
      <Header />
      <main className="detail-main">
        <div>
          <img src={oompa?.image} alt="nombre" />
        </div>

        <div className="detail-content">
          <div className="detail-info">
            <h3 className="heading oompa-card-hover">{oompa?.first_name}</h3>
            <span className="caption">{oompa?.gender}</span>
            <span className="caption">{oompa?.profession}</span>
          </div>

          <div
            className="body detail-description"
            dangerouslySetInnerHTML={{ __html: oompa?.description }}
          />
        </div>
      </main>
    </>
  );
};

export default Detail;
