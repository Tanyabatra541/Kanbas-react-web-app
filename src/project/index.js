import Signin from "./users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UserTable from "./users/table";
import Account from "./users/account";
import Signup from "./users/signup";

function Project() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 bg-dark text-light" style={{ height: '100vh' }}>
          <nav className="nav flex-column">
            <Link className="nav-link" to="/project/signin" activeClassName="active-link">
              Home
            </Link>
            <Link className="nav-link" to="/project/search" activeClassName="active-link">
              Search
            </Link>
            <Link className="nav-link" to="/project/signin" activeClassName="active-link">
              Signin
            </Link>
            <Link className="nav-link" to="/project/signup" activeClassName="active-link">
              Signup
            </Link>
            <Link className="nav-link" to="/project/account" activeClassName="active-link">
              Account
            </Link>
          </nav>
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
    </div>
  );
}

export default Project;
