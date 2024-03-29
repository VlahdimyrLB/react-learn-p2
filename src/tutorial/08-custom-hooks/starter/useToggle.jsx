import { useState } from "react";

// do this for reusability
const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);
  const toggle = () => {
    setShow(!show);
  };

  //we can return an array or object
  return { show, toggle };
};

export default useToggle;
