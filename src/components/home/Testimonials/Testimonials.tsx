"use client";

import styles from "./Testimonials.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Image from "next/image";

type testimonial = {
	name: string;
	description: string;
	image: string;
};

interface Props {
	testimonials: testimonial[];
}

export default function Testimonials({ testimonials }: Props) {
	return (
		<article className={styles.testimonials}>
			<Splide aria-label="My Favorite Images">
				{testimonials.map((testimonial) => {
					return (
						<SplideSlide key={testimonial.name}>
							<section className={styles.testimonial}>
								<div className={styles.col1}>
									<Image
										className={styles.image}
										src={testimonial.image}
										alt={testimonial.name}
										width={100}
										height={100}
									/>
								</div>
								<div className={styles.col2}>
									<p className={styles.description}>
										{testimonial.description}
									</p>
									<h3 className={styles.name}>{testimonial.name}</h3>
								</div>
							</section>
						</SplideSlide>
					);
				})}
			</Splide>
		</article>
	);
}
