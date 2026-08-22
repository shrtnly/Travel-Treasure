export const COMPANY_INFO = {
  name: "Travel Treasure",
  tagline: "Your Journey, Our Priority",
  subTagline: "Corporate Travel & Visa Management — delivering competitive fares, multi-GDS connectivity, and reliable travel solutions for businesses, families, and individual travelers.",
  established: 2014,
  teamStrength: "15–20 travel professionals",
  businessType: "Corporate Travel & Visa Management",
  address: "House 2, Road-4, Block-A, Section-11, Mohammad Ali Tower, 4th Floor, Dhaka-1216, Bangladesh",
  email: "Traveltreasure121@gmail.com",
  phone: "+88 01714 400844",
  phoneRaw: "+8801714400844",
  whatsapp: "+88 01714 400844",
  whatsappRaw: "8801714400844",
  website: "www.traveltreasure.online",
  googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.09825482352!2d90.3665!3d23.8151!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c3c1e285cfcd%3A0x280e7d9eb012345!2sSection%2011%2C%20Mirpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd",
  mission: "To make every traveler's journey smooth, safe, and personally meaningful — by combining global connectivity with local warmth, ensuring that each client feels cared for from the first inquiry until safe return home. We exist to remove the friction, uncertainty, and stress from travel, so our clients can focus on what truly matters: the experience itself.",
  vision: "To become Bangladesh's most trusted and preferred travel partner — recognized by corporations, airlines, and individual travelers alike for our integrity, responsiveness, and the human touch we bring to every booking. We envision a future where booking through Travel Treasure is synonymous with peace of mind.",
  certifications: [
    { name: "IATA Accredited", label: "International Air Transport Association", code: "Global Accreditation for Travel Agents" },
    { name: "ATAB Member", label: "Association of Travel Agents of Bangladesh", code: "National Industry Membership" },
    { name: "TOAB Member", label: "Tour Operators Association of Bangladesh", code: "Recognized Tour Operator Status" },
    { name: "Ministry Recognition", label: "Ministry of Civil Aviation & Tourism", code: "Government Accreditation Standards" },
    { name: "E-TIN Registered", label: "Electronic Taxpayer's Identification Number", code: "Issued & Managed by NBR" },
    { name: "Trade Licensed", label: "Trade License in Bangladesh", code: "Official Legal Business Permit" },
  ]
};

export const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Services", 
    href: "/services",
    dropdown: [
      { name: "All Services Overview", href: "/services" },
      { name: "Corporate Travel", href: "/corporate-travel" },
      { name: "Air Booking", href: "/air-booking" },
      { name: "Visa Processing", href: "/visa-processing" },
      { name: "Hotel Reservation", href: "/hotel-reservation" },
      { name: "Airport Transfer", href: "/airport-transfer" },
      { name: "VIP Airport Assistance", href: "/vip-airport-assistance" },
      { name: "MICE Services", href: "/mice-services" },
      { name: "Chartered Flight", href: "/services#chartered-flight" },
      { name: "Travel Insurance", href: "/travel-insurance" },
      { name: "Online Booking", href: "/online-booking" },
    ]
  },
  { name: "Corporate Travel", href: "/corporate-travel" },
  { name: "MICE", href: "/mice-services" },
  { name: "Partners", href: "/partner-airlines" },
  { name: "Clients", href: "/clients" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
];

