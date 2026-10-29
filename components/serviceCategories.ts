// Service categories transcribed from page 7 of BROUCHURE.pdf.
// Each category keeps one card image for the Products & Services filter.
const media = (name: string) => `/media/${name}.webp`;

const service = (title: string, imageNames: string[]) => {
  const images = imageNames.map(media);

  return {
    title,
    image: images[0],
    images,
  };
};

export const serviceCategories = [
  service("Pallet Racks", [
    "image-011",
  ]),
  service("Heavy Duty Racks", [
    "image-018",
  ]),
  service("Supermarket Shelving & Storage System", [
    "image-032",
  ]),
  service("Slotted Angle Shelves", [
    "image-033",
  ]),
  service("Mezzanine Flooring with Rack Support", [
    "image-066",
  ]),
  service("Aluminium Fabrication", [
    "image-041",
  ]),
  service("Structural Fabrication", [
    "image-010",
  ]),
  service("MS Stainless Steel Fabrication", [
    "image-049",
  ]),
  service("Car Parking Sheds", [
    "image-002",
  ]),
  service("Fence Cabana with Wooden Bench", [
    "image-005",
  ]),
  service("Retractable Shades", ["image-064"]),
  service("Interior Decor", [
    "image-007",
  ]),
  service("Shearing", ["service-shearing"]),
  service("Bending", ["service-bending"]),
  service("Lasering & Notching", ["service-lasering-notching"]),
] as const;
