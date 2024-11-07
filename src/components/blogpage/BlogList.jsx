import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import PostCard from "./PostCard";


const BlogList = () => {
  const navigate = useNavigate(); // initialize useNavigate hook
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  // handle fetch
  const fetchPosts = async () => {
    try {
      const url = "https://yellow-backend.onrender.com/api/posts";
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setLoading(false);
      }

      setPosts(data.data);
    } catch (error) {
      setLoading(false);
      setErrorMsg("No post available");
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  // handle open post details
  const handleOpenPost = (postId) => {
    // navigate to single post page
    navigate(`/blog/${postId}`);
   };

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Read and Become Better Dev!</h1>

      <div>
        {loading && <p className="text-danger">Loading.........</p>}

        {errorMsg && <p className="text-danger">No post available</p>}

        <div className="d-flex flex-wrap">
          {posts.map((post) => (
            <PostCard
              key={post._id}
              postTitle={post.title}
              description={post.body}
              postImg={post.postImg}
              func={() => handleOpenPost(post._id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

BlogList.propTypes = {
  setMethod: PropTypes.func,
};

export default BlogList;
