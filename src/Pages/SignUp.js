import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  //initialize all input data to values
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  //creating a new user in firebase
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        setErrorMessage(err.message); //for error messages
      });
  };
  return (
    <div style={{ backgroundColor: "#70C0F7" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <Card sx={{ width: "400px", height: "500px", margin: "10px" }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Create An Account
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                onChange={(e) =>
                  setValues((data) => ({ ...data, name: e.target.value }))
                }
              />
              <TextField
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                onChange={(e) =>
                  setValues((data) => ({ ...data, email: e.target.value }))
                }
              />
              <TextField
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                onChange={(e) =>
                  setValues((data) => ({ ...data, password: e.target.value }))
                }
              />
              <Typography sx={{ color: "red" }}>{errorMessage}</Typography>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ marginTop: "25px" }}
              >
                Sign Up
              </Button>
              <Typography mt={5}>
                Already Have an Account?
                <span>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Login
                  </Link>
                </span>
              </Typography>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
