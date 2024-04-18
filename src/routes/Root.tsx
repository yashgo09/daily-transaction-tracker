import { Button } from "@mui/material";
import { Outlet } from "react-router-dom";
import { auth } from "../firebase";

const logoutUser = () => {
  auth.signOut();
};

export default function Root() {
  return (
    <main>
      <header>
        <Button variant="contained" href="/login">
          Login
        </Button>
        <Button variant="contained" href="/register">
          Register
        </Button>
        <Button variant="contained" color="error" onClick={logoutUser}>
          Log Out
        </Button>
      </header>
      <Outlet />
    </main>
  );
}
