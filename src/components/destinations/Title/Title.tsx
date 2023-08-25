"use client";

import { usePathname } from "next/navigation";

interface Props {
	destinations: Destination[];
}

export default function Title({ destinations }: Props) {
	const pathname = usePathname();
	const idDestination = parseInt(pathname.split("/destinations/")[1]);
	const destination = destinations.find((d) => d.id === idDestination);

	if (!destination) return null;

	return <h1>{destination.name}</h1>;
}
