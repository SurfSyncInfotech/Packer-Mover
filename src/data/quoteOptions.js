export const moveTypes = [
  {
    id: "household",
    title: "Household",
    text: "A home, a family, and a new address.",
    service: "household-shifting",
  },
  {
    id: "office",
    title: "Office",
    text: "Workstations, files, and a quiet weekend window.",
    service: "office-relocation",
  },
  {
    id: "vehicle",
    title: "Vehicle",
    text: "A car, a bike, or both, between cities.",
    service: "vehicle-transport",
  },
  {
    id: "packing",
    title: "Packing",
    text: "Packing, labeling and unpacking for a home.",
    service: "packing-moving",
  },
  {
    id: "storage",
    title: "Storage",
    text: "A secure hold between two addresses.",
    service: "storage",
  },
  {
    id: "international",
    title: "International",
    text: "A shipment leaving India, carefully packed.",
    service: "international-relocation",
  },
];

export const propertyFields = {
  household: [
    {
      name: "homeType",
      label: "Home type",
      type: "select",
      options: ["1 BHK", "2 BHK", "3 BHK", "4 BHK or larger", "Independent house", "Villa"],
    },
    { name: "floor", label: "Floor", type: "text", placeholder: "For example, 7" },
    {
      name: "lift",
      label: "Service lift available?",
      type: "select",
      options: ["Yes", "No", "Not sure"],
    },
  ],
  office: [
    { name: "people", label: "People or workstations", type: "text", placeholder: "For example, 40" },
    { name: "area", label: "Approximate area", type: "text", placeholder: "For example, 6,000 sq ft" },
    {
      name: "window",
      label: "Preferred window",
      type: "select",
      options: ["Weekend", "After hours", "Weekday", "Not sure"],
    },
  ],
  vehicle: [
    {
      name: "vehicleType",
      label: "Vehicle",
      type: "select",
      options: ["Car", "Motorcycle or scooter", "Car and two-wheeler", "More than one car"],
    },
    { name: "count", label: "How many vehicles?", type: "text", placeholder: "For example, 1" },
    {
      name: "running",
      label: "Does it run and steer?",
      type: "select",
      options: ["Yes", "No", "Not sure"],
    },
  ],
  packing: [
    {
      name: "homeType",
      label: "Home type",
      type: "select",
      options: ["1 BHK", "2 BHK", "3 BHK", "4 BHK or larger", "Independent house"],
    },
    {
      name: "scope",
      label: "What do you need?",
      type: "select",
      options: ["Packing only", "Unpacking only", "Packing and unpacking"],
    },
    {
      name: "fragile",
      label: "Fragile décor or glass?",
      type: "select",
      options: ["A little", "Quite a lot", "Not sure"],
    },
  ],
  storage: [
    {
      name: "duration",
      label: "How long?",
      type: "select",
      options: ["Under a month", "1–3 months", "3–6 months", "Longer than 6 months"],
    },
    {
      name: "goods",
      label: "What will be stored?",
      type: "select",
      options: ["Mostly cartons", "Furniture and cartons", "Office furniture", "Not sure yet"],
    },
    { name: "city", label: "Storage city", type: "text", placeholder: "For example, Hyderabad" },
  ],
  international: [
    { name: "country", label: "Destination country", type: "text", placeholder: "For example, UAE" },
    {
      name: "volume",
      label: "Rough size of shipment",
      type: "select",
      options: ["A few rooms", "A full apartment", "A house", "Not sure"],
    },
    {
      name: "timing",
      label: "When are you hoping to ship?",
      type: "select",
      options: ["Within a month", "1–3 months", "Still deciding"],
    },
  ],
};

export const inventoryOptions = {
  household: [
    "Sofas and seating",
    "Beds and mattresses",
    "Dining set",
    "Wardrobes",
    "Television",
    "Refrigerator",
    "Washing machine",
    "Kitchenware",
    "Puja items",
    "Books and clothes",
    "Fragile décor",
    "Plants",
  ],
  office: [
    "Workstations",
    "Chairs",
    "Monitors and docks",
    "Filing",
    "Meeting room",
    "Pantry",
    "Printers",
    "Personal pedestals",
  ],
  vehicle: ["Car", "SUV", "Motorcycle", "Scooter", "Spare keys to hand over"],
  packing: [
    "Kitchen",
    "Wardrobes",
    "Books",
    "Glass and décor",
    "Electronics",
    "Linen",
    "Puja room",
    "Children’s room",
  ],
  storage: [
    "Cartons only",
    "Beds",
    "Sofas",
    "Appliances",
    "Office desks",
    "Files",
    "Seasonal items",
  ],
  international: [
    "Clothes and linen",
    "Kitchen",
    "Furniture",
    "Art or décor",
    "Books",
    "Electronics",
    "Children’s things",
  ],
};

export const quoteSteps = [
  { id: "type", label: "Moving type" },
  { id: "route", label: "From and to" },
  { id: "property", label: "Property details" },
  { id: "inventory", label: "Inventory" },
  { id: "contact", label: "Contact" },
  { id: "date", label: "Preferred date" },
];
