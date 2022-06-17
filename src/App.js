import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const App = () => {
  document.body.style.backgroundColor = "#fdf6f1"
  return(
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;