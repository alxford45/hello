import React from "react";

type State<T> = T[];
type Action<T> = { type: string; payload: T };
type Reducer<T> = (state: State<T>, action: Action<T>) => State<T>;

const initialState: State<string> = [];

const reducer: Reducer<string> = (state, action) => {
  const { type, payload } = action;

  console.log(`action: ${type}, payload: ${payload}`);

  switch (type) {
    case "add":
      return [...state, payload];
    case "remove":
      return [...state].filter(val => val !== payload);
    default:
      return state;
  }
};

export const List = () => {
  const inputRef = React.useRef(null);
  const [list, dispatch] = React.useReducer(reducer, initialState);

  const add = (item: HTMLInputElement): void => {
    dispatch({ type: "add", payload: item.value });
  };

  const remove = (value: string): void => {
    dispatch({ type: "remove", payload: value });
  };
  return (
    <React.Fragment>
      <input type="text" ref={inputRef} />
      <button onClick={() => add(inputRef.current!)}>add</button>
      <ul>
        {list.map((val, idx) => (
          <li key={idx}>
            {val}
            <button onClick={() => remove(val)}>x</button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
