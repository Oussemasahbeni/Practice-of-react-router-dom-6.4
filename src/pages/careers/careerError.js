import { useRouteError, Link } from "react-router-dom";

const CareerError = () => {
  const error = useRouteError();
  // useRouteError() returns the error object that was thrown by the child route.
  return (
    <div>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/careers">Go back to the homepage</Link>
    </div>
  );
};

export default CareerError;
