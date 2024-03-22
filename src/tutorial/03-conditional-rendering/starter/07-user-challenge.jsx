import { useState } from "react";

const UserChallenge = () => {
  // Initialize state variable user with null
  const [user, setUser] = useState(null);

  // Function to log in the user
  const login = () => {
    // Set user to an object with a name property
    setUser({ name: "Vlahdimyr" });
  };

  // Function to log out the user
  const logout = () => {
    // Set user back to null
    setUser(null);
  };

  return (
    <>
      {/* Conditional rendering based on the truthiness of user */}
      {/* If user is truthy (not null), render logged-in content */}
      {user ? (
        <div>
          {/* Access user.name, which is available if user is an object */}
          <h4>Hello There {user.name}</h4>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        // If user is falsy (null), render login prompt
        <div>
          <h4>Please Login</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;

// MY OWN ANSWER
// const UserChallenge = () => {
//   const [user, setUser] = useState(null);

//   const handleButton = () => {
//     if (user) {
//       setUser(null);
//       return;
//     }
//     setUser({ name: "Vlahdimyr" });
//   };

//   return (
//     <div>
//       <h4>{user ? `Hello There ${user.name}` : "please login"}</h4>
//       <button className="btn" onClick={handleButton}>
//         {user ? "Logout" : "Login"}
//       </button>
//     </div>
//   );
// };
