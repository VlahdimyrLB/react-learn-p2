import { useState } from "react";

const ToggleChallenge = () => {
  const [isToggled, setIsToggled] = useState(false);

  // const toggle = () => {
  //   if (isToggled) {
  //     setIsToggled(false);
  //     return;
  //   }
  //   setIsToggled(true);
  // };

  //instead of that we can create a one liner on the onClick

  return (
    <>
      {/* This will now set the toggle to oppositide of isToggled */}
      <button
        className="btn"
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        {isToggled ? "Show" : "Hide"}
      </button>

      {!isToggled ? <SampleComponent /> : <> </>}
    </>
  );
};

const SampleComponent = () => {
  return <div className="alert alert-danger">Hello There</div>;
};

export default ToggleChallenge;
