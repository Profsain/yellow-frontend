import PropTypes from "prop-types";
const Contact = ({ setMethod }) => {
  // handle logout
  const handleLogout = () => {
    setMethod(false);
  };

  return (
    <>
      <div className="container mt-5">
        <h1>Welcome to Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis
          voluptates saepe nulla. Quia, odit officiis. Odit debitis tempora a
          sed, ipsum laborum, ducimus saepe officiis, cupiditate et voluptates
          magni.
        </p>

        <div>
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        </div>
      </div>
      <div>
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=1073&amp;height=400&amp;hl=en&amp;q=230%20Herbert%20Macaulay%20Way,%20Alagomeji%20Yaba+(GoMyCode%20Limited)&amp;t=p&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>{" "}
        <a href="https://dissertationschreibenlassen.com/">
          Dissertation schreiben Unterstützung
        </a>{" "}
        <script
          type="text/javascript"
          src="https://embedmaps.com/google-maps-authorization/script.js?id=e52a32a6a18fc22e2a9078506055f6a7d4c01d5f"
        ></script>
      </div>
    </>
  );
};

Contact.propTypes = {
  setMethod: PropTypes.func,
};

export default Contact;
