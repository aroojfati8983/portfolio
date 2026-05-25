import { 
  FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaLock,FaCss3Alt, FaCloud, FaWind, FaShoppingCart, FaComments, FaCheckSquare,FaUserPlus, FaSignInAlt, FaSun, FaCloudSun, FaPalette, FaRocket, FaLaptopCode, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive React sites with modern CSS frameworks.',
    tags: ['React', 'Tailwind CSS', 'Bootstrap', 'Material UI']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating APIs and server-side applications.',
    tags: ['Node.js', 'Express', 'REST APIs']
  },
  {
    title: 'Database',
    icon: FaDatabase,
    description: 'Managing data with modern databases.',
    tags: ['MongoDB', 'MySQL']
  },
  {
    title: 'API Testing & Development',
    icon: FaTools,
    description: 'Testing and debugging APIs with modern tools.',
    tags: ['Postman', 'API Testing', 'REST Client']
  },
  {
    title: 'AI Tools',
    icon: FaRobot,
    description: 'Using AI assistants to enhance productivity and coding efficiency.',
    tags: ['Claude AI', 'ChatGPT','DeepSeek']  
  },
  {
    title: 'Tools & Version Control',
    icon: FaCode,
    description: 'Using essential tools for development and deployment.',
    tags: ['GitHub', 'VS Code', 'Vercel', 'Netlify']
  }
];


export const projects = [
{
  title: "E-Commerce Platform",
  description: "A product catalog web app with multiple pages, product listing, and product details view. 🛒",
  image: projectImg1,
  tech: ["React", "Node.js", "MongoDB", "Stripe"],
  icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
  demo: "https://router-8o3q.vercel.app/",
  code: "https://github.com/aroojfati8983/router",
 
},
  {
  title: "User Authentication System",
  description: "Secure login and signup system with email validation, password encryption, and dashboard access. 🔐",
  image: projectImg2,
  tech: ["React", "Express.js", "MongoDB", "JWT", "BCrypt"],
  icons: [FaReact, FaNodeJs, FaDatabase, FaLock, FaUserPlus],
  demo: "#",
  code: "https://github.com/aroojfati8983/login-pages",
},
 {
  title: "Weather App",
  description: "Real-time weather application showing temperature, humidity, and forecast with dynamic backgrounds.☁️",
  image: projectImg3,
  tech: ["React", "API Integration", "CSS3", "Axios"],
  icons: [FaCloud, FaReact, FaCss3Alt],
  demo: "https://weather-psi-azure-30.vercel.app/",
  code: "https://github.com/aroojfati8983/weather",
},
  {
  "title": "Portfolio Website",
  "description": "Personal portfolio with React + Vite, Tailwind CSS, dark mode, and fully responsive.🎨",
  "image": projectImg4,
  "tech": ["React", "Tailwind CSS", "Framer Motion", "Vite"],
 "icons": [FaReact, FaCss3Alt], 
  "demo": "#",
  "code": "https://github.com/aroojfati8983/portfolio"
},
  {
    title: "Chat App",
    description: "A real-time chat application with group messaging, emojis, and file sharing.💬",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js","CSS3"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "https://github.com/aroojfati8983/socket-app",
  },
  {
  title: "Password Generator",
  description: "Generate strong, random passwords with customizable length and character options. 🔐",
  image: projectImg6,
  tech: ["React", "Vite", "JavaScript", "CSS3"],
  icons: [FaLock, FaReact, FaCss3Alt], 
  demo: "https://inquisitive-chimera-97bc8e.netlify.app/", 
  code: "https://github.com/aroojfati8983/password-generator",  
}
];


export const workData = [
  {
    role: "Student Developer",
    company: "Self-Learning",
    duration: "2026 - Present",
    description:
      "Learning full-stack development, building projects, and improving coding skills daily. Currently working on React and Node.js projects.",
    color: "purple"
  },
  {
    role: "Project Builder",
    company: "Personal Projects",
    duration: "2025-2026",
    description:
      "Created multiple projects including Weather App, Password Generator, Chat App, and E-commerce catalog focusing on modern web technologies.",
    color: "pink"
  },
  {
    role: "Beginner Coder",
    company: "Learning Journey",
    duration: "2025",
    description:
      "Started learning web development in 2025. Built first projects and continuously improving skills with practice and dedication.",
    color: "blue"
  }
];
export const techStack = [
 "React", "Node.js", "Tailwind CSS", "MongoDB", "Express.js", "Git", "Vite"];
