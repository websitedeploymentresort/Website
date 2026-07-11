type RoomFeature = {
  icon: string;
  text: string;
};

export type Room = {
  id: string;
  name: string;
  description: string;
  price: number;
  area: string;        // e.g. "650 sq. ft."
  size: string;
  occupancy: string;
  image: string;
  mealPlan: string;
  highlights: RoomFeature[];
  amenities: RoomFeature[];
};

export const rooms: Room[] = [
  {
    id: "barbet-couple-suite",
    name: "Barbet Couple Suite",
    description:
      "For couples seeking privacy and comfort, featuring a private jacuzzi, scenic balcony, walk-in wardrobe, and thoughtfully curated interiors overlooking serene landscapes.",
    price: 12999,
    area: "650 sq.ft (60 sq.mt)",
    size: "Premium Suite",
    occupancy: "2 Adults",
    image: "/room_pics/barbet-couple-suite/forCard/IMG_9172-cropped.PNG",

    mealPlan: "Complimentary Breakfast",

    highlights: [
  { icon: "bath", text: "Private Jacuzzi" },
  { icon: "mountain", text: "Scenic Balcony" },
  { icon: "shirt", text: "Walk-in Wardrobe" },
  { icon: "sparkles", text: "Premium Couple Layout" },
],

amenities: [
  { icon: "bed", text: "King Size Bed" },
  { icon: "droplets", text: "24×7 Hot Water" },
  { icon: "snowflake", text: "Air Conditioning" },
  { icon: "wifi", text: "Complimentary Wi-Fi" },
  { icon: "coffee", text: "Tea / Coffee Maker" },
  { icon: "badge", text: "Luxury Toiletries" },
  { icon: "bath", text: "Bath Robe" },
  { icon: "waves", text: "Swimming Pool Access" },
  { icon: "gamepad", text: "Indoor Games" },
  { icon: "bird", text: "Bird Watching Experience" },
],},

  {
    id: "robin-estate-suite",
    name: "Robin Luxury Estate Suite",
    description:
      "An exclusive estate-view suite offering a private jacuzzi, open-style luxury bathroom, private backyard, and spacious walk-in wardrobe for an elevated retreat experience.",
    price: 14999,
    size: "Luxury Estate Suite",
    occupancy: "2 Adults",
    area: "525 sq.ft (49 sq.mt)",
    image: "/room_pics/robin-estate-suite/forCard/IMG_9178-cropped.PNG",

    mealPlan: "Complimentary Breakfast",
highlights: [
  { icon: "bath", text: "Private Jacuzzi" },
  { icon: "shower", text: "Open Style Luxury Bathroom" },
  { icon: "trees", text: "Private Backyard" },
  { icon: "shirt", text: "Walk-in Wardrobe" },
],

    amenities: [
  { icon: "bed", text: "King Size Bed" },
  { icon: "droplets", text: "24×7 Hot Water" },
  { icon: "snowflake", text: "Air Conditioning" },
  { icon: "wifi", text: "Complimentary Wi-Fi" },
  { icon: "coffee", text: "Tea / Coffee Maker" },
  { icon: "badge", text: "Luxury Toiletries" },
  { icon: "bath", text: "Bath Robe" },
  { icon: "waves", text: "Swimming Pool Access" },
  { icon: "gamepad", text: "Indoor Games" },
  { icon: "bird", text: "Bird Watching Experience" },
],
  },

  {
    id: "canary-couple-suite",
    name: "Canary Couple Suite",
    description:
      "A cozy and elegant suite crafted for couples, featuring a luxurious bathtub, private backyard, and intimate spaces designed for relaxation amidst nature.",
    price: 11999,
    area: "550 sq.ft (51 sq.mt)",
    size: "Couple Suite",
    occupancy: "2 Adults",
    image: "/room_pics/canary-couple-suite/IMG_9174.PNG",

    mealPlan: "Complimentary Breakfast",

    highlights: [
  { icon: "bath", text: "Luxury Bathtub" },
  { icon: "trees", text: "Private Backyard" },
  { icon: "sparkles", text: "Premium Couple Layout" },
],

    amenities: [
  { icon: "bed", text: "King Size Bed" },
  { icon: "droplets", text: "24×7 Hot Water" },
  { icon: "snowflake", text: "Air Conditioning" },
  { icon: "wifi", text: "Complimentary Wi-Fi" },
  { icon: "coffee", text: "Tea / Coffee Maker" },
  { icon: "badge", text: "Luxury Toiletries" },
  { icon: "waves", text: "Swimming Pool Access" },
  { icon: "gamepad", text: "Indoor Games" },
  { icon: "bird", text: "Bird Watching Experience" },
],
  },

  {
    id: "hornbill-estate-view",
    name: "Hornbill Cottage",
    description:
      "A spacious family-oriented cottage with panoramic estate views and an exclusive private backyard, perfect for families seeking comfort and tranquility.",
    price: 16999,
    area: "475 sq.ft (44 sq.mt)",
    size: "Family Cottage",
    occupancy: "4 Adults",
    image: "/room_pics/hornbill-estate-view/IMG_9362.PNG",

    mealPlan: "Complimentary Breakfast",

    highlights: [
  { icon: "mountain", text: "Estate View" },
  { icon: "trees", text: "Private Backyard" },
  { icon: "home", text: "Spacious Family cottage with 2 King size beds" },
  { icon: "mountain", text: "Panoramic Mountain View" }
],

    amenities: [
  { icon: "bed", text: "King Size Bed" },
  { icon: "droplets", text: "24×7 Hot Water" },
  { icon: "snowflake", text: "Air Conditioning" },
  { icon: "wifi", text: "Complimentary Wi-Fi" },
  { icon: "coffee", text: "Tea / Coffee Maker" },
  { icon: "badge", text: "Luxury Toiletries" },
  { icon: "bath", text: "Bath Robe" },
  { icon: "waves", text: "Swimming Pool Access" },
  { icon: "gamepad", text: "Indoor Games" },
  { icon: "bird", text: "Bird Watching Experience" },
],
  },

  {
    id: "silverbill-pool-view",
    name: "Silverbill Cottage",
    description:
      "Overlooking the resort pool, the Silverbill Cottage offers generous family accommodations, a private backyard, and easy access to all resort amenities.",
    price: 17999,
    area: "475 sq.ft (44 sq.mt)",
    size: "Family Cottage",
    occupancy: "4 Adults",
    image: "/room_pics/silverbill-pool-view/IMG_9362.PNG",

    mealPlan: "Complimentary Breakfast",

    highlights: [
  { icon: "mountain", text: "Estate View" },
  { icon: "trees", text: "Private Backyard" },
  { icon: "home", text: "Spacious Family cottage with 2 King size beds" },
  { icon: "mountain", text: "Panoramic Mountain View" }
],

    amenities: [
  { icon: "bed", text: "King Size Bed" },
  { icon: "droplets", text: "24×7 Hot Water" },
  { icon: "snowflake", text: "Air Conditioning" },
  { icon: "wifi", text: "Complimentary Wi-Fi" },
  { icon: "coffee", text: "Tea / Coffee Maker" },
  { icon: "badge", text: "Luxury Toiletries" },
  { icon: "waves", text: "Swimming Pool Access" },
  { icon: "gamepad", text: "Indoor Games" },
  { icon: "bird", text: "Bird Watching Experience" },
],
  },
];
export type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
  source: "google" | "instagram";
};

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Rahul Pandey",
    rating: 5,
    source: "instagram",
    text: `A true Trouvaille.

           In my professional world, Trouvaille is a travel program we run for our business partners. In French, it means "a lucky find."
             
           Over the years, I've associated it with destinations and experiences. But on an impromptu family trip, I truly understood its meaning.
             
           We discovered La Damai in Chikmagalur — nestled amidst nature, filled with birdsong, fresh air, and the kind of warmth that comes from people who genuinely care. The way the team looked after my parents made it even more special.
             
           Each of us in the family found our own way to unwind, connect, and create memories....
             
           Some places are planned. Some are discovered.
             
           This one was a true Trouvaille... a lucky find that we will cherish for a long time. ❤️
             
           #trouvaille`,  },
  {
    id: "r2",
    name: "Ruchi Gahlot",
    rating: 5,
    source: "google",
    text: "The stay is beautiful, good escape to the city life. Definitely would like to come back again and enjoy the peace and serene surrounding."  },
  {
    id: "r3",
    name: "Anshika Garg",
    rating: 5,
    source: "google",
    text: "11/10 stay at La Damai! A serene and beautiful experience with amazing food and peaceful vibes. The place feels calm and chaotic in its own unique way! A special mention to the owner Madan, whose warmth and hospitality made the stay even more memorable. All and all the stay was worth!"
  },
  {
    id: "r4",
    name: "Vrunda Kalyankar",
    rating: 5,
    source: "google",
    text: "Excellent experience. The rooms are wonderfully done with exceptional taste. Each rooms offers a different experience and the food is delicious. It’s away from city so you’ll be getting the perfect serene experience. Place is a must visit will be sure to come back again :)"
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
