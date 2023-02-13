import { useState } from "react";
import { data } from "../../data";

export function List() {
  const [todo, setData] = useState(data);
  return (
    <div>
      {todo.map((name) => {
        const { id, todo } = name;
        return (
          <div key={id}>
            <p>
              {id} {todo}
            </p>
          </div>
        );
      })}
      <div>
        <button
          onClick={() => {
            setData([]);
          }}
        >
          Delete all
        </button>
      </div>
    </div>
  );
}
