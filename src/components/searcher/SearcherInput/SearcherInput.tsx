"use client";

import styles from "./SearcherInput.module.css";
import { useRouter } from "next/navigation";
import useFilters from "<src>/hooks/useFilters";

interface Props {
  destinations: Destination[];
}

export default function SearcherInput({ destinations }: Props) {
  const { container, form, search } = styles;

  const { filters, setDestination, setGuests } = useFilters();

  const router = useRouter();

  const handlerSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target: any = e.target;

    const guests = target.guests.value;
    const destination = target.destination.value;

    if (!guests || !destination) return;

    router.push(`/searcher?destination=${destination}&guests=${guests}`);
  };

  return (
    <article className={container}>
      <form onSubmit={handlerSubmit} className={form}>
        <label>
          Going to
          <select
            onChange={(e) => {
              setDestination(e.target.value);
            }}
            value={filters.destination}
            name="destination"
          >
            {destinations.map((d) => {
              return (
                <option key={d.slug} value={d.name}>
                  {d.name}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          Guests
          <select
            onChange={(e) => {
              setGuests(e.target.value);
            }}
            value={filters.guests}
            name="guests"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </label>
        <button className={search}>Search</button>
      </form>
    </article>
  );
}
