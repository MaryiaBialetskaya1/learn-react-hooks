import { useState } from "react";

export function ChangeText() {
  const [text, setText] = useState("JavaScript");
  const handleClick = () => {
    if (text === "JavaScript") {
      setText("React");
    } else {
      setText("JavaScript");
    }
  };

  return (
    <div>
      <h1>I love {text}</h1>
      <button onClick={handleClick}>Click to change text</button>
    </div>
  );
}
