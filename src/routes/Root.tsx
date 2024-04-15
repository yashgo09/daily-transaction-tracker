import { Button, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <main>
      <Typography variant="h1">Welcome to Transaction Tracking App</Typography>
      <Button href="/login">Login</Button>
      <Outlet />
    </main>
  );
}
