import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const fetchUserDoc = async (currentUser) => {
    if (currentUser) {
      const userDoc = await getDoc(doc(db, "users", currentUser.uid));
      console.log("ID:", currentUser.uid);
      console.log("userDoc: ", userDoc.data());
      if (userDoc.exists()) {
        console.log("Exists!");
        setIsAdmin(userDoc.data().isAdmin);
      }
    } else {
      console.log("No such document!");
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      await fetchUserDoc(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAdmin, fetchUserDoc }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
