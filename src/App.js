// import './App.css';
// import Labs from "./Labs";
// import HelloWorld from "./Labs/a3/HelloWorld";
// import Kanbas from "./Kanbas";
// import { HashRouter, Route, Routes, Link } from "react-router-dom";

// function App() {
//   return (
//     <HashRouter>
//       <div>
//         <h1>React Labs</h1>
//         <Link to="/Hello">Hello World</Link><br />
//         <Link to="/Labs">Labs</Link><br />
//         <Link to="/Kanbas">Kanbas</Link><br /> 
//         <Routes>
//           {/* <Route path="/" element={<Navigate to="Kanbas" />}></Route> */}
//           <Route path="/Hello" element={<HelloWorld />}></Route>
//           <Route path="/Labs/*" element={<Labs />}></Route>
//           <Route path="/Kanbas/*" element={<Kanbas />}></Route>
//         </Routes>
//       </div>
//     </HashRouter>
//   );
// }

// export default App;

import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <HashRouter>

      <div>
        
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>

      </div>

    </HashRouter>
  );
}

export default App;
