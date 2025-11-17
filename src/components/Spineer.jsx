function Spinner() {
  return (
    <div className="py-5 text-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p>Loading videos...</p>
    </div>
  );
}

export default Spinner;
