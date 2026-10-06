/**
 * Demo company profile for the SafarSetu website.
 * Replace contact details, social links and office address before a public launch.
 *
 * trustMetrics are placeholder marketing figures. Swap them for verified
 * company numbers without changing the homepage components.
 */
export const metricsArePlaceholders = true;

export const company = {
  name: "SafarSetu",
  tagline: "Moving Lives. Connecting Destinations.",
  phone: "+91 80 4567 2100",
  phoneHref: "tel:+918045672100",
  email: "hello@safarsetu.com",
  emailHref: "mailto:hello@safarsetu.com",
  hours: "Monday to Saturday, 9:00–19:00 IST. Sunday by appointment.",
  address: {
    line1: "4th Floor, Setu House",
    line2: "18 Residency Road",
    city: "Bengaluru 560025",
    region: "Karnataka, India",
  },
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=77.593%2C12.961%2C77.614%2C12.974&layer=mapnik&marker=12.9675%2C77.6035",
  mapLink: "https://www.openstreetmap.org/?mlat=12.9675&mlon=77.6035#map=16/12.9675/77.6035",
  social: [
    { label: "Instagram", href: "https://www.instagram.com/safarsetu" },
    { label: "Facebook", href: "https://www.facebook.com/safarsetu" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/safarsetu" },
    { label: "YouTube", href: "https://www.youtube.com/@safarsetu" },
  ],
};

export const trustMetrics = [
  { id: "years", value: 15, suffix: "+", label: "Years of Experience" },
  { id: "moves", value: 50000, suffix: "+", label: "Successful Moves" },
  { id: "cities", value: 250, suffix: "+", label: "Cities Covered" },
  { id: "rating", value: 4.9, decimals: 1, suffix: "/5", label: "Customer Rating" },
];

export const processSteps = [
  {
    n: "01",
    title: "Tell Us About\nYour Move",
    text: "Share the home, office or vehicle, the cities, and the date you have in mind. A move captain listens before anyone talks about a truck.",
  },
  {
    n: "02",
    title: "Get Your\nPersonalized Quote",
    text: "You receive a clear quote based on volume, access, distance and the care your belongings actually need — not a one-size rate card.",
  },
  {
    n: "03",
    title: "Packing &\nHandling",
    text: "Trained teams pack room by room, protect furniture, and label every carton so the first evening in the new place is calm.",
  },
  {
    n: "04",
    title: "Transportation,\nCarefully Timed",
    text: "Loading, the road, and unloading are one plan. You know who is carrying the move and when it is due.",
  },
  {
    n: "05",
    title: "Settle Into Your\nNew Beginning",
    text: "Boxes land in the right rooms. We unpack what you want unpacked, and leave the keys to the day with you.",
  },
];

export const reasons = [
  {
    n: "01",
    title: "Careful Handling",
    text: "Furniture is blanketed, glass is crated, and nothing is stacked because it happens to fit.",
  },
  {
    n: "02",
    title: "Transparent Pricing",
    text: "The quote explains labour, materials, transport and access. Additions are discussed before they appear.",
  },
  {
    n: "03",
    title: "Trained Moving Teams",
    text: "Packing leads and loaders work from the same inventory, not from hurried instructions at the door.",
  },
  {
    n: "04",
    title: "Secure Packaging",
    text: "Double-wall cartons for books, individual wraps for brass and ceramic, and monsoon covers when the season asks for them.",
  },
  {
    n: "05",
    title: "Real-Time Coordination",
    text: "One move captain stays on the file — society slots, lift windows, and the call when the truck is an hour out.",
  },
  {
    n: "06",
    title: "Dedicated Support",
    text: "A desk that answers before moving day, on moving day, and on the day you open the last box.",
  },
];

export const journeySteps = [
  { title: "Planning", text: "A walkthrough of rooms, access and the date your society or office will allow." },
  { title: "Packing", text: "Materials chosen for what you own, not a standard kit dropped at the door." },
  { title: "Loading", text: "Heavy pieces first, a load plan, and an inventory you can follow." },
  { title: "Transportation", text: "A named crew and a route agreed before the shutter comes down." },
  { title: "Unloading", text: "Rooms received in the order you will actually live in them." },
  { title: "Unpacking", text: "Kitchen, beds and the puja shelf first, if that is how you want the evening to start." },
];

export const principles = [
  {
    title: "One captain",
    text: "A single person owns the file, so you are not retelling the story of your move to a new voice each day.",
  },
  {
    title: "Rooms, not cubic feet alone",
    text: "We plan from how a household or office actually lives — kitchens, wardrobes, server corners, the child’s room.",
  },
  {
    title: "Access is part of the move",
    text: "Floors without lifts, narrow stairwells, basement parking and society time slots are priced and planned, not discovered.",
  },
  {
    title: "The last box matters",
    text: "Delivery is not the end. Placement, unpacking and a walkthrough are part of the work when you want them.",
  },
];

export const people = [
  {
    role: "Move captains",
    text: "They hold the date, the inventory and the conversation with your building or office admin.",
  },
  {
    role: "Packing leads",
    text: "They decide what is wrapped, crated or carried by hand, and they stay until that standard is met.",
  },
  {
    role: "Road crews",
    text: "Drivers and handlers who treat the highway as part of the care, especially on intercity nights.",
  },
  {
    role: "Customer desk",
    text: "The number you already have, answered by someone who can see your file.",
  },
];

export const values = [
  {
    title: "Care",
    text: "Belongings are someone’s daily life. We handle them that way, from a child’s desk to a server rack.",
  },
  {
    title: "Clarity",
    text: "Dates, scope and price stay in plain language. You should never have to decode your own move.",
  },
  {
    title: "Continuity",
    text: "The person who planned the move is still reachable when the truck is on the road.",
  },
];

export const mission =
  "To make relocation across India feel considered and secure — for families changing cities and for businesses that cannot afford a lost week.";

export const vision =
  "A moving company people recommend to their parents. Quietly reliable, precise about details, and human at the door.";

export const mainNav = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
];

export const footerExplore = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/locations", label: "Locations" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function usesOverlayNav(pathname) {
  if (pathname === "/") return true;
  if (["/about", "/services", "/locations"].includes(pathname)) return true;
  if (pathname.startsWith("/services/")) return true;
  if (pathname.startsWith("/blog/") && pathname !== "/blog") return true;
  return false;
}
