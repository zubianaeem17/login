import React from "react";
import './App.css';
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";



function Signup() {
    return (
        <>
        
        <div className="login">
        <div className="inside">
          <span className="username">Firstname :</span>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            className="inp"
          />
        </div>

        <div  className="inside">
          <span className="username">Lastname : </span>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            className="inp"
          />
        </div>
        <div className="inside">
          <span className="signinp">Username :</span>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            className="inp"
          />
        </div>
        <div>
          <span className="signinp">Password : </span>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            className="inp"
          />
        </div>
        <div>
            <Link to='/'>
          <Button variant="contained" className="login-btn">
            Login Here
          </Button>
          </Link>
        </div>
        </div>
        </>
    )
}

export default Signup;