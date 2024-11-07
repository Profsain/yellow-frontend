import PropTypes from "prop-types";
const PostCard = ({ postTitle, description, postImg, func }) => {
  const styles = {
    card: {
      width: "18rem",
      margin: "1rem",
      padding: "1rem",
      border: "1px solid #ccc",
      borderRadius: "8px",
    },
    img: {
      width: "100%",
      height: "250px",
      borderRadius: "8px",
    },
  };
  return (
    <div style={styles.card} onClick={func}>
      <img
        style={styles.img}
        src={
          postImg ||
          "https://img.pikbest.com/origin/09/16/53/20YpIkbEsTi9c.png!w700wp"
        }
        alt="post name"
      />

      <h4 className="mt-3 text-primary">{postTitle.slice(0, 20) || "Post Title"}</h4>
      <p>{description.slice(0, 60) + "....." || "Short post description"}</p>
      <h5 className="text-primary mt-2">Read more.......</h5>
    </div>
  );
};

PostCard.propTypes = {
  description: PropTypes.string,
  postImg: PropTypes.string,
  postTitle: PropTypes.string,
  func: PropTypes.func,
};

export default PostCard;
