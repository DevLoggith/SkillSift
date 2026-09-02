import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main>
      <h1>404 Page Not Found</h1>
      <Link to={"/"}>
        <button type="button">Go Back Home</button>
      </Link>
    </main>
  );
}

export default NotFound;
