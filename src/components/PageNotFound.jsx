import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="container py-5 text-center my-5">
      <h1 className="display-1 fw-bold text-danger mb-4">404</h1>

      <h2 className="mb-4">Oops! Page Not Found 😟</h2>

      <p className="lead text-muted mb-5">
        The page you are looking for might not been added, had its name changed.
        <br />
        <strong className="text-dark">As a quick fix check if you have typo.</strong>
      </p>

      <Link to="/" className="btn btn-primary btn-lg">
        Go to Homepage
      </Link>
    </div>
  );
}

export default PageNotFound;
