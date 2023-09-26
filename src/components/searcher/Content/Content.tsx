"use client";

import Card from "../Card/Card";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Modal from "<src>/components/common/Modal/Modal";
import ModalRoom from "<src>/components/hotel/ModalRoom/ModalRoom";
import useModal from "<src>/hooks/useModal";
import ModalReserve from "<src>/components/hotel/ModalReseve/ModalReserve";

interface Props {
  destinations: Destination[];
  resorts: Hotel[];
  rooms: Room[];
}

import styles from "./Content.module.css";

export default function Content({ destinations, resorts, rooms }: Props) {
  const { container, roomsEl, h2, withOutResults } = styles;

  const [roomFoModal, setRoomForModal] = useState<Room>(rooms[0]);

  const [isOpen, openModal, closeModal] = useModal(false);
  const [isOpenReserve, openModalReserve, closeModalReserve] = useModal(false);

  const searchParams = useSearchParams();

  const destinationSlug = searchParams.get("destination");
  const guestsSlug = searchParams.get("guests");

  if (!destinationSlug || !guestsSlug) return null;

  // encontrar hoteles en ese destino

  const resortsInThisDestination = resorts.filter((r: any) => {
    return r.destination.fields.name === destinationSlug;
  });

  // encontrar rooms en esos hoteles

  const roomsInThisResorts = rooms.filter((room: any) => {
    return resortsInThisDestination.some((resort) => {
      return room.resort.fields.name === resort.name;
    });
  });

  // filtrar por la cantidad de guests

  const filterRooms = roomsInThisResorts.filter((r: any) => {
    return parseInt(r.guests) >= parseInt(guestsSlug);
  });

  return (
    <article className={container}>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <ModalRoom
          room={roomFoModal}
          openModalReserve={openModalReserve}
          closeModal={closeModal}
        />
      </Modal>
      <Modal isOpen={isOpenReserve} closeModal={closeModalReserve}>
        <ModalReserve room={roomFoModal} />
      </Modal>
      {destinationSlug && <h1>{destinationSlug}</h1>}
      <div>
        {filterRooms && filterRooms.length ? (
          <div className={roomsEl}>
            <h2 className={h2}>Rooms Options</h2>
            {filterRooms.map((r) => {
              return (
                <Card
                  openModal={openModal}
                  setRoomForModal={setRoomForModal}
                  room={r}
                  destinationSlug={destinationSlug}
                  key={r.slug}
                />
              );
            })}
          </div>
        ) : (
          <p className={withOutResults}>without results</p>
        )}
      </div>
    </article>
  );
}