export const CORE_SERVICES = [
  {
    id: "online-booking",
    title: "Online Booking Services",
    shortDesc: "Seamless booking through multi-GDS connectivity and integrated APIs with real-time availability.",
    fullDesc: "Seamless booking through multi-GDS connectivity and integrated APIs, offering real-time availability and instant confirmation for corporate and individual travelers.",
    icon: "Globe",
    href: "/online-booking",
    features: ["Multi-GDS Connectivity", "API Integration", "Real-Time Availability", "Instant Confirmation"]
  },
  {
    id: "air-booking",
    title: "Air Booking",
    shortDesc: "Domestic and international flight ticketing with access to 18 partner airlines and competitive fares.",
    fullDesc: "Domestic and international flight ticketing with access to 18 partner airlines and competitive fares. We provide optimized flight schedules, corporate rates, seat preferences, and group booking logistics.",
    icon: "Plane",
    href: "/air-booking",
    features: ["18 Global Partner Airlines", "Domestic & International Routes", "Competitive Fares", "Flexible Booking Options"]
  },
  {
    id: "visa-processing",
    title: "Visa Processing",
    shortDesc: "End-to-end visa application support — documentation, form filling, and embassy liaison.",
    fullDesc: "End-to-end visa application support including complete documentation guidance, application form filling, embassy appointment scheduling, and dedicated liaison.",
    icon: "FileCheck",
    href: "/visa-processing",
    features: ["Documentation Assistance", "Form Filling", "Embassy Liaison", "Application Tracking"]
  },
  {
    id: "hotel-reservation",
    title: "Hotel Reservation",
    shortDesc: "Global hotel bookings across every budget tier, with negotiated corporate rates.",
    fullDesc: "Global hotel reservations across every budget tier with negotiated corporate rates, comfortable accommodations, and flexible booking conditions.",
    icon: "Building2",
    href: "/hotel-reservation",
    features: ["Global Hotel Inventory", "Negotiated Corporate Rates", "Every Budget Tier", "Flexible Terms"]
  },
  {
    id: "airport-transfer",
    title: "Airport Transfer",
    shortDesc: "Reliable pre-booked ground transportation tailored to your schedule and group size.",
    fullDesc: "Reliable pre-booked ground transportation tailored to your schedule, executive requirements, and group size for hassle-free airport transit.",
    icon: "Car",
    href: "/airport-transfer",
    features: ["Punctual Chauffeur Service", "Schedule & Group Customization", "Executive Sedan & Van Fleet", "Smooth Terminal Pickup"]
  },
  {
    id: "vip-assistance",
    title: "VIP Airport Assistance",
    shortDesc: "Personalized airport assistance by professional greeters — smooth check-in, immigration, and boarding.",
    fullDesc: "Personalized airport assistance by professional greeters — ensuring smooth check-in, expedited immigration guidance, and priority boarding support.",
    icon: "Crown",
    href: "/vip-airport-assistance",
    features: ["Personalized Meet & Greet", "Professional Greeters", "Fast-Track Immigration", "Smooth Boarding Support"]
  },
  {
    id: "mice-services",
    title: "MICE Services",
    shortDesc: "Complete meeting, incentive, conference & event travel management — venue to delegate logistics.",
    fullDesc: "Complete meeting, incentive, conference & event travel management covering venue sourcing, delegation flight booking, ground transit, and event logistics.",
    icon: "Users",
    href: "/mice-services",
    features: ["Meetings & Incentive Travel", "Conferences & Events", "Venue & Delegate Logistics", "Group Ticketing"]
  },
  {
    id: "chartered-flight",
    title: "Chartered Flight",
    shortDesc: "On-demand chartered flights for groups, executive travel, and time-sensitive itineraries.",
    fullDesc: "On-demand chartered flight arrangements tailored for executive groups, high-priority delegations, private itineraries, and time-critical missions.",
    icon: "PlaneTakeoff",
    href: "/services#chartered-flight",
    features: ["On-Demand Flight Chartering", "Executive Travel Flexibility", "Group Delegation Transport", "Time-Sensitive Itineraries"]
  },
  {
    id: "travel-insurance",
    title: "Travel Insurance",
    shortDesc: "Comprehensive coverage — medical, trip cancellation, baggage, and emergency evacuation.",
    fullDesc: "Comprehensive travel insurance coverage including emergency medical expense protection, trip cancellation coverage, baggage loss, and emergency medical evacuation.",
    icon: "ShieldCheck",
    href: "/travel-insurance",
    features: ["Emergency Medical Coverage", "Trip Cancellation Protection", "Baggage Insurance", "Emergency Evacuation"]
  },
  {
    id: "foreign-dollar",
    title: "Foreign Dollar Endorsement",
    shortDesc: "Foreign currency endorsement and expatriate employee travel services for corporate clients.",
    fullDesc: "Foreign currency endorsement support and expatriate employee travel arrangements ensuring full regulatory compliance according to Bangladesh Bank guidelines.",
    icon: "DollarSign",
    href: "/services#foreign-dollar",
    features: ["Bangladesh Bank Compliance", "Passport Currency Endorsement", "Corporate Limit Management", "Smooth Documentation"]
  },
  {
    id: "expat-services",
    title: "Expat Employees Management",
    shortDesc: "Work permits, security clearance, onboarding, offboarding, and specialized assignments.",
    fullDesc: "Specialized expat employee travel management including work permit coordination, security clearance support, employee onboarding & offboarding logistics, and family travel.",
    icon: "Briefcase",
    href: "/services#expat-services",
    features: ["Work Permits & Clearances", "Onboarding & Offboarding", "Specialized Travel Assignments", "Family Travel Coordination"]
  }
];

