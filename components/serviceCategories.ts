// Service categories transcribed from page 7 of BROUCHURE.pdf.
// Each category keeps one card image plus every related project image used by
// the Products & Services filter.
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
    "image-012",
    "image-034",
    "image-057",
    "image-083",
  ]),
  service("Heavy Duty Racks", [
    "image-018",
    "image-021",
    "image-022",
    "image-023",
    "image-036",
    "image-037",
    "image-038",
    "image-040",
    "image-046",
    "image-062",
    "image-079",
    "image-080",
    "image-081",
  ]),
  service("Supermarket Shelving & Storage System", [
    "image-032",
    "image-044",
    "image-053",
    "image-054",
    "image-055",
    "image-063",
    "image-065",
    "image-067",
    "image-068",
    "image-069",
    "image-074",
    "image-075",
    "image-078",
  ]),
  service("Slotted Angle Shelves", [
    "image-033",
    "image-035",
    "image-042",
    "image-045",
  ]),
  service("Mezzanine Flooring with Rack Support", [
    "image-066",
    "image-070",
  ]),
  service("Aluminium Fabrication", [
    "image-041",
    "image-043",
  ]),
  service("Structural Fabrication", [
    "image-010",
    "image-039",
  ]),
  service("MS Stainless Steel Fabrication", [
    "image-049",
    "image-051",
    "image-058",
    "image-071",
    "image-072",
  ]),
  service("Car Parking Sheds", [
    "image-002",
    "image-016",
    "image-017",
    "image-027",
    "image-028",
    "image-060",
  ]),
  service("Fence Cabana with Wooden Bench", [
    "image-005",
    "image-013",
    "image-014",
    "image-059",
    "image-061",
    "image-086",
  ]),
  service("Retractable Shades", ["image-064"]),
  service("Interior Decor", [
    "image-007",
    "image-047",
    "image-048",
    "image-050",
    "image-052",
    "image-076",
    "image-077",
    "image-084",
  ]),
  service("Shearing", ["service-shearing"]),
  service("Bending", ["service-bending"]),
  service("Lasering & Notching", ["service-lasering-notching"]),
] as const;
