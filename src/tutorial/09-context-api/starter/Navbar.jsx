import NavLinks from "./Navlinks";
import { createContext, useState, useContext } from "react";

//export the created context
export const NavbarContext = createContext();

//custom hook
export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: "Vlahd" });

  const logout = () => {
    setUser(null);
  };

  return (
    //in this case the context api is only used in the child components or it should be nested in the navbar
    //wrap things inside the provider so everything in the tree can access the value
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};
export default Navbar;
