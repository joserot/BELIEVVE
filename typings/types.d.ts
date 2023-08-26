type type = "left" | "right";

interface Hotel {
	title: string;
	description: string;
	longDescription: string;
	parking: boolean;
	images: string[] | [];
}

interface Destination {
	name: string;
	description: string;
	longDescription?: string;
	imagePrimary: string;
	imageSecondary: string;
	imageTertiary: string;
	hotels: Hotel[] | [];
	id: number;

	type?: type;
}
