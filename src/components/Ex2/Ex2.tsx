import { useEffect, useState } from "react";

//----------------
//Ex2 - you are not allowed to switch to setTimeout and you can't use // eslint-disable-next-line
//----------------

const Ex2 = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
  }, [counter]);

  return <div>{counter}</div>;
};

export default Ex2;
