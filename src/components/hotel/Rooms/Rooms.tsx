"use client";

import styles from "./Rooms.module.css";
import RoomCard from "../RoomCard/RoomCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import useModal from "<src>/hooks/useModal";
import Modal from "<src>/components/common/Modal/Modal";
import ModalRoom from "../ModalRoom/ModalRoom";

const roomsList = [
  {
    id: 1,
    images: [
      "/img/rooms/1.png",
      "/img/rooms/2.png",
      "/img/rooms/3.jpeg",
      "/img/rooms/4.png",
    ],
    title: "H-Unit",
    text1: "30 sq m",
    text2: "Sleeps 2",
    text3: "1 King Bed",
    price1: "$42 per night",
    price2: "$168 total per 4 nights",
  },
  {
    id: 2,
    images: ["/img/rooms/5.png", "/img/rooms/6.png", "/img/rooms/7.png"],
    title: "1 bedroom",
    text1: "678 sq ft",
    text2: "Sleeps 6",
    text3: "1 King Bed and 1 Queen Sofa Bed",
    price1: "$52 per night",
    price2: "$260 total per 4 nights",
  },
  {
    id: 3,
    images: ["/img/rooms/8.png", "/img/rooms/9.jpeg", "/img/rooms/10.png"],
    title: "2 bedroom",
    text1: "1055 sq ft",
    text2: "Sleeps 8",
    text3: "1 King Bed, 1 Queen Sofa Bed and 1 Queen Bed",
    price1: "$75 per night",
    price2: "$375 total per 4 nights",
  },
];

export default function Rooms() {
  const [isOpen, openModal, closeModal] = useModal(false);

  if (!roomsList.length) return null;

  const { container, content, containerCards } = styles;

  return (
    <article className={container}>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <ModalRoom />
      </Modal>
      <div className={content}>
        <h2>Rooms Options</h2>
        <section className={containerCards}>
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              perMove: 1,
              autoplay: true,
              interval: 5000,
              pauseOnHover: true,
              pauseOnFocus: true,
              resetProgress: true,
              arrows: false,
              pagination: false,
              paginationKeyboard: true,
              width: "90%",
              lazyLoad: true,
              gap: "20px",
              breakpoints: {
                1024: {
                  perPage: 2,
                },
                700: {
                  perPage: 1,
                },
              },
            }}
            aria-label="Testimonials"
          >
            {roomsList.map((room) => {
              return (
                <SplideSlide key={room.id}>
                  <RoomCard
                    id={room.id}
                    images={room.images}
                    title={room.title}
                    text1={room.text1}
                    text2={room.text2}
                    text3={room.text3}
                    price1={room.price1}
                    price2={room.price2}
                    openModal={openModal}
                  />
                </SplideSlide>
              );
            })}
          </Splide>
        </section>
      </div>
    </article>
  );
}
