import React from "react";

const Navbar = ({ isAdmin }) => {
  return <h2>Admin Status = {isAdmin ? "Admin" : "User"}</h2>;
};

export default Navbar;
