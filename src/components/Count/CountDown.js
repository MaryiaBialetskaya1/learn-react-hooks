import { useState } from "react";

export function CountDown() {
  const [namber, setNumber] = useState(100);

  const updateData = () => {
    setNumber(namber - 5);
  };

  return (
    <div>
      <h1>Number: {namber}</h1>
      <button onClick={updateData}>Click</button>
    </div>
  );
}
