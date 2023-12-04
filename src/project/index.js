import Signin from "./users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UserTable from "./users/table";
import Account from "./users/account";
import Signup from "./users/signup";
function Project() {
  return (
    <div className="row nav nav-bar">
      <div className="col-2">
        <Link className="nav-link" to="/project/signin">
          Home
        </Link>
        <Link className="nav-link" to="/project/search">
          Search
        </Link>
        <Link className="nav-link" to="/project/signin">
          Signin
        </Link>
        <Link className="nav-link" to="/project/signup">
          Signup
        </Link>
        <Link className="nav-link" to="/project/account">
          Account
        </Link>
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/project/home" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}
export default Project;
