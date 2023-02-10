import { useState } from "react";

export function CountDown() {
  const [number, setNumber] = useState(100);

  const updateData = () => {
    if (number >= 5) {
      setNumber(number - 5);
    } else {
      setNumber(0);
    }
  };
  console.log(number);
  return (
    <div>
      <h1>Number: {number}</h1>
      <button onClick={updateData}>Click</button>
    </div>
  );
}
