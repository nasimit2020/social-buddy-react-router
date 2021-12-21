import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./compunent/About/About";
import CountactUs from "./compunent/ContactUs/CountactUs";
import Home from "./compunent/Home/Home";
import NotFound from "./compunent/NotFound/NotFound";
import PostDetail from "./compunent/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact Us</Link>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<CountactUs/>} />
          <Route path="post/:postId" element={<PostDetail/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
