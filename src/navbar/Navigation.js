import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
  useNavigate,
} from "react-router-dom";
import { FaBars } from "react-icons/fa";

import Task from "../components/Task";
import Learn from "../components/Learn";
import Blogs from "../components/Blogs";
import Books from "../components/Books";
import Reflect from "../components/Reflect";
import { Button, Typography } from "@material-ui/core";

const Navigation = ({ setIsAuth, isAuth }) => {
  let navigate = useNavigate();

  const signOut = () => {
    localStorage.clear();
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <>
      <div className="naviGation">
        <nav>
          <Typography variant="body">
            <ul className="nav-links">
              <li>
                <Link to="/">Task</Link>
              </li>
              <li>
                <Link to="/learn">Learn </Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>

              <li>
                <Link to="/books">Books</Link>
              </li>
              <li>
                <Link to="/reflect">Reflect</Link>
              </li>
              <li>
                {!isAuth ? (
                  <Link to="/login">Login</Link>
                ) : (
                  <Button
                    onClick={signOut}
                    style={{ color: "#2962ff", fontSize: "1.1rem" }}
                  >
                    log out
                  </Button>
                )}
              </li>
            </ul>
          </Typography>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
