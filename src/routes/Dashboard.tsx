import { auth } from "../firebase";

export default function Dashboard() {
  console.log("dashboard current user", auth.currentUser?.uid);

  return <div>Dashboard</div>;
}
