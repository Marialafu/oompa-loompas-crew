import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <Link to="/" className="header-logo">
          <img
            className="header-logo-image"
            src="/images/logo-umpa-loompa.webp"
            alt="Oompa Loompa's Crew Home"
          />
        </Link>

        <span className="heading">Oompa Looma's Crew</span>
      </div>
    </div>
  );
};

export default Header;
