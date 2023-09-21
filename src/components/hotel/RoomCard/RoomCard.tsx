import styles from "./RoomCard.module.css";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  images: string[];
  name: string;
  text1: string;
  text2: string;
  text3: string;
  price1: string;
  price2: string;
  room: Room;
  openModal: () => void;
  setRoomForModal: (room: Room) => void;
}

export default function RoomCard({
  images,
  name,
  text1,
  text2,
  text3,
  price1,
  price2,
  room,
  openModal,
  setRoomForModal,
}: Props) {
  const { card, imageEl, titleEl, text, btnCta, price, reserve } = styles;

  return (
    <article className={card}>
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          perMove: 1,
          autoplay: true,
          interval: 5000,
          pauseOnHover: false,
          pauseOnFocus: false,
          resetProgress: true,
          arrows: true,
          pagination: false,
          paginationKeyboard: true,
          width: "100%",
          lazyLoad: true,
        }}
        aria-label="Testimonials"
      >
        {images.map((image) => {
          return (
            <SplideSlide key={image}>
              <Image
                className={imageEl}
                src={image}
                width={300}
                height={300}
                alt={name}
              />
            </SplideSlide>
          );
        })}
      </Splide>
      <h3 className={titleEl}>{name}</h3>
      <p className={text}>{text1}</p>
      <p className={text}>{text2}</p>
      <p className={text}>{text3}</p>
      <button
        onClick={() => {
          setRoomForModal(room);
          openModal();
        }}
        className={btnCta}
      >
        More details <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <h4 className={price}>{price1}</h4>
      <h4 className={price}>{price2}</h4>
      <button className={reserve}>Reserve</button>
    </article>
  );
}
