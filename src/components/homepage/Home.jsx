import PropTypes from "prop-types"
const Home = ({ setMethod }) => {
  // handle logout
  const handleLogout = () => {
    setMethod(false);
  };

  return (
    <div className="container mt-5">
      <h1>Welcome to Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis
        voluptates saepe nulla. Quia, odit officiis. Odit debitis tempora a sed,
        ipsum laborum, ducimus saepe officiis, cupiditate et voluptates magni.
      </p>

      <div>
        <button onClick={handleLogout}  className="btn btn-primary">Logout</button>
      </div>
    </div>
  );
};

Home.propTypes = {
  setMethod: PropTypes.func
}

export default Home;
