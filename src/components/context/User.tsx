import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export const UserComponent = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({
      name: "Series Chikanbanjar",
      email: "series.chikanbanjar@infodevelopers.com.np",
    });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h2>User Name is {userContext.user?.name}</h2>
      <h2>User Email is {userContext.user?.email}</h2>
    </>
  );
};
