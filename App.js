import "./App.css";
import Navbar from "./compnents/Navbar";
aaa
import Home from "./pages/Home.js";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;