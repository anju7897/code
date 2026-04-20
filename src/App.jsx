import Home from "./Home";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Holydays from "./component/Holydays";

function App() {

  const showMessage = () => {
    alert("Button Clicked!");
  };

  return (
    <div>
      <h1>Hello React 🚀</h1>

      <Home />
      <Contact />
      <Holydays />
      <Footer />

      {/* Example button */}
      <button onClick={showMessage}>Click Me</button>
    </div>
  );
}

export default App;