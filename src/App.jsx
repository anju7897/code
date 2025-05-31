import { useSate } from "react";
import "animate.css";
import "remixicon/fonts/remixicon.css";
import Home from "./Home";
import Contact from "./component/Contact";
import Holydays from "./component/Holydays";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<h1>Hello</h1>} />
        <Route path="/about" element={<h1>hooo</h1>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/holydays" element={<Holydays />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

// const App = () => {
//   const show = false;
//   const demo = (x, y) => {
//     console.log("hello");
//     console.log(x + y);
//   };
//   return (
//     <div>
//       <h1>coding ott</h1>
//       {show && <p>Hello sir</p>}
//       <button onClick={demo(8, 6)}>Test</button>
//     </div>
//   );
// };
// import { useState } from "react";
// const App = () => {
//   const [showImage, setShowImage] = useState(true);
//   const [bgDev, setBgDev] = useState("red");
//   const [input, setInput] = useState("");
//   const [fontSize, setFontSize] = useState(30);
//   const [color, setColor] = useState("red");
//   const [list, setList] = useState("");
//   const [data, setData] = useState([]);

//   const addList = () => {
//     setData([...data, list]);
//   };
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "#ddd",
//       }}
//     >
//       <div
//         style={{
//           background: "#fff",
//           padding: 48,
//           width: "50%",
//           margin: "0 auto",
//           display: "flex",
//           flexDirection: "column",
//           marginTop: 50,
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <h1
//             style={{
//               margin: 0,
//               padding: 0,
//             }}
//           >
//             CodingOtt
//           </h1>
//           <p style={{ margin: 0, padding: 0, marginBottom: 4 }}>
//             State Management React Application
//           </p>
//         </div>
//         <div>
//           <h2>Show and Hide app</h2>
//           {showImage && (
//             <img src="public/images/contact/b.webp" height="200px" />
//           )}
//           <br />
//           <button
//             style={{
//               background: "navy",
//               color: "white",
//               padding: "10px 20px",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//               fontSize: "16px",
//               marginTop: 20,
//             }}
//             onClick={() => setShowImage(!showImage)}
//           >
//             {showImage ? "Hide" : "Show"}
//           </button>
//         </div>

//         <div>
//           <h2>background toggle</h2>
//           <div
//             style={{
//               background: bgDev,
//               width: 300,
//               height: 300,
//               borderRadius: 10,
//             }}
//           />
//           <br />
//           <button
//             style={{
//               background: "navy",
//               color: "white",
//               padding: "10px 20px",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//               fontSize: "16px",
//               marginTop: 20,
//             }}
//             onClick={() => setBgDev(bgDev === "red" ? "blue" : "red")}
//           >
//             {bgDev === "red" ? "Blue" : "Red"}
//           </button>
//         </div>
//         <div>
//           <h2>Input Live Priveiw</h2>
//           <input
//             placeholder="Type Your text here"
//             style={{
//               border: "1px solid #ccc",
//               borderRadius: 5,
//               padding: 10,
//               width: 300,
//             }}
//             onChange={(e) => setInput(e.target.value)}
//           />
//           <h1>{input}</h1>
//         </div>
//         <div>
//           <h2>Font increaser</h2>
//           <p
//             style={{
//               fontSize: fontSize,
//             }}
//           >
//             CodingOtt
//           </p>
//           <input
//             type="range"
//             min="10"
//             max="200"
//             step="1"
//             onChange={(e) => setFontSize(Number(e.target.value))}
//           />
//         </div>
//         <div>
//           <h2>Color Value Sample</h2>
//           <input
//             placeholder="Enter Color name.."
//             onChange={(e) => setColor(e.target.value)}
//             value={color}
//           />
//           <div
//             style={{
//               background: color,
//               width: 100,
//               height: 100,
//               borderRadius: 10,
//               marginTop: 20,
//             }}
//           ></div>
//         </div>
//         <h1>dynamic list(using useState & Array)</h1>
//         <div>
//           <input
//             onChange={(e) => setList(e.target.value)}
//             value={list}
//             placeholder="Enter product name"
//             style={{
//               border: "1px solid #ccc",
//               borderRadius: 5,
//               padding: 10,
//               width: 300,
//             }}
//           />
//           <button
//             onClick={addList}
//             style={{
//               background: "navy",
//               color: "white",
//               padding: "10px 20px",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//               fontSize: "16px",
//               marginTop: 20,
//               marginLeft: 8,
//             }}
//           >
//             add
//           </button>
//         </div>
//         <ul>
//           {data.map((item, index) => {
//             <li key={index}>{item}</li>;
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default App;
// const App = () => {
//   const marks1 = {
//     math: 90,
//     english: 80,
//     science: 70,
//   };
//   const marks2 = {
//     hindi: 90,
//     phy: 80,
//     science: 70,
//   };
//   console.log({ ...marks1, ...marks2 });
//   return (
//     <div>
//       <h1>Spread Operator</h1>
//     </div>
//   );
// };
// export default App;
