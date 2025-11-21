import { ContactInfo, NavItem } from './types';

export const APP_NAME = "PMG CAR";
export const SLOGAN = "Votre expert carrossier";

export const CONTACT_INFO: ContactInfo = {
  address: "Abidjan, Port-Bouët, route d’Anani",
  phones: ["0758132224", "2721369241", "0143072015"],
  email: "commercial@pmgcar-ci.com"
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Galerie", path: "/gallery" },
  { label: "Rendez-vous", path: "/rendezvous" },
  { label: "Contact", path: "/contact" },
];

// Mapping requested filenames to placeholders for the demo
export const IMAGES = {
  hero: {
    name: "hero-garage.jpg",
    url: "https://picsum.photos/1920/1080?grayscale&blur=2" 
  },
  services: {
    carrosserie: { name: "atelier-carrosserie.jpg", url: "https://picsum.photos/800/600?random=1" },
    peinture: { name: "service-peinture.jpg", url: "https://picsum.photos/800/600?random=2" },
    vitrage: { name: "service-vitrage.jpg", url: "https://picsum.photos/800/600?random=3" },
    pieces: { name: "vente-pieces.jpg", url: "https://picsum.photos/800/600?random=4" },
  }
};