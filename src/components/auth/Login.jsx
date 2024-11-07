import PropTypes from "prop-types"
const Login = ({ setLogin }) => {
  // handle login
  const handleLogin = () => {
    setLogin(true);
  };

  return (
    <div className="container mt-5">
      <h1>Welcome to Login</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis
        voluptates saepe nulla. Quia, odit officiis. Odit debitis tempora a sed,
        ipsum laborum, ducimus saepe officiis, cupiditate et voluptates magni.
      </p>

      <div>
        <button onClick={handleLogin} className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

Login.propTypes = {
  setLogin: PropTypes.func
}

export default Login;
