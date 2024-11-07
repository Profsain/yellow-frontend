import { Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import About from "./components/aboutpage/About";
import Products from "./components/productspage/Products";
import BlogList from "./components/blogpage/BlogList";
import Contact from "./components/contactpage/Contact";
import Navigationbar from "./components/header/Navigationbar";
import AddPost from "./components/blogpage/AddPost";
import CreateProduct from "./components/productspage/CreateProduct";
import SinglePost from "./components/blogpage/SinglePost";

const App = () => {
  return (
    <>
      <Navigationbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<CreateProduct />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/create-post" element={<AddPost />} />
        <Route path="/blog/:id" element={<SinglePost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
