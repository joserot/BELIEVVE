"use client";

import { createContext } from "react";
import { useState } from "react";

interface Props {
  children: JSX.Element;
}

interface Filters {
  destination: string;
  guests: string;
}

interface FiltersContextValue {
  filters: Filters;
  setDestination: (destination: string) => void;
  setGuests: (guests: string) => void;
}

const FiltersContext = createContext<FiltersContextValue>({
  filters: { destination: "", guests: "1" },
  setDestination: (destination: string) => {},
  setGuests: (guests: string) => {},
});

export function FiltersProvider({ children }: Props) {
  const [filters, setFilters] = useState<Filters>({
    destination: "",
    guests: "1",
  });

  const setDestination = (destination: string) => {
    setFilters({ ...filters, destination });
  };

  const setGuests = (guests: string) => {
    setFilters({ ...filters, guests });
  };

  const value = {
    filters,
    setDestination,
    setGuests,
  };

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
}

export default FiltersContext;
