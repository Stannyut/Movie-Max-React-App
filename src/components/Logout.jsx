import React from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { auth } from "../Firebase/firebase";

const Logout = () => {
  const { setCurrentUser, setUserLoggedIn, setIsEmailUser, setIsGoogleUser } =
    useAuth();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setCurrentUser(null);
      setUserLoggedIn(false);
      setIsEmailUser(false);
      setIsGoogleUser(false);
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger">
      Logout
    </button>
  );
};

export default Logout;
