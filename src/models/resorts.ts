import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default function getResorts(resorts: any): Hotel[] {
  return resorts.items.map((r: any) => {
    const imagesArr = r.fields.images.map((image: any) => {
      return "https:" + image.fields.file.url;
    });

    return {
      name: r.fields.name,
      description: r.fields.description,
      slug: r.fields.slug,
      destination: r.fields.destination,
      images: imagesArr,
      text1: documentToHtmlString(r.fields.text1),
      text2: documentToHtmlString(r.fields.text2),
      things1: documentToHtmlString(r.fields.things1),
      things2: documentToHtmlString(r.fields.things2),
      additional: documentToHtmlString(r.fields.additional),
    };
  });
}
