import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  //check user mail and password in firebase
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        navigate("/");
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
              Login
            </Typography>
            <form onSubmit={handleSubmit}>
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
                Login
              </Button>
              <Typography mt={5}>
                Don't Have An Account?
                <span>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    SignUp
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

export default Login;
