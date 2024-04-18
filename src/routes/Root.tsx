import { Button } from "@mui/material";
import { Outlet } from "react-router-dom";
import { auth } from "../firebase";
import { AuthContext } from "../main";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const logoutUser = () => {
  auth.signOut();
};

export default function Root() {
  const [user, setUser] = useState<unknown>();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    }
  });

  return (
    <AuthContext.Provider value={user}>
      <main>
        <header>
          <Button variant="contained" href="/login">
            Login
          </Button>
          <Button variant="contained" href="/register">
            Register
          </Button>
          {auth.currentUser && (
            <Button variant="contained" color="error" onClick={logoutUser}>
              Log Out
            </Button>
          )}
        </header>
        <Outlet />
      </main>
    </AuthContext.Provider>
  );
}
