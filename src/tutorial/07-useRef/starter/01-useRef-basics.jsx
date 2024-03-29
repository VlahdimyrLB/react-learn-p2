import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(false);

  // console.log(refContainer); //Object

  // useEffect(() => {
  //   console.log(refContainer); //{current: input#name.form-input}
  // });

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = refContainer.current.value;
    console.log(name);
  };

  //to avoid functionality running after initial render
  useEffect(() => {
    //use !isMounted.current instead of direct !isMounted since this is an object
    if (!isMounted.current) {
      isMounted.current = true;
      return; // return is important
    }
    console.log("re-render"); //this is the functionality
  }, [value]);

  //to focus on input after initial render
  useEffect(() => {
    refContainer.current.focus();
  });

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            ref={refContainer}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
