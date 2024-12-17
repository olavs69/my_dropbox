import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const fetchUserDoc = async (currentUser) => {
    if (currentUser) {
      try {
        const q = query(
          collection(db, "users"),
          where("userID", "==", currentUser.uid)
        );
        console.log("Querying for user with UID:", currentUser.uid);
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          console.log("userDoc: ", userDoc.data());
          setIsAdmin(userDoc.data().isAdmin);
        } else {
          console.log("No such document!");
          setIsAdmin(false);
        }
      } catch (error) {
        console.error("Error fetching user document:", error);
      }
    } else {
      console.log("No current user!");
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
