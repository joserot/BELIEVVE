import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default function getRooms(rooms: any): Room[] {
  return rooms.items.map((r: any) => {
    const imagesArr = r.fields.images.map((image: any) => {
      return "https:" + image.fields.file.url;
    });

    return {
      name: r.fields.name,
      images: imagesArr,
      text1: r.fields.text1,
      text2: r.fields.text2,
      text3: r.fields.text3,
      price1: r.fields.price1,
      price2: r.fields.price2,
      bedroom: documentToHtmlString(r.fields.bedroom),
      foodAndDrink: documentToHtmlString(r.fields.foodAndDrink),
      entertainment: documentToHtmlString(r.fields.entertainment),
      bathroom: documentToHtmlString(r.fields.bathroom),
      more: documentToHtmlString(r.fields.more),
      resort: r.fields.resort,
      slug: r.fields.slug,
      guests: r.fields.guests,
    };
  });
}
