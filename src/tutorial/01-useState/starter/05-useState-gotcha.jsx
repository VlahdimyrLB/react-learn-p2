import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const increaseValue = () => {
    // setValue(value + 1);
    // console.log(value); // this is one behind than what is shown

    //what if we need the latest/recent value? - use function inside the set
    //currentState is the state before the update
    //it is provided by react
    setValue((currentState) => {
      const newState = currentState + 1;
      return newState;
    });
  };

  //another example and USE CASE of function inside setValue
  //using setTimeout even if you click 2 or more it will only execute once every 3 seconds
  //but if we use a function inside setValue we can return the exact value base on number of clicks
  //because its synchronuous
  const handleClick = () => {
    setTimeout(() => {
      console.log("clicks");
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <>
      <h2>useState "gotcha"</h2>
      <h4>{value}</h4>
      <button className="btn" type="button" onClick={handleClick}>
        Increase
      </button>
    </>
  );
};

export default UseStateGotcha;
