import React, { useReducer } from "react";
import { data } from "../../../data";
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";
import reducer from "./reducers";

const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  //                        useReducer has two params reducer function and default value
  const [state, dispatch] = useReducer(reducer, defaultState);
  //state is all the state
  //dispatch an action to update the state through the reducer function

  const removeItem = (id) => {
    //id can be passed as another property in dispatch object
    //we use payload{id}
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

  console.log(state);

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          Reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
