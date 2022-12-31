import React from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login">
        <div className="inside">
          <span className="username">Username :</span>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            className="inp"
          />
        </div>

        <div>
          <span className="username">Password : </span>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            className="inp"
          />
        </div>
        <div>
          <Button variant="contained" className="login-btn">
            Login
          </Button>
        </div>
        <div>
          <Link to="/signup">
            <Button variant="outlined" className="signup-btn">
              Register Here
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
