import { useState } from "react";

//--------------------
//Ex1 - you are not allowed to use useEffect
//--------------------

type Counter = {
  counter: number;
  isDisabled: boolean;
};

const Ex1 = () => {
  const [state, setState] = useState<Counter>({
    counter: 0,
    isDisabled: false,
  });

  const handleClick = () => {
    state.counter = state.counter + 1;
    setState(state);
    if (state.counter === 1) {
      state.isDisabled = true;
      setState(state);
    }
  };

  return (
    <>
      <div>{state.counter}</div>
      <button onClick={handleClick}>Plus</button>
    </>
  );
};

export default Ex1;
