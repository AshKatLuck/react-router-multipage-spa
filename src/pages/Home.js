import { Link, useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>HomePage</h1>
      <p>
        Go to the <Link to="/products">Products Page</Link>
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </>
  );
}
export default HomePage;
