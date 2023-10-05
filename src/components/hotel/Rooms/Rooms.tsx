"use client";

import styles from "./Rooms.module.css";
import RoomCard from "../RoomCard/RoomCard";
import useModal from "<src>/hooks/useModal";
import Modal from "<src>/components/common/Modal/Modal";
import ModalRoom from "../ModalRoom/ModalRoom";
import ModalReserve from "../ModalReseve/ModalReserve";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface Props {
  resorts: Hotel[];
  rooms: Room[];
}

export default function Rooms({ resorts, rooms }: Props) {
  const [roomForModal, setRoomForModal] = useState<Room>(rooms[0]);

  const [isOpen, openModal, closeModal] = useModal(false);
  const [isOpenReserve, openModalReserve, closeModalReserve] = useModal(false);

  const pathname = usePathname();
  const paths = pathname.split("/");
  const slugHotel = paths[paths.length - 1];
  const hotel = resorts.find((h) => h.slug === slugHotel);

  const destination: any = hotel?.destination;
  const destinationName = destination.fields.name;

  const roomsOfHotel = rooms.filter((r: any) => {
    const resortName = r.resort.fields.name;

    return resortName === hotel?.name;
  });

  if (!roomsOfHotel.length) return null;

  const { container, content, containerCards } = styles;

  return (
    <article className={container}>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <ModalRoom
          room={roomForModal}
          openModalReserve={openModalReserve}
          closeModal={closeModal}
        />
      </Modal>

      <Modal isOpen={isOpenReserve} closeModal={closeModalReserve}>
        <ModalReserve room={roomForModal} destinationName={destinationName} />
      </Modal>

      <div className={content}>
        <h2>Rooms Options</h2>
        <section className={containerCards}>
          {roomsOfHotel.map((room) => {
            return (
              <RoomCard
                key={room.name}
                images={room.images}
                name={room.name}
                text1={room.text1}
                text2={room.text2}
                text3={room.text3}
                price1={room.price1}
                price2={room.price2}
                room={room}
                openModal={openModal}
                setRoomForModal={setRoomForModal}
                openModalReserve={openModalReserve}
              />
            );
          })}
        </section>
      </div>
    </article>
  );
}
