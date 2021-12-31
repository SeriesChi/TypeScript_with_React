import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  // ----- useState Future Value -----

  //   const [user, setUser] = useState<AuthUser | null>(null);

  //   const handleLogin = () => {
  //     setUser({
  //       name: "Series Chikanbanjar",
  //       email: "series.chikanbanjar@infodevelopers.com.np",
  //     });
  //   };

  //   const handleLogout = () => {
  //     setUser(null);
  //   };

  // ----- useState Type Assertion -----

  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "Series Chikanbanjar",
      email: "series.chikanbanjar@infodevelopers.com.np",
    });
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>

      {/* useState Future Value  */}
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>
        {/* useState Future Value */}
        {/* User name is {user?.name}
        user email is {user?.email} */}
        User name is {user.name}
        user email is {user.email}
      </div>
    </>
  );
};
