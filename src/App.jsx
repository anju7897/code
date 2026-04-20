import Home from "./Home";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Holydays from "./component/Holydays";

function App() {

  function showMessage() {
    alert("Button Clicked!");
  }

  return (
    <div>


      <Home />
      <Contact />
      <Holydays />
      <Footer />
    </div>
  );
}

export default App;
