function App() {

  function showMessage() {
    alert("Button Clicked!");
  }

  return (
    <div>
      <h1>Hello React 🚀</h1>

      <p>This is a simple React app</p>

      <button onClick={showMessage}>
        Click Me
      </button>
    </div>
  );
}

export default App;
