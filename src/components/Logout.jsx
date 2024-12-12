import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig.js";

const Logout = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logout successful!");
    } catch (err) {
      console.error("Error logging out: ", err);
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;