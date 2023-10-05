"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  value: string;
  setValue: (value: string) => void;
  label: string;
  checkIn: string;
  checkOut: string;
}

export default function DateTour({
  value,
  setValue,
  label,
  checkIn,
  checkOut,
}: Props) {
  return (
    <label>
      {label}
      <DatePicker
        wrapperClassName="datePicker"
        selected={value}
        onChange={(v: string) => setValue(v)}
        minDate={checkIn}
        maxDate={checkOut}
      />
    </label>
  );
}
