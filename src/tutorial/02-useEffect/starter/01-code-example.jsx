import { useState } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log("Hello");

    //setting the setValue here will cause infinite loop -
    //when/if we invoke the sayHello()
    setValue(value + 1);
  };

  //this will be excuted in initial render
  //also in every render
  sayHello();

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
