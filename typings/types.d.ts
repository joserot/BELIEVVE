type type = "left" | "right";

interface Destination {
	name: string;
	description: string;
	imagePrimary: string;
	imageSecondary: string;
	imageTertiary: string;
	id: number;
	type?: type;
}
