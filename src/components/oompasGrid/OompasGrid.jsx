import OompaCard from "../oompaCard/OompaCard";
import Loading from "../loading/Loading";
import "./OompasGrid.css";

const OompasGrid = ({ oompas, isLoading, loadRef }) => {
  return (
    <section className="oompas-crew">
      <div className="oompas-grid">
        {oompas.map((oompa) => (
          <OompaCard key={oompa.id} {...oompa} />
        ))}
      </div>

      {isLoading && <Loading />}
      <div ref={loadRef} />
    </section>
  );
};

export default OompasGrid;
