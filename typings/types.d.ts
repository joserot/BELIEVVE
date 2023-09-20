type type = "left" | "right";

interface Hotel {
  title: string;
  description: string;
  longDescription: string;
  images: string[] | [];
  slug: string;
}

interface Destination {
  name: string;
  description: string;
  imagePrimary: string;
  imageSecondary: string;
  imageTertiary: string;
  slug: string;
}

interface Testimonial {
  name: string;
  testimonial: string;
  profilePhoto: string;
}
