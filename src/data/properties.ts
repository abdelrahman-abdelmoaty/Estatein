import Image1 from "@images/buildings/image1.png";
import Image2 from "@images/buildings/image2.png";
import Image3 from "@images/buildings/image3.png";

export type Property = {
  id: string;
  title: string;
  desc: string;
  img: string;
  features: string[];
  price: number;
  location: string;
  type: string;
  fullDescription?: string;
  amenities?: string[];
  specifications?: {
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    yearBuilt: number;
    parking: string;
  };
  virtualTour?: string;
  agent?: {
    name: string;
    phone: string;
    email: string;
  };
};

export const PROPERTIES: Property[] = [
  {
    id: "seaside-serenity-villa",
    title: "Seaside Serenity Villa",
    desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood with ocean views and private garden.",
    fullDescription: "Welcome to this breathtaking seaside villa that perfectly combines luxury with tranquility. Nestled in the prestigious Coastal Heights neighborhood, this magnificent property offers unparalleled ocean views and a serene lifestyle. The villa features an open-concept design with floor-to-ceiling windows that flood the space with natural light while showcasing the stunning coastal landscape. The gourmet kitchen boasts premium appliances and a large island perfect for entertaining. The master suite includes a private balcony overlooking the ocean and a spa-like ensuite bathroom. Outside, the private garden and patio area provide the perfect setting for relaxation and outdoor dining.",
    img: Image1.src,
    features: ["4-Bedroom", "3-Bathrooms", "Villa"],
    price: 550000,
    location: "Coastal Heights",
    type: "Villa",
    amenities: ["Ocean View", "Private Garden", "Gourmet Kitchen", "Master Balcony", "Spa Bathroom", "Open Concept", "Floor-to-Ceiling Windows", "Premium Appliances"],
    specifications: {
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      yearBuilt: 2019,
      parking: "2-Car Garage",
    },
    agent: {
      name: "Sarah Johnson",
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@estatein.com",
    },
  },
  {
    id: "metropolitan-penthouse",
    title: "Metropolitan Penthouse",
    desc: "A chic fully-furnished 2-bedroom apartment with panoramic city views and premium amenities.",
    fullDescription: "Experience urban luxury in this sophisticated penthouse located in the heart of Downtown District. This fully-furnished residence offers spectacular 360-degree city views from every room. The contemporary design features high-end finishes throughout, including hardwood floors, designer lighting, and custom millwork. The gourmet kitchen showcases top-of-the-line appliances and sleek countertops. Both bedrooms offer stunning city vistas, with the master suite featuring a walk-in closet and luxurious ensuite. The building amenities include a rooftop terrace, fitness center, and 24-hour concierge service.",
    img: Image2.src,
    features: ["2-Bedroom", "2-Bathrooms", "Penthouse"],
    price: 750000,
    location: "Downtown District",
    type: "Apartment",
    amenities: ["Panoramic City Views", "Fully Furnished", "High-End Finishes", "Hardwood Floors", "Designer Lighting", "Rooftop Terrace", "Fitness Center", "24-Hour Concierge"],
    specifications: {
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1800,
      yearBuilt: 2021,
      parking: "Assigned Parking",
    },
    agent: {
      name: "Michael Chen",
      phone: "+1 (555) 234-5678",
      email: "michael.chen@estatein.com",
    },
  },
  {
    id: "garden-grove-townhouse",
    title: "Garden Grove Townhouse",
    desc: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community with modern amenities.",
    fullDescription: "Discover comfortable family living in this beautifully designed townhouse located within the secure Garden Grove gated community. This three-level home features an intelligent layout that maximizes space and functionality. The main level offers an open-concept living and dining area that flows seamlessly into the modern kitchen with stainless steel appliances and granite countertops. Upstairs, you'll find three generously sized bedrooms, including a master suite with an ensuite bathroom and walk-in closet. The community amenities include a clubhouse, swimming pool, playground, and walking trails.",
    img: Image3.src,
    features: ["3-Bedroom", "2.5-Bathrooms", "Townhouse"],
    price: 420000,
    location: "Garden Grove",
    type: "Townhouse",
    amenities: ["Gated Community", "Open Concept", "Modern Kitchen", "Stainless Steel Appliances", "Granite Countertops", "Community Pool", "Clubhouse", "Walking Trails"],
    specifications: {
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 2200,
      yearBuilt: 2020,
      parking: "2-Car Attached Garage",
    },
    agent: {
      name: "Emily Rodriguez",
      phone: "+1 (555) 345-6789",
      email: "emily.rodriguez@estatein.com",
    },
  },
  {
    id: "luxury-lake-mansion",
    title: "Luxury Lake Mansion",
    desc: "A magnificent 5-bedroom, 4-bathroom mansion with lakefront access and private dock.",
    fullDescription: "Indulge in lakefront luxury with this spectacular mansion situated on the pristine shores of Lake District. This grand estate offers over 4,500 square feet of elegant living space with breathtaking lake views from nearly every room. The home features a grand foyer with sweeping staircase, formal dining room, and a great room with stone fireplace. The gourmet kitchen is a chef's dream with professional-grade appliances and expansive center island. The master wing includes a luxurious bedroom suite, spa-like bathroom, and private study. Outside amenities include a private dock, boat house, and beautifully landscaped grounds.",
    img: Image1.src,
    features: ["5-Bedroom", "4-Bathrooms", "Mansion"],
    price: 1200000,
    location: "Lake District",
    type: "Mansion",
    amenities: ["Lakefront Property", "Private Dock", "Boat House", "Stone Fireplace", "Gourmet Kitchen", "Professional Appliances", "Landscaped Grounds", "Grand Foyer"],
    specifications: {
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4500,
      yearBuilt: 2018,
      parking: "3-Car Garage + Boat Storage",
    },
    agent: {
      name: "David Wilson",
      phone: "+1 (555) 456-7890",
      email: "david.wilson@estatein.com",
    },
  },
  {
    id: "modern-city-loft",
    title: "Modern City Loft",
    desc: "A stylish 1-bedroom industrial loft with exposed brick and high ceilings in the heart of the city.",
    fullDescription: "Experience urban living at its finest in this stunning industrial loft located in the vibrant Arts Quarter. This unique space showcases the perfect blend of historic character and modern sophistication with exposed brick walls, soaring 14-foot ceilings, and oversized windows that flood the space with natural light. The open floor plan creates a seamless flow between living, dining, and kitchen areas. The modern kitchen features sleek cabinetry and stainless steel appliances. The bedroom area offers privacy while maintaining the loft's open feel, and the bathroom showcases contemporary fixtures and finishes.",
    img: Image2.src,
    features: ["1-Bedroom", "1-Bathroom", "Loft"],
    price: 385000,
    location: "Arts Quarter",
    type: "Loft",
    amenities: ["Exposed Brick", "High Ceilings", "Industrial Design", "Oversized Windows", "Open Floor Plan", "Modern Kitchen", "Historic Building", "Arts District Location"],
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      sqft: 1100,
      yearBuilt: 1925,
      parking: "Street Parking",
    },
    agent: {
      name: "Alexandra Park",
      phone: "+1 (555) 567-8901",
      email: "alexandra.park@estatein.com",
    },
  },
  {
    id: "suburban-family-home",
    title: "Suburban Family Home",
    desc: "A spacious 4-bedroom, 3-bathroom family home with large backyard and two-car garage.",
    fullDescription: "Perfect for growing families, this spacious home in the desirable Maple Heights neighborhood offers comfort, convenience, and community. The thoughtfully designed layout includes a welcoming foyer, formal living room, and open-concept family room that connects to the updated kitchen featuring modern appliances and breakfast bar. Four generous bedrooms provide ample space for family and guests, with the master suite offering an ensuite bathroom and walk-in closet. The large backyard is perfect for children to play and entertaining guests, while the two-car garage provides convenient parking and storage.",
    img: Image3.src,
    features: ["4-Bedroom", "3-Bathrooms", "House"],
    price: 485000,
    location: "Maple Heights",
    type: "House",
    amenities: ["Large Backyard", "Two-Car Garage", "Open Concept", "Updated Kitchen", "Master Ensuite", "Walk-in Closet", "Family Neighborhood", "Storage Space"],
    specifications: {
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2600,
      yearBuilt: 2017,
      parking: "2-Car Garage",
    },
    agent: {
      name: "Robert Thompson",
      phone: "+1 (555) 678-9012",
      email: "robert.thompson@estatein.com",
    },
  },
  {
    id: "beachfront-condo",
    title: "Beachfront Condo",
    desc: "A beautiful 2-bedroom oceanfront condominium with private balcony and beach access.",
    fullDescription: "Wake up to the sound of waves in this stunning beachfront condominium located in the exclusive Ocean View community. This beautifully appointed unit offers direct beach access and panoramic ocean views from the private balcony. The interior features an elegant open-concept design with coastal-inspired finishes throughout. The modern kitchen boasts quartz countertops and stainless steel appliances, while the living area opens directly to the oceanfront balcony. Both bedrooms offer tranquil views, with the master suite featuring an ensuite bathroom and direct balcony access. Building amenities include a beachfront pool, fitness center, and 24-hour security.",
    img: Image1.src,
    features: ["2-Bedroom", "2-Bathrooms", "Condo"],
    price: 685000,
    location: "Ocean View",
    type: "Condominium",
    amenities: ["Direct Beach Access", "Ocean Views", "Private Balcony", "Beachfront Pool", "Fitness Center", "24-Hour Security", "Quartz Countertops", "Coastal Design"],
    specifications: {
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1400,
      yearBuilt: 2020,
      parking: "Covered Parking",
    },
    agent: {
      name: "Maria Santos",
      phone: "+1 (555) 789-0123",
      email: "maria.santos@estatein.com",
    },
  },
  {
    id: "historic-brownstone",
    title: "Historic Brownstone",
    desc: "A charming 3-bedroom Victorian brownstone with original architectural details and modern updates.",
    fullDescription: "Step into history with this meticulously restored Victorian brownstone in the prestigious Heritage District. This architectural gem perfectly balances historic charm with modern conveniences. Original features include hardwood floors, decorative moldings, fireplaces, and stained glass windows. The updated kitchen seamlessly blends period appropriate design with contemporary functionality. Three floors of living space include formal living and dining rooms, a cozy family room, and three bedrooms including a master suite with period details. The private rear garden provides a peaceful urban oasis. This property represents a rare opportunity to own a piece of architectural history.",
    img: Image2.src,
    features: ["3-Bedroom", "2-Bathrooms", "Brownstone"],
    price: 890000,
    location: "Heritage District",
    type: "Brownstone",
    amenities: ["Historic Architecture", "Original Details", "Hardwood Floors", "Decorative Moldings", "Fireplaces", "Stained Glass", "Private Garden", "Updated Kitchen"],
    specifications: {
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2400,
      yearBuilt: 1895,
      parking: "Private Parking",
    },
    agent: {
      name: "James Mitchell",
      phone: "+1 (555) 890-1234",
      email: "james.mitchell@estatein.com",
    },
  },
  {
    id: "mountain-retreat",
    title: "Mountain Retreat",
    desc: "A cozy 2-bedroom cabin with stunning mountain views and stone fireplace, perfect for getaways.",
    fullDescription: "Escape to this charming mountain retreat nestled in the scenic Pine Ridge area. This cozy cabin offers the perfect blend of rustic charm and modern comfort, making it ideal for weekend getaways or full-time mountain living. The great room features a stunning stone fireplace and floor-to-ceiling windows that showcase breathtaking mountain vistas. The well-appointed kitchen includes rustic cabinetry and modern appliances. Two comfortable bedrooms provide peaceful rest, while the wraparound deck offers multiple outdoor living spaces to enjoy the fresh mountain air and spectacular views. The property includes hiking trails and is minutes from outdoor recreation opportunities.",
    img: Image3.src,
    features: ["2-Bedroom", "1-Bathroom", "Cabin"],
    price: 325000,
    location: "Pine Ridge",
    type: "Cabin",
    amenities: ["Mountain Views", "Stone Fireplace", "Wraparound Deck", "Hiking Trails", "Rustic Design", "Floor-to-Ceiling Windows", "Outdoor Recreation", "Peaceful Setting"],
    specifications: {
      bedrooms: 2,
      bathrooms: 1,
      sqft: 1200,
      yearBuilt: 2016,
      parking: "Covered Parking",
    },
    agent: {
      name: "Catherine Lee",
      phone: "+1 (555) 901-2345",
      email: "catherine.lee@estatein.com",
    },
  },
];

export const getPropertyById = (id: string): Property | undefined => {
  return PROPERTIES.find(property => property.id === id);
};

export const getRelatedProperties = (currentId: string, limit: number = 3): Property[] => {
  return PROPERTIES.filter(property => property.id !== currentId).slice(0, limit);
};