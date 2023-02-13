import { useState } from "react";
import { hotels } from "../../data";
import s from "./TopHotels.module.css";

export function TopHotels() {
  const [hotel, setHotel] = useState(hotels);
  const removeHotel = (id) => {
    let newHotel = hotel.filter((el) => el.id !== id);
    setHotel(newHotel);
  };

  return (
    <div>
      <div className={s.container}>
        <h1>My top {hotel.length} hotels</h1>
      </div>
      {hotel.map((element) => {
        const { id, hotelName, description, image, source } = element;

        return (
          <div key={id}>
            <div className={s.container}>
              <h2>
                {id} - {hotelName}
              </h2>
            </div>
            <div className={s.container}>
              <p>{description}</p>
            </div>
            <div className={s.container}>
              <img src={image} alt="hotels" width="300px" />
            </div>
            <div className={s.container}>
              <p>{source}</p>
            </div>
            <div className={s.container}>
              <button className={s.btn} onClick={() => removeHotel(id)}>
                remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
