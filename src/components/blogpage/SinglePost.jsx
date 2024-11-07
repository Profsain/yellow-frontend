import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  // handle fetch
  const fetchPost = async () => {
    try {
      const url = `https://yellow-backend.onrender.com/api/post/${id}`;
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setLoading(false);
      }

      setPost(data.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="container">
      {loading && <p className="text-danger">Loading.........</p>}
      <h1 className="text-primary my-3">{post.title}</h1>

      <div>
              <img width="600px" src={post.postImg} alt={ post.title} />

        <hr />
        <div>
          <h5>Likes: {post.likes}</h5>
          <h5>Category: {post.category}</h5>
          <h5>Published Date: {post.createdAt}</h5>
        </div>
        <hr />
        <div className="d-flex flex-wrap ">
          {post.tags && post.tags.map((tag) => <h6 className="mx-2 text-primary" key={tag}>{tag}</h6>)}
        </div>
        <p className="my-3">{post.body}</p>
      </div>
    </div>
  );
};

export default SinglePost;