export const AIRLINE_PARTNERS = [
  { name: "Biman Bangladesh Airlines", code: "BG", country: "Bangladesh", logoText: "BIMAN BANGLADESH AIRLINES" },
  { name: "Emirates", code: "EK", country: "UAE", logoText: "EMIRATES" },
  { name: "Qatar Airways", code: "QR", country: "Qatar", logoText: "QATAR AIRWAYS" },
  { name: "Singapore Airlines", code: "SQ", country: "Singapore", logoText: "SINGAPORE AIRLINES" },
  { name: "Cathay Pacific", code: "CX", country: "Hong Kong", logoText: "CATHAY PACIFIC" },
  { name: "Turkish Airlines", code: "TK", country: "Turkey", logoText: "TURKISH AIRLINES" },
  { name: "Thai Airways", code: "TG", country: "Thailand", logoText: "THAI AIRWAYS" },
  { name: "Malaysia Airlines", code: "MH", country: "Malaysia", logoText: "MALAYSIA AIRLINES" },
  { name: "Saudia", code: "SV", country: "Saudi Arabia", logoText: "SAUDIA" },
  { name: "Kuwait Airways", code: "KU", country: "Kuwait", logoText: "KUWAIT AIRWAYS" },
  { name: "US-Bangla Airlines", code: "BS", country: "Bangladesh", logoText: "US-BANGLA AIRLINES" },
  { name: "NOVOAIR", code: "VQ", country: "Bangladesh", logoText: "NOVOAIR" },
  { name: "United Airlines", code: "UA", country: "United States", logoText: "UNITED AIRLINES" },
  { name: "Vistara", code: "UK", country: "India", logoText: "VISTARA" },
  { name: "AirAsia", code: "AK", country: "Malaysia", logoText: "AIRASIA" },
  { name: "Malindo Air", code: "OD", country: "Malaysia", logoText: "MALINDO AIR (BATIK AIR)" },
  { name: "China Eastern Airlines", code: "MU", country: "China", logoText: "CHINA EASTERN AIRLINES" },
  { name: "China Southern Airlines", code: "CZ", country: "China", logoText: "CHINA SOUTHERN AIRLINES" },
];

export const CLIENT_LIST = [
  { name: "Bank Asia", industry: "Banking & Financial Services", tag: "Corporate Travel & Visa Services" },
  { name: "BRAC Bank", industry: "Banking & Financial Services", tag: "Executive Flights & MICE" },
  { name: "Chinese", industry: "Multinational Enterprise", tag: "Cross-border Travel Solutions" },
  { name: "Dekko Group", industry: "Garments & Manufacturing", tag: "Corporate Travel Management" },
];

export const EXECUTIVE_TEAM = [
  {
    name: "Md Sajid Hossain",
    title: "Chief Executive Officer (CEO)",
    bio: "Leads strategic direction, airline partnerships, and overall business vision at Travel Treasure.",
    initials: "SH"
  },
  {
    name: "Syed Md. Faisal Ahmed",
    title: "Managing Director (MD)",
    bio: "Oversees day-to-day operations, corporate client relations, multi-GDS connectivity, and service quality.",
    initials: "FA"
  }
];

export const TRAVEL_PROCESS_STEPS = [
  { number: "01", title: "Requirement", desc: "We listen to your travel needs, dates, budget, and preferences.", icon: "ClipboardList" },
  { number: "02", title: "Get Custom Quote", desc: "You receive a tailored quote with multiple options within 24 hours.", icon: "Calculator" },
  { number: "03", title: "Planning", desc: "Our team builds the optimal itinerary, handling all logistics.", icon: "Calendar" },
  { number: "04", title: "Book & Arrange", desc: "We confirm bookings, visas, hotels, transfers, and insurance.", icon: "CheckCircle2" },
  { number: "05", title: "Travel Support", desc: "24/7 support during your trip for any changes or emergencies.", icon: "Headphones" },
  { number: "06", title: "Safe Return", desc: "We follow up post-trip to ensure everything went smoothly.", icon: "Home" }
];

