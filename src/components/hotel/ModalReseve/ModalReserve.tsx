"use client";

import styles from "./ModalReserve.module.css";
import { useRouter } from "next/navigation";
import DatePicker from "<src>/components/common/DatePicker/DatePicker";
import { useState } from "react";

interface Props {
  room: Room;
  destinationName: string;
}

export default function ModalReserve({ room, destinationName }: Props) {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const hotel: any = room.resort;
  const hotelName = hotel.fields.secretName;

  const { container, h2, form, reserve } = styles;

  const router = useRouter();

  const handlerSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target: any = e.target;

    const checkIn = new Date(startDate).toLocaleDateString();
    const checkOut = new Date(endDate).toLocaleDateString();
    const guests = target.guests.value;

    if (!checkIn || !checkOut.length || !guests) return;

    router.push(
      `/booking?room=${room.slug}&in=${checkIn}&out=${checkOut}&guests=${guests}`
    );
  };

  console.log(destinationName);

  return (
    <article className={container}>
      <h2 className={h2}>Request to book</h2>
      <form onSubmit={handlerSubmit} className={form}>
        <DatePicker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <label>
          Guests:
          <select name="guests" required>
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
