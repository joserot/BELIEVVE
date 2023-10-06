"use client";

import styles from "./ModalReserve.module.css";
import { useRouter } from "next/navigation";
import DatesChecks from "<src>/components/common/DatePicker/DatesChecks/DatesChecks";
import { useState, useEffect } from "react";
import axios from "axios";

interface Props {
  room: Room;
  destinationName: string;
}

export default function ModalReserve({ room, destinationName }: Props) {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [dates, setDates] = useState([]);

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

    if (checkIn === "Invalid Date" || checkOut === "Invalid Date" || !guests)
      return;

    router.push(
      `/booking?room=${room.slug}&in=${checkIn}&out=${checkOut}&guests=${guests}`
    );
  };

  useEffect(() => {
    getDates();
  }, [room, destinationName]);

  const getDates = async () => {
    try {
      const res = await axios.get(
        `https://backend.vvo.vvoutlet.net/api/consultDataResortDisponibility?destination=${destinationName}&resort=${hotelName}&unit_type_sm=${room.name}`
      );

      if (res.status === 200) {
        setDates(res.data.date_list);

        return;
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <article className={container}>
      <h2 className={h2}>Request to book</h2>
      <form onSubmit={handlerSubmit} className={form}>
        <DatesChecks
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          dates={dates}
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
