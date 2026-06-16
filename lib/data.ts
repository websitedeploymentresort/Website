export type Room = {
  id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  occupancy: string;
  image: string;
};

export const rooms: Room[] = [
  {
    id: "barbet-couple-suite",
    name: "Barbet Couple Suite",
    description:
      "Designed for couples seeking privacy and comfort, the Barbet Couple Suite features a private jacuzzi, scenic balcony, walk-in wardrobe, and thoughtfully curated interiors overlooking the serene landscapes of Chikmagalur.",
    price: 12999,
    size: "Premium Suite",
    occupancy: "2 Adults",
    image: "/room_pics/barbet-couple-suite/IMG_9172.PNG",
  },
  {
    id: "robin-estate-suite",
    name: "Robin Luxury Estate Suite",
    description:
      "An exclusive estate-view suite offering a private jacuzzi, open-style luxury bathroom, private backyard, and spacious walk-in wardrobe for an elevated retreat experience.",
    price: 14999,
    size: "Luxury Estate Suite",
    occupancy: "2 Adults",
    image: "/room_pics/robin-estate-suite/IMG_9178.PNG",
  },
  {
    id: "canary-couple-suite",
    name: "Canary Couple Suite",
    description:
      "A cozy and elegant suite crafted for couples, featuring a luxurious bathtub, private backyard, and intimate spaces designed for relaxation amidst nature.",
    price: 11999,
    size: "Couple Suite",
    occupancy: "2 Adults",
    image: "/room_pics/canary-couple-suite/IMG_9172.PNG",
  },
  {
    id: "hornbill-estate-view",
    name: "Hornbill Cottage",
    description:
      "A spacious family-oriented cottage with panoramic estate views and an exclusive private backyard, perfect for families seeking comfort and tranquility.",
    price: 16999,
    size: "Family Cottage",
    occupancy: "4 Adults",
    image: "/room_pics/hornbill-estate-view/IMG_9362.PNG",
  },
  {
    id: "silverbill-pool-view",
    name: "Silverbill Cottage",
    description:
      "Overlooking the resort pool, the Silverbill Cottage offers generous family accommodations, a private backyard, and easy access to all resort amenities.",
    price: 17999,
    size: "Family Cottage",
    occupancy: "4 Adults",
    image: "/room_pics/silverbill-pool-view/IMG_9362.PNG",
  },
];
export type Review = {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Eleanor Whitfield",
    location: "London, UK",
    rating: 5,
    text: "An extraordinary escape from start to finish. The staff anticipated our every need, and the villa itself felt like a private world of its own.",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: "r2",
    name: "James Carter",
    location: "New York, USA",
    rating: 5,
    text: "La Damai redefined what we thought a resort could be. Quiet luxury, impeccable service, and views that genuinely took our breath away.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: "r3",
    name: "Sofia Marchetti",
    location: "Milan, Italy",
    rating: 4,
    text: "Every detail felt considered — from the welcome ritual to the turndown service. We are already planning our return for next spring.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    id: "r4",
    name: "Daniel Osei",
    location: "Cape Town, South Africa",
    rating: 5,
    text: "The Rainforest Canopy Loft was unlike anything we've experienced — total serenity, paired with effortless five-star comfort.",
    avatar: "https://i.pravatar.cc/100?img=51",
  },
];

export const galleryImages: { src: string; alt: string }[] = [
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop", alt: "Resort pool at sunset" },
  { src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop", alt: "Overwater villas" },
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop", alt: "Luxury bedroom suite" },
  { src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop", alt: "Beachfront residence" },
  { src: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=1200&auto=format&fit=crop", alt: "Spa and wellness area" },
  { src: "https://images.unsplash.com/photo-1601565415267-69a8e02e9b32?q=80&w=1200&auto=format&fit=crop", alt: "Fine dining setup" },
  { src: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=1200&auto=format&fit=crop", alt: "Infinity pool view" },
  { src: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?q=80&w=1200&auto=format&fit=crop", alt: "Tropical garden path" },
  { src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200&auto=format&fit=crop", alt: "Aerial view of resort" },
];
