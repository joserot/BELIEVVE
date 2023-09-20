import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default function getRooms(rooms: any): Room[] {
  return rooms.items.map((r: any) => {
    const imagesArr = r.fields.images.map((image: any) => {
      return "https:" + image.fields.file.url;
    });

    return {
      name: r.fields.name,
      images: imagesArr,
      text1: documentToHtmlString(r.fields.text1),
      text2: documentToHtmlString(r.fields.text2),
      text3: documentToHtmlString(r.fields.text2),
      price1: documentToHtmlString(r.fields.price1),
      price2: documentToHtmlString(r.fields.price2),
      bedroom: documentToHtmlString(r.fields.bedroom),
      foodAndDrink: documentToHtmlString(r.fields.foodAndDrinks),
      entertainment: documentToHtmlString(r.fields.entertainment),
      bathroom: documentToHtmlString(r.fields.bathroom),
      resort: r.fields.resort,
    };
  });
}
