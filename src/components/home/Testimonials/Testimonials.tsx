"use client";

import styles from "./Testimonials.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Image from "next/image";

type image = {
	fields: {
		file: {
			url: string;
		};
	};
};

type fields = {
	name: string;
	testimonial: string;
	profilePhoto: image;
};

type testimonial = {
	fields: fields;
};

interface Props {
	testimonials: testimonial[];
}

export default function Testimonials({ testimonials }: Props) {
	if (!testimonials) return null;

	return (
		<article className={styles.testimonials}>
			<Splide
				options={{
					type: "loop",
					perPage: 1,
					autoplay: true,
					interval: 5000,
					pauseOnHover: false,
					pauseOnFocus: false,
					resetProgress: true,
					arrows: false,
					paginationKeyboard: true,
					width: "100%",
					lazyLoad: true,
				}}
				aria-label="Testimonials"
			>
				{testimonials.map((testimonial) => {
					return (
						<SplideSlide key={testimonial.fields.name}>
							<section className={styles.testimonial}>
								<div className={styles.col1}>
									<Image
										className={styles.image}
										src={`https:${testimonial.fields.profilePhoto.fields.file.url}`}
										alt={testimonial.fields.name}
										width={100}
										height={100}
									/>
								</div>
								<div className={styles.col2}>
									<div className={styles.testimonialText}>
										<p className={styles.description}>
											{testimonial.fields.testimonial}
										</p>
										<Image
											className={styles.quote1}
											src={"/img/quotes/quote1.png"}
											height={50}
											width={50}
											alt="quote"
										/>
										<Image
											className={styles.quote2}
											src={"/img/quotes/quote2.png"}
											height={50}
											width={50}
											alt="quote"
										/>
									</div>
									<h3 className={styles.name}>{testimonial.fields.name}</h3>
								</div>
							</section>
						</SplideSlide>
					);
				})}
			</Splide>
		</article>
	);
}
