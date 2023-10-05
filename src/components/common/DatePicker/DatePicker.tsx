"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.css";

interface Props {
  startDate: string;
  setStartDate: (date: string) => void;
  endDate: string;
  setEndDate: (date: string) => void;
  dates: string[];
}

export default function InputDate({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  dates,
}: Props) {
  const { container } = styles;

  const datesFormat = dates.map((d) => {
    return new Date(d);
  });

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
          includeDates={datesFormat}
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
          includeDates={datesFormat}
        />
      </label>
    </div>
  );
}
