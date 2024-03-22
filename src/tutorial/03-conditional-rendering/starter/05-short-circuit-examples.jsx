import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john", age: 12 });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {/* common example of OR usage */}
      {/* If theres a text, show text, if not show default value */}
      <h2>{text || "Default Value"}</h2>
      {/* AND example */}
      {/* IF text is true then evaluate && second option */}
      {text && (
        <div>
          <h2>Anything</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* this wont show anything unless the text is truthy */}

      {/* {!text && (
        <div>
          <h2>Anything</h2>
          <h2>{name}</h2>
        </div>
      )}
      This one will work because it uses not operator */}

      {/* HERES A COMPONENT EXAMPLE */}
      {/* if user exist it will show the component */}
      {user && (
        <>
          <SampleComponent name={user.name} age={user.age} />
        </>
      )}
      <h1 style={{ margin: "30px 0" }}>Ternary Operator (divider)</h1>
      {/* Will show Add because isEditing is set to false */}
      <button className="btn">{isEditing ? "Edit" : "Add"}</button>

      {/* We can also use it instead of truthy or falsy */}
      {user ? (
        <>
          <h4>Hello there {user.name}</h4>
        </>
      ) : (
        <>
          <h4>Please Login First</h4>
        </>
      )}
    </div>
  );
};

const SampleComponent = ({ name, age }) => {
  return (
    <>
      <h2>{name}</h2>
      <h3>{age} y/o</h3>
    </>
  );
};

export default ShortCircuitExamples;
