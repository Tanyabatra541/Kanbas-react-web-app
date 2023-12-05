import Signin from "./users/signin";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UserTable from "./users/table";
import Account from "./users/account";
import Signup from "./users/signup";
import { useState } from "react";
import * as client from "./users/client";

function Project() {

    const [userId,setUserId] = useState("");

    const navigate = useNavigate();
    const signin = async (credentials) => {
        console.log(credentials);
        const response = await client.signin(credentials);
        // navigate("/project/account");
        setUserId(response._id)
        // const userId = String(response._id);
        navigate(`/project/account?id=${userId}`);
      };

      const signout = async () => {
        setUserId("");
        await client.signout();
        navigate("/project/signin");
      };

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
            <Route path="/signin" element={<Signin signin={signin}/>} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/account" element={<Account signout={signout} />} />
            <Route path="/account/:id" element={<Account signout={signout}/>} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Project;
