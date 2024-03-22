import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>

      {toggle && <SampleComponent />}
    </div>
  );
};

const SampleComponent = () => {
  useEffect(() => {
    console.log("HELLO");
  }, []);

  return (
    <div>
      <h3>HEY HEY HEY</h3>
    </div>
  );
};

export default CleanupFunction;
