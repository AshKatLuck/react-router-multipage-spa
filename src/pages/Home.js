import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <p>
        Go to the <Link to="/products">Products Page</Link>
      </p>
    </>
  );
}
export default HomePage;
