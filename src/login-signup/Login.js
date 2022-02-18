import { Button, Typography } from "@material-ui/core";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase/firebase";
import GoogleIcon from "@mui/icons-material/Google";
function Login({ isAuth, setIsAuth }) {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="login-page">
      <Typography variant="h6" style={{ color: "#2979ff" }}>
        Add your task, blogs link, book summaries and daily journal here.
      </Typography>
      <Typography
        variant="h5"
        style={{
          // marginLeft: "35.5rem",
          // marginTop: "17rem",
          // position: "absolute",
          marginTop: "1rem",
          marginBottom: "1rem",
          marginLeft: "8rem",
          color: "#424242",
        }}
      >
        sign-in to add something.
      </Typography>
      <Button
        variant="contained"
        style={{
          marginLeft: "13rem",
          backgroundColor: "#2979ff",
          color: "#fff",
        }}
        startIcon={<GoogleIcon />}
        onClick={signInWithGoogle}
      >
        Sing In
      </Button>
    </div>
  );
}

export default Login;
