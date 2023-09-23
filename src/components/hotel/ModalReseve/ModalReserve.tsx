"use client";

import styles from "./ModalReserve.module.css";
import { useRouter } from "next/navigation";

interface Props {
  room: Room;
}

export default function ModalReserve({ room }: Props) {
  const { container, h2, form, doubleInput, reserve } = styles;

  const router = useRouter();

  const handlerSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target: any = e.target;

    const checkIn = target.checkIn.value;
    const checkOut = target.checkOut.value;
    const guests = target.guests.value;

    if (!checkIn || !checkOut || !guests) return;

    router.push(
      `/booking?room=${room.slug}&in=${checkIn}&out=${checkOut}&guests=${guests}`
    );
  };

  return (
    <article className={container}>
      <h2 className={h2}>Request to book</h2>
      <form onSubmit={handlerSubmit} className={form}>
        <div className={doubleInput}>
          <label>
            Check-in:
            <input type="date" name="checkIn" />
          </label>
          <label>
            Check-out:
            <input type="date" name="checkOut" />
          </label>
        </div>
        <label>
          Guests:
          <select name="guests">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </label>
        <button className={reserve}>Reserve</button>
      </form>
    </article>
  );
}
