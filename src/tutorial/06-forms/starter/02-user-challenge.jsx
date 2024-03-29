import { useState } from "react";
import { data } from "../../../data";
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [person, setPerson] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    if (!name) return;

    //id is set only for practice
    const random = Math.random() * 100; //dont use in actual
    const newUsers = { id: random, name: name };

    //spread the person first since I will not overwrite, im just adding the new user
    const updatedUsers = [...person, newUsers];
    setPerson(updatedUsers);
  };

  const handleRemove = (id) => {
    //filter all id that is not equal to the clicked id
    //so it will return a new array without the click id // basically removing that id in the new array
    const updatedUsers = person.filter((p) => p.id !== id);
    setPerson(updatedUsers);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>

        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      {person.map((person) => {
        return (
          <div key={person.id}>
            <h3>{person.name}</h3>
            <button
              className="button"
              onClick={() => {
                handleRemove(person.id);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
