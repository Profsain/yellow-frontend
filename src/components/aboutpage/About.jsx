import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const About = () => {
  

  return (
    <div className="container mt-5">
      <h1>Welcome to About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis
        voluptates saepe nulla. Quia, odit officiis. Odit debitis tempora a sed,
        ipsum laborum, ducimus saepe officiis, cupiditate et voluptates magni.
      </p>

      <div>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    </div>
  );
};

About.propTypes = {
  setMethod: PropTypes.func,
};

export default About;
