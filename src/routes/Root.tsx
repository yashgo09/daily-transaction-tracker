import { Button } from "@mui/material";
import { Outlet } from "react-router-dom";

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
      </header>
      <Outlet />
    </main>
  );
}
