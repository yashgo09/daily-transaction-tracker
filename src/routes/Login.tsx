import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { auth } from "../firebase";
import { Button, TextField, Typography } from "@mui/material";

export default function Login() {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  console.log(loginDetails);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        loginDetails.email,
        loginDetails.password
      );

      console.log("Sign Up Successful", userCredentials);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h3">Login Form</Typography>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(e) => setLoginDetails((prev) => ({ ...prev, email: e.target.value }))}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        onChange={(e) => setLoginDetails((prev) => ({ ...prev, password: e.target.value }))}
      />
      <Button variant="contained" type="submit">
        Login
      </Button>
      <Button variant="outlined" href="/sign-up">
        Register
      </Button>
    </form>
  );
}
