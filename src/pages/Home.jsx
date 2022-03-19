import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-center">Home Page</h1>
      <Link to={'/about'} className="btn btn-primary">About</Link>
      <Link to={'/faq'} className="btn btn-primary">Faq</Link>
      <Link to={'/users'} className="btn btn-primary">Users</Link>
    </div>
  );
};

export default Home;
