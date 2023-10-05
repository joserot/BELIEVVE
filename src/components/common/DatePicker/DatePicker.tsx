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

function getMaxDate(startDate: string, dates: string[]): Date {
  // Ordenar las fechas y convertirlas a Date objects
  const sortedDates = dates
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
    .map((date) => new Date(date));

  // Encontrar la primera fecha no disponible después de startDate
  const unavailableDate = sortedDates.find((date, i, arr) => {
    // Asegurarse de que nextDate está definida
    const nextDate = arr[i + 1]
      ? arr[i + 1]
      : new Date(Number.MAX_SAFE_INTEGER);
    return (
      date.getTime() > new Date(startDate).getTime() &&
      nextDate.getTime() - date.getTime() > 86400000
    );
  });

  // Si encontramos una fecha no disponible, la fecha máxima será un día antes
  // De lo contrario, la fecha máxima será la última fecha disponible
  if (unavailableDate) {
    unavailableDate.setDate(unavailableDate.getDate());

    return unavailableDate;
  } else {
    return sortedDates[sortedDates.length - 1];
  }
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

  const maxDate = getMaxDate(startDate, dates);

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
          includeDates={datesFormat}
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
          minDate={startDate}
          maxDate={maxDate}
          includeDates={datesFormat}
        />
      </label>
    </div>
  );
}
