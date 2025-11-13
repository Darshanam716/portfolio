export const projectsData = [
{
  id: 1,
  name: "CrisisConnect",
  description:
    "CrisisConnect is a comprehensive emergency service management platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application enables users to request urgent assistance such as fire, police, hospital, or medical support. It features a real-time admin dashboard, live chat system, email notifications, and a donation module. Users can register, log in, and request help based on their current or home location, while admins can manage and respond to requests instantly.",
  features: [
    "User registration and authentication",
    "Dashboard for requesting fire, police, hospital, and medical support",
    "Location-based emergency request system",
    "Real-time admin panel for managing and updating requests",
    "Live chat system for user-admin communication",
    "Donation system via QR code",
    "Email notifications for request confirmations"
  ],
  tools: [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "JWT",
    "bcrypt",
    "Tailwind / CSS",
  ],
  role: "Full Stack Developer",
  code: "https://github.com/Darshanam716/cresis-connector",
  demo: "",
},
  {
    id: 2,
    name: "Plant Disease Detection System",
    description:
      "Built an AI-powered plant disease detection platform using Flask and a custom-trained CNN model. Users can upload leaf images, and the system identifies diseases with accuracy, provides confidence scores, and suggests treatments. Integrated OpenCV for preprocessing and designed a clean UI for seamless user experience.",
    tools: ["Flask", "TensorFlow/Keras", "Python", "OpenCV", "HTML", "CSS"],
    role: "ML & Backend Developer",
    code: "",
    demo: ""
  },
  {
    id: 3,
    name: "Expiry Tracking System",
    description:
      "Designed and developed a smart Expiry Tracking System that helps users monitor product expiry dates. The app automatically categorizes near-expiry and expired items, sends alerts, and provides a dashboard for easy tracking. Implemented clean UI and real-time notifications to reduce wastage and ensure timely usage.",
    tools: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TailwindCSS",
      "Cron Jobs"
    ],
    role: "Full Stack Developer",
    code: "",
    demo: ""
  },
  {
    id: 4,
    name: "AI SQL Generator",
    description:
      "Built an AI-powered SQL Generator that converts natural language queries into SQL statements using a fine-tuned T5 Transformer model. Integrated Google Login (OAuth 2.0) for secure authentication and used MongoDB to store user queries and generated SQL. Designed a clean UI for easy query generation and history tracking.",
    tools: [
      "T5 Transformer",
      "Python",
      "Flask / FastAPI",
      "Node.js",
      "MongoDB",
      "OAuth 2.0",
      "React / Next.js"
    ],
    role: "AI & Backend Developer",
    code: "",
    demo: ""
  }
];



// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },