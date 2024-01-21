import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Book from "./Components/Book/Book";
import Contact from "./Components/contact/Contact";
import Blog from "./Components/Blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pages" element={<Blog />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
