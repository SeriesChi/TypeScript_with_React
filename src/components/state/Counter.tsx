import { useReducer } from "react";

type UpdateProps = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetProps = {
  type: "reset";
};

type ActionProps = UpdateProps | ResetProps;

type StateProps = {
  count: number;
};

const initialState = { count: 0 };

function reducer(state: StateProps, action: ActionProps) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };

    case "decrement":
      return { count: state.count - action.payload };

    case "reset":
      return initialState;

    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      counter: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment By 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement By 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};
