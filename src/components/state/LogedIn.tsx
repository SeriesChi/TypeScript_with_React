import { useState } from "react";

export const LogedIn = () => {
  const [isLogedIn, setisLogedIn] = useState(false);
  const handleLogIn = () => {
    setisLogedIn(true);
  };
  const handleLogOut = () => {
    setisLogedIn(false);
  };
  return (
    <>
      <button onClick={handleLogIn}>Loged In</button>
      <button onClick={handleLogOut}>Loged Out</button>
      <div> User is {isLogedIn ? "loged in" : "loged out"}</div>
    </>
  );
};
