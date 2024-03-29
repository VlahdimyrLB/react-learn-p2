// import { useContext } from "react";
// import { NavbarContext } from "./Navbar";
//instead of using above we created custom hook

import { useAppContext } from "./Navbar";

const UserContainer = (props) => {
  //use context will look for the created context
  //console.log(useContext(NavbarContext)); //{user: {…}, logout: ƒ}

  //const { user, logout } = useContext(NavbarContext);
  //instead of using above we can also create custom hook to handle useContext
  const { user, logout } = useAppContext();

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Welcome! {user?.name?.toUpperCase()}</p>{" "}
          <button type="button" className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        "Please Login"
      )}
    </div>
  );
};
export default UserContainer;
