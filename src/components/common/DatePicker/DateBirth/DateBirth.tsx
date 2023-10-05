"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  value: string;
  setValue: (value: string) => void;
  label: string;
}

export default function DateBirth({ value, setValue, label }: Props) {
  const getMaxDate = () => {
    let date = new Date();

    date.setFullYear(date.getFullYear() - 18);

    return date.toISOString().substring(0, 10);
  };

  return (
    <label>
      {label}
      <DatePicker
        wrapperClassName="datePicker"
        selected={value}
        onChange={(v: string) => setValue(v)}
      />
    </label>
  );
}
