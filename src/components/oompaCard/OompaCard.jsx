import { Link } from "react-router-dom";
import "./OompaCard.css";

const OompaCard = ({ id, image, first_name, gender, profession }) => {
  return (
    <Link to={`/${id}`}>
      <div className="oompa-card">
        <img className="oompa-card-image" src={image} alt={first_name} />

        <div className="oompa-card-content">
          <h3 className="heading">
            {first_name}
            {id}
          </h3>
          <span className="caption">{gender}</span>
          <span className="caption">{profession}</span>
        </div>
      </div>
    </Link>
  );
};

export default OompaCard;
