import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  // to check is route has error
  const error = useRouteError();

  return (
    <>
      <h1>Oops...</h1>
      <p>
        {/* to check is route has error */}
        {isRouteErrorResponse(error) ? "invalid route" : "unexpected error"}
      </p>
    </>
  );
};

export default ErrorPage;
