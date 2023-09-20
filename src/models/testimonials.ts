export default function getTestimonials(testimonials: any): Testimonial[] {
  return testimonials.items.map((t: any) => {
    return {
      name: t.fields.name,
      testimonial: t.fields.testimonial,
      profilePhoto: "https:" + t.fields.profilePhoto.fields.file.url,
    };
  });
}
