import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

const AddPost = () => {
  // form state
  const [formData, setFormData] = useState({
    title: "",
    postImg: "",
    category: "",
    tags: "",
    content: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  // handle form change
  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "tags") {
      const tags = value.split(",");
      setFormData({ ...formData, [id]: tags });
      return;
    }
    setFormData({ ...formData, [id]: value });

  };

  // handle form submit
  const handleSubmit = async (e) => { 
    e.preventDefault();
    setSubmitting(true);

    try {
      const url = "https://yellow-backend.onrender.com/api/create-post";
      const option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }

      const response = await fetch(url, option);
       if (response.ok) {
        setMessage("Post created successfully");
        setSubmitting(false);
        setFormData({
          title: "",
          postImg: "",
          category: "",
          tags: "",
          content: "",
        });
         return;
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to create post");
      setSubmitting(false);
    }
  }
  
  return (
    <div className="container mt-3">
      <h1 className="text-primary">Create New Post</h1>
      {message && <p className="">{message}</p>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Post Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="postImg">
          <Form.Label>Post Image Url</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter url"
            value={formData.postImg}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Post Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            value={formData.category}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="tags">
          <Form.Label>Post Tags</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter comma separated words"
            value={formData.tags}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="content">
          <Form.Label>Post Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            placeholder="Enter post content"
            value={formData.content}
            onChange={handleChange}
          />
        </Form.Group>

        {submitting ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}
      </Form>
    </div>
  );
};

export default AddPost;
