import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { auth } from "../firebase";
import { Alert, Button, Snackbar, TextField, Typography } from "@mui/material";

export default function Login() {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  const [open, setOpen] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>();

  console.log(loginDetails);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        loginDetails.email,
        loginDetails.password
      );

      setSuccess(true);

      console.log("Sign In Successful", userCredentials);
    } catch (e) {
      console.error("Error while sign in", e);
    }

    setOpen(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert severity={success ? "success" : "error"} variant="filled" sx={{ width: "100%" }}>
          Signed Up Successfully
        </Alert>
      </Snackbar>

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
