import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nameChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    //set the state value to the inputs
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //do something in the server

    console.log(name, email);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          id="name"
          value={name}
          onChange={nameChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-input"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;
