import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { isAdmin } = useAuth();

  return (
    <>
      <Navbar isAdmin={isAdmin} />
      <Login />
      <Signup />
      <Logout />
    </>
  );
}

export default App;
