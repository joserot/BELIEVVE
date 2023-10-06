"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatesChecks.module.css";

interface Props {
  startDate: string;
  setStartDate: (date: string) => void;
  endDate: string;
  setEndDate: (date: string) => void;
}

export default function DatesChecks({
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
          selectsStart
          selected={startDate}
          onChange={(date: string) => {
            setStartDate(date);
            setEndDate("");
          }}
          startDate={startDate}
          minDate={new Date()}
          placeholderText="Choose Check in Date"
        />
      </label>
      <label>
        Check Out:
        <DatePicker
          wrapperClassName="datePicker"
          selectsEnd
          selected={endDate}
          onChange={(date: string) => setEndDate(date)}
          endDate={endDate}
          startDate={startDate}
          minDate={
            startDate &&
            new Date(startDate).setDate(new Date(startDate).getDate() + 2)
          }
          maxDate={
            startDate &&
            new Date(startDate).setDate(new Date(startDate).getDate() + 8)
          }
          placeholderText="Choose check out date"
        />
      </label>
    </div>
  );
}
