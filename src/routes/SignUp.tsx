import { createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { auth } from "../firebase";
import { Alert, Button, Snackbar, TextField, Typography } from "@mui/material";

export default function SignUp() {
  const [signUpDetails, setSignUpDetails] = useState({ email: "", password: "" });

  const [open, setOpen] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        signUpDetails.email,
        signUpDetails.password
      );

      setSuccess(true);

      console.log("Sign Up Successfulll:", userCredentials);
    } catch (e) {
      console.error("Error while registering", e);
    }

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert severity={success ? "success" : "error"} variant="filled" sx={{ width: "100%" }}>
            Signed Up Successfully
          </Alert>
        </Snackbar>

        <Typography variant="h3">Sign Up Form</Typography>

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={(e) => setSignUpDetails((prev) => ({ ...prev, email: e.target.value }))}
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={(e) => setSignUpDetails((prev) => ({ ...prev, password: e.target.value }))}
        />

        <Button variant="contained" type="submit">
          Sign Up
        </Button>

        <Button variant="outlined" href="/login">
          Login
        </Button>
      </form>
    </main>
  );
}
