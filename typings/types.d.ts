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
  longDescription?: string;
  imagePrimary: string;
  imageSecondary: string;
  imageTertiary: string;
  hotels: Hotel[] | [];
  slug: string;
  type?: type;
}
