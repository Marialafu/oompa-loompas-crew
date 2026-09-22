import OompaCard from "../oompaCard/OompaCard";
import Loading from "../loading/Loading";
import "./OompasGrid.css";

const OompasGrid = ({ oompas, isLoading, loadRef, searchTerm }) => {
  const isEmptySearch = !isLoading && oompas.length === 0;

  return (
    <section className="oompas-crew">
      <div className="oompas-grid">
        {oompas?.map((oompa) => (
          <OompaCard key={oompa?.id} {...oompa} />
        ))}
      </div>

      {isEmptySearch && (
        <p className="body empty-message">
          Ninguno de nuestros Oompas coincide con tu búsqueda. Prueba con otra.
        </p>
      )}

      {isLoading && <Loading />}
      <div ref={loadRef} />
    </section>
  );
};

export default OompasGrid;
