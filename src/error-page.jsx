import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <div style={{ alignItems: "center", justifyContent: "center" }}>
      <h1>Oops!</h1>
      <p>
        Sorry, an unexpected error has occurred.Possibly a missing page was
        accessed
      </p>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  );
}
