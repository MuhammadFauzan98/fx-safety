import prodExtinguishers from "@/assets/prod-extinguishers.jpg";
import prodHose from "@/assets/prod-hose.jpg";
import prodAlarm from "@/assets/prod-alarm.jpg";
import prodSprinkler from "@/assets/prod-sprinkler.jpg";
import prodBlanket from "@/assets/prod-blanket.jpg";
import prodPpe from "@/assets/prod-ppe.jpg";

export const BUSINESS = {
  name: "FX Safety Solutions",
  tagline: "Protecting Lives. Securing Dreams.",
  slogan: "Complete Fire & Protection Safety Solutions",
  contactPerson: "Mohammad Zakir",
  phones: ["7458023037", "9381215876"],
  phonesDisplay: ["74580 23037", "93812 15876"],
  whatsapp: "917458023037",
  address:
    "6-97, Shutter No. 2, Opp. Indian Oil Pump, Basaragadi Village, Medchal Malkangiri District, Telangana 501401",
  gstin: "36BIHPJ5131K1Z7",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Safety Equipment", href: "#safety-equipment" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    icon: "extinguisher",
    title: "Fire Extinguishers",
    description:
      "Supply, installation and refilling of ABC powder, CO2, foam and water type extinguishers for every class of fire.",
  },
  {
    icon: "bell",
    title: "Fire Alarm Systems",
    description:
      "Conventional and addressable alarm panels, smoke and heat detectors, hooters and manual call points.",
  },
  {
    icon: "hydrant",
    title: "Fire Hydrant Systems",
    description:
      "Complete wet and dry riser hydrant systems with pumps, valves, hose reels and pipeline erection.",
  },
  {
    icon: "sprinkler",
    title: "Fire Sprinkler Systems",
    description:
      "Design and installation of sprinkler networks for warehouses, factories, offices and apartments.",
  },
  {
    icon: "exit",
    title: "Emergency Exit & Lights",
    description:
      "Illuminated exit signage and emergency lighting that keeps escape routes visible during a power failure.",
  },
  {
    icon: "clipboard",
    title: "Safety Audit & AMC",
    description:
      "Periodic inspection, testing, documentation and annual maintenance contracts for all fire systems.",
  },
  {
    icon: "shield",
    title: "Safety Signage & Accessories",
    description:
      "Statutory signage, fire blankets, sand buckets, call point covers and allied safety accessories.",
  },
];

export const PRODUCT_CATEGORIES = [
  "All",
  "Extinguishers",
  "Hydrant & Hose",
  "Alarm & Detection",
  "Sprinkler",
  "Accessories",
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export const PRODUCTS: {
  name: string;
  category: Exclude<ProductCategory, "All">;
  description: string;
  image: string;
}[] = [
  {
    name: "ABC Dry Powder Extinguisher",
    category: "Extinguishers",
    description: "1 kg to 10 kg ISI marked cylinders for Class A, B and C fires.",
    image: prodExtinguishers,
  },
  {
    name: "CO2 Extinguisher",
    category: "Extinguishers",
    description: "Residue-free protection for electrical panels and server rooms.",
    image: prodExtinguishers,
  },
  {
    name: "Foam & Water Extinguisher",
    category: "Extinguishers",
    description: "Mechanical foam and water type units for flammable liquids and solids.",
    image: prodExtinguishers,
  },
  {
    name: "Fire Hose Reel & Pipes",
    category: "Hydrant & Hose",
    description: "Swinging hose reel drums, RRL hoses, branch pipes and brass nozzles.",
    image: prodHose,
  },
  {
    name: "Fire Hydrant Valve",
    category: "Hydrant & Hose",
    description: "Single and double headed landing valves with instantaneous couplings.",
    image: prodSprinkler,
  },
  {
    name: "Fire Alarm Control Panel",
    category: "Alarm & Detection",
    description: "2 to 32 zone conventional and addressable panels with battery backup.",
    image: prodAlarm,
  },
  {
    name: "Smoke & Heat Detectors",
    category: "Alarm & Detection",
    description: "Photoelectric smoke, heat rise detectors and manual call points.",
    image: prodAlarm,
  },
  {
    name: "Sprinkler Heads",
    category: "Sprinkler",
    description: "Pendent, upright and sidewall quartz bulb sprinklers in 68 and 79 degree C.",
    image: prodSprinkler,
  },
  {
    name: "Fire Blanket",
    category: "Accessories",
    description: "Fibreglass blankets in quick-release pouches for kitchens and labs.",
    image: prodBlanket,
  },
  {
    name: "Emergency Exit Light",
    category: "Accessories",
    description: "LED exit signage and emergency lights with automatic changeover.",
    image: prodBlanket,
  },
];

export const SAFETY_EQUIPMENT = [
  {
    name: "Safety Helmet",
    description: "Ratchet-type industrial helmets with chin strap in multiple colours.",
  },
  {
    name: "Reflective Safety Jacket",
    description: "Hi-vis jackets with reflective tape for night and site visibility.",
  },
  {
    name: "Safety Shoes",
    description: "Steel toe, anti-skid leather shoes for construction and plant work.",
  },
  {
    name: "Safety Gloves",
    description: "Cut-resistant, heat-resistant and electrical insulating hand gloves.",
  },
  {
    name: "Safety Goggles",
    description: "Anti-fog polycarbonate goggles and face shields for eye protection.",
  },
];

export const WHY_US = [
  {
    icon: "badge",
    title: "Quality Products",
    description: "ISI marked cylinders and branded components sourced from trusted manufacturers.",
  },
  {
    icon: "helmet",
    title: "Expert Technicians",
    description: "Trained installation and refilling team with years of on-site experience.",
  },
  {
    icon: "wrench",
    title: "Reliable Service",
    description: "On-time delivery, prompt refills and responsive breakdown support.",
  },
  {
    icon: "shield",
    title: "Safety Compliance",
    description: "Installations and audits aligned with fire department norms and NBC guidelines.",
  },
];

export { prodPpe };
