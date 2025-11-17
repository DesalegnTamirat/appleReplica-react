function Error({ message }) {
  return (
    <div className="py-5 text-center alert alert-danger" role="alert">
      <strong>Error:</strong> {message}
    </div>
  );
}

export default Error;
