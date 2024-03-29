import { useState } from "react";

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget); // returns the form element

    const formData = new FormData(e.currentTarget);
    console.log(formData); // FormData {}

    //OPTIONS
    //using get etc.
    const name = formData.get("name");
    console.log(name);
    console.log([...formData.entries()]); // (3) [Array(2), Array(2), Array(2)]

    //BETTER option transform it DIRECTLY into object instead of array of arrays entries
    //using Object.fromEntries
    const newUser = Object.fromEntries(formData);
    console.log(newUser); // {name: 'john', email: 'john@gmail', password: 'john'}

    //we need to clear the values
    setValue(value + 1);
    e.currentTarget.reset();
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>

        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-input" id="email" name="email" />
        </div>

        {/* password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default UncontrolledInputs;
