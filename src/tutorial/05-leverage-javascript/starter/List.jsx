import { people } from "../../../data";
import Person from "./Person";

const List = () => {
  return (
    <div>
      <h2>List</h2>
      {people.map((person) => {
        return <Person key={person.name} {...person} />;
      })}
    </div>
  );
};
export default List;
