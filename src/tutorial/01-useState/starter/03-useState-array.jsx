import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeSingle = (id) => {
    console.log(id);
    //filters the array
    //returns all id not equal to sleected id
    //if persion.id not equal to id return a new array excluding the selected id
    // const newPeople = people.filter((person) => person.id !== id);

    //we can pass the filter inside the setPeople function right away
    setPeople(people.filter((person) => person.id !== id));
  };
  const removeAll = () => {
    setPeople([]);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button onClick={() => removeSingle(id)} type="button">
              Remove Item
            </button>
          </div>
        );
      })}
      <button
        onClick={removeAll}
        className="btn"
        type="button"
        style={{ marginTop: "20px" }}
      >
        Clear All
      </button>
    </div>
  );
};

export default UseStateArray;
