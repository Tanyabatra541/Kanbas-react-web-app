import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Account() {
  const { id } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  // const id = params.get('id');
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  const save = async () => {
    await client.updateUser(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="card w-50 mx-auto">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">Account</h1>
          {account && (
            <div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={account.password}
                  onChange={(e) =>
                    setAccount({
                      ...account,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={account.firstName}
                  onChange={(e) =>
                    setAccount({
                      ...account,
                      firstName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={account.lastName}
                  onChange={(e) =>
                    setAccount({
                      ...account,
                      lastName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="dob" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  value={account.dob}
                  onChange={(e) =>
                    setAccount({
                      ...account,
                      dob: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={account.email}
                  onChange={(e) =>
                    setAccount({
                      ...account,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="role" className="form-label">
                  Role
                </label>
                <select
                  className="form-control"
                  id="role"
                  onChange={(e) =>
                    setAccount({
                      ...account,
                      role: e.target.value,
                    })
                  }
                >
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                  <option value="FACULTY">Faculty</option>
                  <option value="STUDENT">Student</option>
                </select>
              </div>
              <button onClick={save} className="btn btn-primary w-100 mb-2">
                Save
              </button>
              <button onClick={signout} className="btn btn-danger w-100">
                Signout
              </button>
              <Link to="/project/admin/users" className="btn btn-warning w-100">
                Users
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Account;
