import { useState } from "react";

const UseStateObject = () => {
  //if you want to group state values, you cna use objects ex. alerts/modal
  const [person, setPerson] = useState({
    name: "Shar",
    age: 21,
    hobby: "Swimming",
  });

  const changePerson = () => {
    console.log(person);
    // setPerson({
    //   name: "Vlahd",
    //   age: 20,
    //   hobby: "Play Game",
    // });

    //if I want to change just the name
    //this will only output the name and remove the others
    // setPerson({ name: "Vlahd" });

    //If I want to change one value and retain other data
    setPerson({
      ...person,
      name: "Vlahd",
    });
  };

  return (
    <>
      <h1>UseState Object Example</h1>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.hobby}</h4>
      <button type="button" className="btn " onClick={changePerson}>
        Change
      </button>
    </>
  );
};

export default UseStateObject;
