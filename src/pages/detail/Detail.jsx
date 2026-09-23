import "./Detail.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOompaById } from "../../api/oompaApi";
import { isRequestExpired } from "../../utils/isRequestExpired";
import { setDetails } from "../../store/oompaSlice";
import Header from "../../components/header/Header";
import Loading from "../../components/loading/Loading";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const detail = useSelector((state) => state.oompas.details[id]);
  const oompa = detail?.data;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const requestExpired = isRequestExpired(detail?.lastRequest);
    if (!requestExpired) return;

    const fetchOompaDetail = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const oompa = await getOompaById(id);
        dispatch(setDetails({ id, oompa }));
      } catch {
        setError("Error al cargar el Oompa Loompa");
      } finally {
        setIsLoading(false);
      }
    };
    fetchOompaDetail();
  }, [id]);

  const content = () => {
    if (error) {
      return <p className="body">{error}</p>;
    }

    if (isLoading) {
      return <Loading />;
    }

    return (
      <>
        <div>
          <img
            src={oompa?.image}
            alt={`${oompa?.first_name} ${oompa?.last_name}`}
          />
        </div>

        <div className="detail-content">
          <div className="detail-info">
            <h3 className="heading oompa-card-hover">
              {oompa?.first_name} {oompa?.last_name}
            </h3>
            <span className="caption">{oompa?.gender}</span>
            <span className="caption">{oompa?.profession}</span>
          </div>

          <div
            className="body detail-description"
            dangerouslySetInnerHTML={{ __html: oompa?.description }}
          />
        </div>
      </>
    );
  };

  return (
    <>
      <Header />
      <main className="detail-main">{content()}</main>
    </>
  );
};

export default Detail;
