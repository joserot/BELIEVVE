import { useContext } from "react";
import filtersContext from "<src>/context/filtersContext";

export default function useFilters() {
  const { filters, setDestination, setGuests } = useContext(filtersContext);

  return { filters, setDestination, setGuests };
}
