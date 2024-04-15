import { useState } from "react";
import "./App.css";
import { signInWithEmailPassword, signUpWithEmailPassword } from "./firebase";
import { auth } from "./firebase";

function App() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  const registerUser = () => {
    signUpWithEmailPassword(formData);
  };
  const loginUser = () => {
    signInWithEmailPassword(loginDetails);
  };

  return (
    <main>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Sign Up Form</h1>
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
          />
        </label>
        <button type="submit" onClick={registerUser}>
          Register
        </button>
      </form>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Login Form</h1>
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={(e) => setLoginDetails((prev) => ({ ...prev, email: e.target.value }))}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={(e) => setLoginDetails((prev) => ({ ...prev, password: e.target.value }))}
          />
        </label>
        <button type="submit" onClick={loginUser}>
          Login
        </button>
      </form>

      <button
        className="btn"
        onClick={() => {
          auth.signOut();
        }}
      >
        Log Out
      </button>
    </main>
  );
}

export default App;
