// import Assignment3 from "./a3";
// import JsonStringify from "./a3/JsonStringify";
// import Assignment4 from "./a4";
// import Assignment5 from "./a5";
// import { HashRouter, Route, Routes, Link, useLocation, Navigate } from "react-router-dom";
// function Labs() {
//     const {pathname} = useLocation();
//     return (
//         <div className="container">
//             <h2>Labs</h2>
//             <div className="nav nav-pills">
//                 <Link to="/Labs/a3" className={`nav-link ${pathname.includes('a3') ? 'active' : ''}`}>Assignment 3</Link>
//                 <Link to="/Labs/a4" className={`nav-link ${pathname.includes('a4') ? 'active' : ''}`}>Assignment 4</Link>
//                 <Link to="/Labs/a5" className={`nav-link ${pathname.includes('a5') ? 'active' : ''}`}>Assignment 5</Link>
//             </div>
//             <Routes>
//                 <Route path="/" element={<Navigate to="a3" />}></Route>
//                 <Route path="a3/*" element={<Assignment3 />}></Route>
//                 <Route path="/a4" element={<Assignment4 />}></Route>
//                 <Route path="/a5" element={<Assignment5 />}></Route>
//             </Routes>
//         </div>
//     );
// }
// export default Labs;
import Nav from "../Nav";
import Assignment3 from "./a3";
import store from "./store";
import { Provider } from "react-redux";

import Assignment4 from "./a4";
import { Routes, Route, Navigate }
  from "react-router";

function Labs() {

  return (
    <Provider store={store}>
      <div>
        <Nav />
        <Routes>
          <Route path="/"
            element={<Navigate
              to="a3" />} />
          <Route path="a3"
            element={<Assignment3 />} />
          <Route path="a4"
            element={<Assignment4 />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default Labs;