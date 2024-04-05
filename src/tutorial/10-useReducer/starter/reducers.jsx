import { data } from "../../../data";
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    //spread the old state then, override with the new one
    return { ...state, people: [] };
  }

  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }

  if (action.type === REMOVE_ITEM) {
    //we access the people using the state
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }

  //return state; //we can return a state to avoid errors
  //better option is to throw an error // check if the action type exist
  throw Error(`No matching "${action.type}" - action type`);
};

export default reducer;
