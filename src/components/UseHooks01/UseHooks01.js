import { useState } from "react";
function UseHooks01() {
  const [name, setName] = useState("Alla");
  const [age, setAge] = useState(28);

  const updateData = () => {
    setName("Emeily");
    setAge(4);
  };
  return (
    <div>
      <h1>Hello {name}</h1>
      <h1>Hello {age}</h1>
      <button onClick={updateData}>Click</button>
    </div>
  );
}
export default UseHooks01;
