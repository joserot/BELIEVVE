"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.css";

interface Props {
  startDate: string;
  setStartDate: (date: string) => void;
  endDate: string;
  setEndDate: (date: string) => void;
}

export default function InputDate({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: Props) {
  const { container } = styles;

  return (
    <div className={container}>
      <label>
        Check In:
        <DatePicker
          wrapperClassName="datePicker"
          placeholder="Choose a date"
          selectsStart
          selected={startDate}
          onChange={(date: string) => setStartDate(date)}
          startDate={startDate}
          minDate={new Date()}
        />
      </label>
      <label>
        Check Out:
        <DatePicker
          wrapperClassName="datePicker"
          placeholder="Choose a date"
          selectsEnd
          selected={endDate}
          onChange={(date: string) => setEndDate(date)}
          endDate={endDate}
          startDate={startDate}
          minDate={startDate}
        />
      </label>
    </div>
  );
}
