interface Room {
  name: string;
  images: string[];
  text1: string;
  text2: string;
  text3: string;
  price1: string;
  price2: string;
  bedroom: string;
  foodAndDrink: string;
  entertainment: string;
  bathroom: string;
  resort: string;
}

interface Hotel {
  title: string;
  description: string;
  images: string[];
  slug: string;
  destination: string;
  text1: string;
  text2: string;
  things1: string;
  things2: string;
  additional: string;
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
