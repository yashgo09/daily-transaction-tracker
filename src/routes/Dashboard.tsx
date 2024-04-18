import { useContext } from "react";
import { AuthContext } from "../main";

export default function Dashboard() {
  const user = useContext(AuthContext);

  console.log("AuthContext", user);

  return <div>dashboard</div>;
}
