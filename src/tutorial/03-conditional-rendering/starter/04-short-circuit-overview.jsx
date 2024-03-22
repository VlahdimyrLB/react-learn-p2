import { useState } from "react";

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("");
  //truthy
  const [name, setName] = useState("Vlahd");
  return (
    <div>
      {/* {if(condition){} this wont work in jsx)} */}

      {/* Will output Hello World - if first one is falsy it will display second one */}
      <h4>Falsy OR {text || "Hello World"}</h4>

      {/* Will display " " or nothing - in AND if first is falsy then return falsy */}
      <h4>Falsy AND {text && "Hello World"}</h4>

      {/* Will idsplay Vlahd - truthy or will display first one */}
      <h4>Truthy OR {name || "Hello World"}</h4>

      {/* Will display Hello World - truthy AND will display second one */}
      <h4>Truthy AND {name && "Hello World"}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
