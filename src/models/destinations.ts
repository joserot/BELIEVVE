export default function getDestinations(destination: any): Destination[] {
  return destination.items.map((d: any) => {
    return {
      name: d.fields.name,
      slug: d.fields.slug,
      description: d.fields.description,
      imagePrimary: "https:" + d.fields.image1.fields.file.url,
      imageSecondary: "https:" + d.fields.image2.fields.file.url,
      imageTertiary: "https:" + d.fields.image3.fields.file.url,
    };
  });
}
