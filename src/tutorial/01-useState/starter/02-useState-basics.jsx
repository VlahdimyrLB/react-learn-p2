import { useState } from "react";

const UseStateBasics = () => {
  console.log(useState()); //  [undefined, ƒ]
  const value = useState("hello")[0]; //first element is the Value / current state value
  const func = useState("hello")[1]; //second element is the function / to update state
  console.log(value); // "hello"
  console.log(func); // ƒ

  //BETTER USE DESTRUCTURING
  const [count, setCount] = useState(0);

  //now we can chnange the click count
  //invoke the useState function which is setCount inside our function

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h4>Number of clicks: {count}</h4>
      <button className="btn" type="button" onClick={increment}>
        Increase
      </button>
      <button className="btn" type="button" onClick={decrement}>
        Decrease
      </button>
    </div>
  );
};

export default UseStateBasics;
