import { images } from "./images.js";

export const services = [
  {
    slug: "household-shifting",
    title: "Household Relocation",
    short: "Household Shifting",
    icon: "Home",
    image: images.serviceHousehold,
    footer: true,
    summary:
      "Room-by-room packing for apartments, independent houses and family homes — from the puja shelf to the refrigerator.",
    description:
      "A household move in India is rarely just furniture. It is a kitchen that has to cook again quickly, school bags, a parents’ bedroom, and a society that allows the lift for ninety minutes. SafarSetu plans the home as it is lived in, then carries it with a crew that has already walked the rooms.",
    story: [
      "A household move in an Indian city is a building problem as much as a furniture problem. The lift window may be ninety minutes, the parking bay is shared, and the kitchen has to cook again before anyone is hungry. We survey the rooms with that day in mind, not with a cubic-foot guess taken over the phone.",
      "Packing follows the way the home is actually lived in. The masala drawer, the school bags, a parent’s medicines and the puja shelf are not tipped into a carton marked miscellaneous. Glass is crated, teak is blanketed, and a wardrobe is emptied before it is lifted. We reassemble only the pieces you want standing that evening.",
      "One move captain holds the file from the first walkthrough to the last box. You are not retelling the stairwell, the fragile brass, or the society rules to a new voice at the truck. The price you accepted is the price we work to, and anything extra is discussed before it appears on the day.",
    ],
    included: [
      {
        title: "A survey of the real home",
        text: "Rooms, floors, the lift, the stairwell and the items that must travel with you in the car are noted before a truck is discussed.",
      },
      {
        title: "Packing that follows the rooms",
        text: "Kitchen, bedrooms, living room and puja are packed and labeled as separate parts of the house, so the first night has a logic.",
      },
      {
        title: "Furniture, taken apart only when needed",
        text: "Beds, wardrobes and glass tops are dismantled where the doorway demands it, then put back if you want them standing.",
      },
      {
        title: "The building, booked in advance",
        text: "Society slots, service lifts and basement parking are part of the plan. The crew is sized to finish inside the window you were given.",
      },
    ],
    benefits: [
      "Room-by-room packing and labeling",
      "Furniture dismantling and reassembly",
      "Fragile and puja-item protection",
      "Society slot and lift coordination",
      "Placement so the first night is usable",
    ],
    process: [
      { title: "Home survey", text: "We note rooms, floors, lifts and what must travel with you in the car." },
      { title: "Packing day", text: "Cartons are filled by room, with a list you can check before the shutter closes." },
      { title: "Load & transit", text: "Heavy pieces are positioned for the journey, not simply for the doorway." },
      { title: "Receive the home", text: "Unloading follows your room plan. Unpacking starts where you need it." },
    ],
    ideal: "Families and individuals moving within a city or between Indian cities, including joint households.",
    layout: "household",
    rooms: [
      { name: "Living & dining", text: "Sofas, televisions and glass tops are wrapped before they are lifted." },
      { name: "Bedrooms", text: "Mattresses are bagged, wardrobes emptied, and reassembly happens only if you want it." },
      { name: "Kitchen", text: "Utensils, appliances and the masala drawer are packed so the first meal is possible." },
      { name: "Puja & décor", text: "Idols, frames and brass are wrapped individually and marked as the first box to open." },
    ],
    chapters: [
      {
        title: "Furniture, handled as furniture",
        text: "Teak, engineered wood and glass do not travel the same way. We blanket, strap and, where needed, dismantle — then put back only the pieces you want standing that evening.",
      },
      {
        title: "The building is part of the plan",
        text: "Service lifts, basement parking and the neighbour’s noon nap all shape the day. We book the slot with you and staff the crew to finish inside it.",
      },
    ],
  },
  {
    slug: "office-relocation",
    title: "Office Relocation",
    short: "Office Relocation",
    icon: "Building2",
    image: images.serviceOffice,
    footer: true,
    summary:
      "Workstation, IT and file moves planned around the working week, including after-hours and weekend handovers.",
    description:
      "An office cannot pause for a vague moving day. SafarSetu sequences workstations, IT, files and shared rooms so people sit down in the new space and start work — often on a Monday that still feels like a Monday.",
    story: [
      "An office move fails when it is treated like a household with more chairs. Desks have owners, files have a sequence, and a server corner cannot be decided at the loading bay. We start from the floor plan: who sits where, what is shared, and what IT will not allow onto a truck.",
      "The move is planned around the working week. Personal drawers and peripherals are packed once the floor is quiet, usually Friday evening or a declared holiday. Monitors, docks and files are labeled to a desk number, not to a random carton that will be opened by whoever is nearest.",
      "Monday is part of the service. Desks are placed to the plan, obvious gaps are noted while the crew is still there, and the move captain is still answering. People should sit down and work, not spend the morning hunting for a charger that left in someone else’s box.",
    ],
    included: [
      {
        title: "A floor plan, not a headcount",
        text: "We map workstations, shared rooms, the pantry and the equipment that stays with your IT team before a single drawer is taped.",
      },
      {
        title: "Labels that name a person",
        text: "Screens, docks and files travel against a desk number. The person who uses them should find them without opening ten cartons.",
      },
      {
        title: "A window the office can survive",
        text: "After-hours and weekend crews are sized to the hours the building will actually give you, including the loading bay and the goods lift.",
      },
      {
        title: "A Monday walkthrough",
        text: "Placement is checked against the plan while everyone is still on site, so a missing cable is a five-minute fix and not a lost morning.",
      },
    ],
    benefits: [
      "Workstation and IT handling",
      "File and document control",
      "Employee-level labeling",
      "After-hours and weekend moves",
      "Floor-plan placement",
    ],
    process: [
      { title: "Floor plan", text: "We map who sits where, what is shared, and what cannot leave the building." },
      { title: "Tag & pack", text: "Monitors, docks and files are labeled to a desk, not to a random carton." },
      { title: "Move window", text: "Friday night or a declared holiday, with a crew sized to the window." },
      { title: "Monday walkthrough", text: "Desks placed, obvious gaps noted, and a person still on the phone." },
    ],
    ideal: "Studios, branch offices and headquarters shifting within a city or to another Indian city.",
    layout: "office",
    sequence: [
      { when: "The week before", text: "Access cards, loading bays and a list of equipment that stays with IT." },
      { when: "Friday evening", text: "Personal drawers, files and peripherals packed once the floor is quiet." },
      { when: "Overnight", text: "Loading, transit and placement by desk number at the new address." },
      { when: "Monday morning", text: "A short walkthrough so teams can work without hunting for cables." },
    ],
    chapters: [
      {
        title: "IT is not cargo",
        text: "Screens, docks and small servers are packed upright, labeled, and reunited with the person who uses them. We do not decide your network — we protect it while it moves.",
      },
      {
        title: "People hear the plan",
        text: "Employees get a simple note: what to take home, what we pack, and when their desk will be ready. Less rumour, fewer missing chargers.",
      },
    ],
  },
  {
    slug: "vehicle-transport",
    title: "Vehicle Transportation",
    short: "Vehicle Transport",
    icon: "Car",
    image: images.serviceVehicle,
    footer: true,
    summary:
      "Cars and two-wheelers carried on secured carriers, with a condition note at pickup and a handover you can plan around.",
    description:
      "When the family flies and the car cannot, the vehicle still deserves a plan. SafarSetu moves cars, bikes and scooters between cities with soft straps, enclosed or covered carriers where the journey needs them, and a delivery window you are told in advance.",
    story: [
      "A car that has to meet you in another city is not spare cargo. Ground clearance, whether it runs, and how low the bumper sits decide the carrier before the day, not at the bottom of a ramp. We ask those questions when the booking is made.",
      "At pickup we record the obvious condition with you: existing marks, the wheel that already scuffs, the mirror you already know about. The vehicle is driven only as far as the carrier. Wheels are chocked, straps are soft, and nothing is allowed to lean on the bodywork.",
      "Bikes and scooters are not strapped like freight. They are protected against abrasion and kept clear of other cargo. Delivery is a place and a window you already know. If that window moves, the move captain calls. You do not discover it from a yard you have never heard of.",
    ],
    included: [
      {
        title: "The right carrier, chosen early",
        text: "Sedans, SUVs and low-clearance cars are matched to a carrier before the pickup, so a surprise at the ramp does not become the plan.",
      },
      {
        title: "A condition note you sign",
        text: "Existing marks are recorded with you before the vehicle moves an inch. The handover in the new city uses that same note.",
      },
      {
        title: "Soft straps and wheel care",
        text: "Cars are secured at proper points. Two-wheelers are wrapped against rub and kept from cartons, furniture and other vehicles.",
      },
      {
        title: "A delivery you can plan around",
        text: "Pickup and arrival are set against your own travel. A change in the window is a phone call from the person who holds the file.",
      },
    ],
    benefits: [
      "Car and two-wheeler transport",
      "Pickup condition notes",
      "Soft straps and wheel protection",
      "Covered transit options",
      "Delivery coordination at the new city",
    ],
    process: [
      { title: "Vehicle details", text: "Make, ground clearance and whether it runs — so the right carrier is booked." },
      { title: "Condition note", text: "We record the obvious condition with you before it is moved an inch." },
      { title: "Secure loading", text: "Wheels chocked, straps soft, and nothing leaning on bodywork." },
      { title: "Handover", text: "You meet the vehicle at the agreed point, not at a mystery yard." },
    ],
    ideal: "Anyone relocating a car or bike alongside a household move, or as a journey of its own.",
    layout: "vehicle",
    vehicles: [
      {
        title: "Cars",
        text: "Sedans, hatchbacks and SUVs are driven only as far as the carrier, then secured. Low-clearance cars are called out before the day, not at the ramp.",
      },
      {
        title: "Bikes & scooters",
        text: "Two-wheelers are packed against abrasion, strapped at proper points, and kept from other cargo. A daily rider’s bike is not treated like spare freight.",
      },
    ],
    chapters: [
      {
        title: "Transit protection",
        text: "Dust, rain and highway grit are the real risks. Covers, clearance and how the vehicle sits among others are decided before departure.",
      },
      {
        title: "You know the day",
        text: "Pickup and delivery are coordinated around your own travel. If the window shifts, you hear it from the move captain, not from a tracking page that went quiet.",
      },
    ],
  },
  {
    slug: "packing-moving",
    title: "Packing & Unpacking",
    short: "Packing & Moving",
    icon: "Package",
    image: images.servicePacking,
    footer: false,
    summary:
      "Premium materials, clear labels and an inventory — plus unpacking that puts a home back in working order.",
    description:
      "Packing is the part of a move people feel for weeks. SafarSetu brings materials chosen for Indian homes — books that are heavy, brass that marks, linen that can breathe — and labels that still make sense when you are tired.",
    story: [
      "Packing is where a move is either calm or remembered badly. Indian homes do not fit one carton. Books are heavy enough to split a thin box, brass marks if it is wrapped in the wrong thing, and linen needs to breathe. Materials are chosen after we have seen the rooms, not from a standard kit dropped at the door.",
      "Rooms are closed one by one. The kitchen is finished before the bedrooms begin, so nothing sits half-decided on a dining table. Every carton says the room and, where it matters, what is inside. One box is marked for the first night: kettle, medicines, a change of clothes, the charger.",
      "Unpacking is a service, not a favour at the end. If you want the crew to stay, they open the rooms you name, assemble what was dismantled, and take the paper and debris with them. You can also take packing without our truck, or unpacking without having used us for the journey.",
    ],
    included: [
      {
        title: "Materials matched to the object",
        text: "Double-wall cartons for books, individual wraps for brass and ceramic, crates for glass, and monsoon covers when the season asks for them.",
      },
      {
        title: "Labels you will recognise",
        text: "Kitchen, puja, child’s room, winter clothes — words you will know in a new hallway. “Misc” is not a system we use.",
      },
      {
        title: "An inventory you can keep",
        text: "A simple list, useful on moving day and later if a carton is opened in storage. You can photograph it before the shutter closes.",
      },
      {
        title: "Unpacking for the rooms you name",
        text: "Kitchen, beds and wardrobes first, or whichever rooms you choose. Debris leaves with the crew.",
      },
    ],
    benefits: [
      "Materials matched to the object",
      "Room and content labels",
      "A simple inventory",
      "Fragile wraps for décor and glass",
      "Unpacking for the rooms you name",
    ],
    process: [
      { title: "Material plan", text: "Carton types, wraps and crates are chosen after we know the home." },
      { title: "Pack", text: "Rooms are closed one by one so nothing is half-decided." },
      { title: "Mark", text: "Every carton says the room and, where it matters, the contents." },
      { title: "Unpack", text: "We open the kitchen, beds and wardrobes first, or whichever rooms you choose." },
    ],
    ideal: "Homes that want packing, unpacking, or both — with or without our transport.",
    layout: "packing",
    materials: [
      { title: "Cartons", text: "Small and double-wall for books and tools. Larger for linen, lamps and soft goods." },
      { title: "Wraps", text: "Paper, foam and blankets used where each one actually protects, not as decoration." },
      { title: "Labels", text: "Room, a short content line, and a mark for the box you will want on night one." },
      { title: "Inventory", text: "A list you can photograph and keep, useful if a carton is opened later in storage." },
    ],
    chapters: [
      {
        title: "Labels you can live with",
        text: "“Misc” is not a system. We mark kitchen, puja, child’s room, winter clothes — words you will recognise in a new hallway.",
      },
      {
        title: "Unpacking is a service",
        text: "If you want the crew to stay, they open cartons, assemble what was dismantled, and carry the debris away.",
      },
    ],
  },
  {
    slug: "storage",
    title: "Storage & Warehousing",
    short: "Storage",
    icon: "Warehouse",
    image: images.serviceStorage,
    footer: true,
    summary:
      "Short and longer stays for cartons and furniture, with an inventory and a facility you can ask about.",
    description:
      "Between a sale and a possession date, or while a home is renovated, things need a clean, known place. SafarSetu stores packed household and office goods with an inventory, so you are not guessing what went into a warehouse.",
    story: [
      "Storage is usually a gap between two dates: a sale and a possession, a renovation, or an office that is not ready for its furniture. The goods still need a known place. We separate what you will use every day from what can wait, and we pack the second group for time, not only for a truck ride.",
      "At intake, cartons and furniture are checked against the list as they arrive. Furniture stays wrapped and off the floor. You are not guessing, months later, whether the teak almirah went into a warehouse or stayed with a relative. The inventory is the record.",
      "When the new date is real, the same move captain coordinates the return. Goods come back in room order, not as a pile that has to be sorted on the pavement. You do not begin the relationship again with a stranger who has never seen the list.",
    ],
    included: [
      {
        title: "A short stay or a longer hold",
        text: "A few weeks between possession dates, or months of furniture you will not need in the new city immediately. Both are inventoried.",
      },
      {
        title: "Packed for time",
        text: "Cartons are sealed for storage, not only for a highway. Furniture is wrapped and kept off the floor in a managed facility.",
      },
      {
        title: "An inventory at the door",
        text: "What goes in is checked against the list. You leave with a record, not a hope that someone will remember.",
      },
      {
        title: "Return in room order",
        text: "Retrieval is planned with the captain who stored the goods. Boxes come back the way the new home will use them.",
      },
    ],
    benefits: [
      "Short-term and longer storage",
      "Household and office goods",
      "Inventory at intake",
      "Wrapped furniture, not loose piles",
      "Retrieval by the same captain",
    ],
    process: [
      { title: "What stays", text: "We separate daily-use items from what can wait." },
      { title: "Pack for storage", text: "Cartons are sealed for time, not only for a truck ride." },
      { title: "Intake", text: "Goods are checked against the list as they are received." },
      { title: "Return", text: "When the new date is real, we bring them back in room order." },
    ],
    ideal: "Families between homes, and offices holding furniture through a refit.",
    layout: "storage",
    durations: [
      {
        title: "A short stay",
        text: "A few weeks between possession dates, a renovation, or an office that is not ready. You still get an inventory.",
      },
      {
        title: "A longer hold",
        text: "Months of storage for furniture and cartons you will not need in the new city immediately. Retrieval is planned, not improvised.",
      },
    ],
    chapters: [
      {
        title: "Secure, orderly, knowable",
        text: "Goods sit wrapped and off the floor in a managed facility. The point is not mystery storage. It is a list with your name on it.",
      },
      {
        title: "The same people, later",
        text: "When you are ready, the move captain who stored the goods coordinates their return. You do not begin the relationship again.",
      },
    ],
  },
  {
    slug: "international-relocation",
    title: "International Relocation",
    short: "International Relocation",
    icon: "Globe",
    image: images.serviceInternational,
    footer: true,
    summary:
      "Export packing, document coordination and freight handoff, with someone still answering at origin.",
    description:
      "Leaving India with a household is a different kind of move. Volumes change, packing standards change, and paperwork has to travel with the boxes. SafarSetu prepares the origin side with care and coordinates the freight path so you are not assembling it alone.",
    story: [
      "An international move from India is not a domestic truck with a longer road. Moisture, handling and time all change once a shipment leaves the city. We begin by separating what should sail from what is kinder to begin again: sentimental weight is not the same as a sensible volume.",
      "Export packing is built for that journey. Crates and cartons are stronger than a city move requires, glass and brass are wrapped for weeks rather than a night, and a final inventory is agreed before anything is sealed. You should know what left the house.",
      "Papers travel with the same care as the crates. We coordinate the lists and the documents your forwarder asks for. We do not replace your customs adviser, and we say so. At origin you still have a move captain. You leave with a named point of contact for arrival, so the new city does not start with a silent container.",
    ],
    included: [
      {
        title: "A decision about what should sail",
        text: "We help you separate pieces you will miss from volume that is cheaper to replace. The shipment is smaller and more deliberate because of that conversation.",
      },
      {
        title: "Export packing",
        text: "Crates, moisture protection and wraps chosen for a freight journey, not for a highway night. The inventory is closed before the last seal.",
      },
      {
        title: "Documents, coordinated",
        text: "Inventories and the papers your forwarder needs are gathered with you. Legal and customs advice stays with your adviser.",
      },
      {
        title: "Someone still answering at origin",
        text: "The captain who packed the house remains the person you call. Destination arrival has a named contact, not a tracking page that went quiet.",
      },
    ],
    benefits: [
      "International-grade packing",
      "Documentation coordination",
      "Freight handoff",
      "Origin-side move captain",
      "Guidance for what should not ship",
    ],
    process: [
      { title: "What should sail", text: "We help you separate sentimental weight from what is cheaper to begin again." },
      { title: "Export pack", text: "Crates and cartons built for a longer, rougher journey than a domestic truck." },
      { title: "Papers", text: "We coordinate the documents your shipment needs. We do not replace your customs adviser." },
      { title: "Destination note", text: "You leave with a clear picture of who receives the shipment and when to expect word." },
    ],
    ideal: "Families and professionals moving from India to another country, or receiving a shipment home.",
    layout: "international",
    stages: [
      { title: "Origin", text: "Survey, export packing, and a final inventory before anything is sealed for freight." },
      { title: "Freight", text: "Handoff to the shipping path, with documents traveling as carefully as the crates." },
      { title: "Destination", text: "A named point of contact for arrival, so the new city does not start with a silent container." },
    ],
    chapters: [
      {
        title: "Packing for a longer road",
        text: "Moisture, handling and time are different once a shipment leaves the city. Crating and wraps are chosen for that journey.",
      },
      {
        title: "Documents, coordinated",
        text: "Passports of boxes — inventories, lists, and the papers your forwarder asks for — are gathered with you. Legal advice stays with your adviser. Coordination stays with us.",
      },
    ],
  },
];

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}
