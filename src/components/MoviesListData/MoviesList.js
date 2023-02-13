import { useState } from "react";
import { moviesData } from "../../data";

export function MoviesList() {
  const [movie, setMovie] = useState(moviesData);
  return (
    <div>
      {movie.map((item) => {
        const { id, movie } = item;
        return (
          <div key={id}>
            <p>
              {id} - {movie}
            </p>
          </div>
        );
      })}
      <div>
        <button
          onClick={() => {
            setMovie([]);
          }}
        >
          Delete all movies
        </button>
      </div>
    </div>
  );
}
