import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import Hero  from "./components/Hero";

const App = () => {
  return (
    <div className="App">
      
      <Router>
      <NavBar />
      <Cart />
      <NavMenu />
        <Routes>
          <Route path="/products/:handle" element={<ProductPage />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
