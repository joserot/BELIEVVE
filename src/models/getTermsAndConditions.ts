import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default function getTermsAndConditions(terms: any): string {
  return documentToHtmlString(terms.items[0].fields.text);
}
