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

  useEffect(() => {
    const requestExpired = isRequestExpired(detail?.lastRequest);
    if (!requestExpired) return;

    const fetchOompaDetail = async () => {
      setIsLoading(true);

      try {
        const oompa = await getOompaById(id);
        dispatch(setDetails({ id, oompa }));
      } finally {
        setIsLoading(false);
      }
    };
    fetchOompaDetail();
  }, [id]);

  return (
    <>
      <Header />
      <main className="detail-main">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div>
              <img src={oompa?.image} alt="nombre" />
            </div>

            <div className="detail-content">
              <div className="detail-info">
                <h3 className="heading oompa-card-hover">
                  {oompa?.first_name}
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
        )}
      </main>
    </>
  );
};

export default Detail;
