// ============================================================
// Central Portfolio Data — Noor Fatima
// ============================================================

export const PERSONAL = {
  name: "Noor Fatima",
  title: "Full Stack & Mobile Developer",
  tagline: "Where creativity meets code",
  bio: `I'm a passionate Full Stack and Mobile Developer based in Pakistan,
  specializing in Flutter, React/Next.js, and AI-powered applications.
  I love crafting beautiful, performant digital experiences that solve
  real-world problems — from AI crop disease detection to elegant 
  e-commerce apps. When I'm not coding, I'm exploring the intersection 
  of design and technology.`,
  location: "Pakistan",
  available: true,
  email: "noor.fatima.212212@gmail.com",
  github: "https://github.com/noorfatima018",
  linkedin: "https://www.linkedin.com/in/noor-fatima-653aa3337/",
  avatar: "https://avatars.githubusercontent.com/u/187599428?v=4",
  resume: "/Noor_Fatima_CV.pdf",
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string[];
  tags: string[];
  github: string;
  live?: string;
  image: string;
  status: "Completed" | "In Progress" | "Planned";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  timeline: string;
  features: string[];
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "ai-crops-disease",
    title: "AI Crop Disease Detection",
    description:
      "Deep learning agricultural diagnostic system using hybrid SVM/KNN transfer learning with automated PDF reports.",
    longDescription:
      "A sophisticated computer vision system built to help farmers detect crop diseases early using deep learning. The system employs a hybrid SVM/KNN approach combined with transfer learning (ResNet/VGG architectures) to classify 38+ plant diseases with high accuracy. It generates automated PDF diagnostic reports and syncs locally with MongoDB.",
    category: ["AI/ML", "Python"],
    tags: ["Python", "TensorFlow", "CNN", "Flask", "React", "MongoDB", "SVM", "KNN"],
    github: "https://github.com/noorfatima018/AI_Crops_Disease_Detection",
    image: "/crop_disease.png",
    status: "Completed",
    difficulty: "Advanced",
    timeline: "2026",
    features: [
      "Hybrid SVM/KNN transfer learning classification",
      "38+ plant disease categories",
      "Automated PDF diagnostic reports",
      "MongoDB local sync for offline use",
      "Flask REST API backend",
      "React frontend dashboard",
      "Real-time image processing",
    ],
    featured: true,
  },
  {
    id: "quiz-master",
    title: "Quiz Master",
    description:
      "Interactive Flutter quiz app with Groq AI tutor integration, real-time tracking, and high-fidelity transitions.",
    longDescription:
      "A fully-featured Flutter quiz application that leverages Groq AI as an intelligent tutor to provide personalized explanations and feedback. Features real-time score tracking, beautiful screen transitions, Firebase backend, and adaptive difficulty levels.",
    category: ["Flutter", "Mobile"],
    tags: ["Flutter", "Dart", "Firebase", "Groq AI", "REST API"],
    github: "https://github.com/noorfatima018/Quiz_Master",
    image: "/quiz_master.png",
    status: "Completed",
    difficulty: "Advanced",
    timeline: "2026",
    features: [
      "Groq AI-powered intelligent tutoring",
      "Real-time score tracking",
      "High-fidelity screen transitions",
      "Firebase authentication & database",
      "Multiple quiz categories",
      "Adaptive difficulty system",
      "Offline quiz support",
    ],
    featured: true,
  },
  {
    id: "shophub",
    title: "ShopHub E-Commerce App",
    description:
      "Full-featured Flutter e-commerce application with product listing, cart management, and a beautiful UI.",
    longDescription:
      "A comprehensive e-commerce mobile application built with Flutter and Dart. Features a polished product catalog, advanced cart system, user authentication, order history, and a clean glassmorphic UI design. Built for real-world retail use cases.",
    category: ["Flutter", "Mobile"],
    tags: ["Flutter", "Dart", "Firebase", "REST API", "UI/UX"],
    github: "https://github.com/noorfatima018/Shophub_app",
    image: "/shophub.png",
    status: "Completed",
    difficulty: "Intermediate",
    timeline: "2026",
    features: [
      "Beautiful product catalog with categories",
      "Cart & wishlist management",
      "User authentication (Firebase)",
      "Order history & tracking",
      "Search & filter functionality",
      "Responsive mobile-first design",
    ],
    featured: true,
  },
  {
    id: "expense-tracker",
    title: "AI Expense Tracker",
    description:
      "Smart Python-powered expense tracker with AI categorization, visualization, and Vercel deployment.",
    longDescription:
      "An intelligent expense tracking application that uses AI to automatically categorize transactions, detect spending patterns, and generate insightful visualizations. Built with Python and deployed on Vercel for accessibility.",
    category: ["AI/ML", "Python", "Web"],
    tags: ["Python", "AI", "Data Visualization", "Vercel", "Flask"],
    github: "https://github.com/noorfatima018/ExpenseTracker",
    live: "https://expense-tracker-jade-beta-92.vercel.app",
    image: "/expense_tracker.png",
    status: "Completed",
    difficulty: "Intermediate",
    timeline: "2026",
    features: [
      "AI-powered transaction categorization",
      "Spending pattern analysis",
      "Interactive charts & visualizations",
      "Monthly budget tracking",
      "Export to CSV/PDF",
      "Live demo on Vercel",
    ],
    featured: true,
  },
  {
    id: "job-finder",
    title: "Job Finder App",
    description:
      "Flutter job discovery application with advanced search, filters, and a modern card-based interface.",
    longDescription:
      "A mobile-first job discovery platform built with Flutter. Features advanced search and filtering capabilities, beautiful job listing cards, bookmarking, and a clean professional UI that makes job hunting intuitive and efficient.",
    category: ["Flutter", "Mobile"],
    tags: ["Flutter", "Dart", "REST API", "UI/UX"],
    github: "https://github.com/noorfatima018/Job_Finder_app",
    image: "/job_finder.png",
    status: "Completed",
    difficulty: "Intermediate",
    timeline: "2026",
    features: [
      "Advanced search & filtering",
      "Beautiful card-based job listings",
      "Bookmark favorite jobs",
      "Company profile pages",
      "Location-based job discovery",
      "Apply directly from the app",
    ],
    featured: false,
  },
  {
    id: "e-learning-platform",
    title: "E-Learning Platform",
    description:
      "Modern online learning platform with course catalog, video lessons, progress tracking, and quizzes.",
    longDescription:
      "A full-featured e-learning web platform with a rich course catalog, video lesson player, progress tracking, assessments, and a beautiful modern UI. Built with JavaScript and deployed on Vercel.",
    category: ["Web", "Full Stack"],
    tags: ["JavaScript", "HTML", "CSS", "REST API", "Vercel"],
    github: "https://github.com/noorfatima018/E_Learning_plateform",
    live: "https://e-learning-platform-cl9u.vercel.app/",
    image: "/e_learning.png",
    status: "Completed",
    difficulty: "Intermediate",
    timeline: "2026",
    features: [
      "Course catalog with categories",
      "Video lesson player",
      "Progress tracking dashboard",
      "Quiz & assessment system",
      "Student enrollment",
      "Certificate generation",
    ],
    featured: true,
  },
  {
    id: "recipe-finder",
    title: "RecipeFinder",
    description:
      "Smart culinary web app for discovering, organizing, and exploring recipes with a glassmorphic interface.",
    longDescription:
      "A visually stunning recipe discovery application with a glassmorphic design. Users can search thousands of recipes, filter by dietary requirements, save favorites, and get ingredient shopping lists — all with beautiful card-based layouts.",
    category: ["Web"],
    tags: ["React", "JavaScript", "API Integration", "Tailwind CSS"],
    github: "https://github.com/noorfatima018/RecipeFinder",
    image: "/recipe_finder.png",
    status: "Completed",
    difficulty: "Intermediate",
    timeline: "2026",
    features: [
      "Search 1M+ recipes via API",
      "Filter by dietary requirements",
      "Favorite & save recipes",
      "Shopping list generation",
      "Nutritional information",
      "Glassmorphic card design",
    ],
    featured: true,
  },
  {
    id: "aftab-brothers",
    title: "Aftab Brothers Business Website",
    description:
      "Professional multi-page business website for a real client, with modern design and Vercel deployment.",
    longDescription:
      "A professional multi-page business website built for a real client. Features a clean corporate design, service showcase, contact forms, responsive layouts, and production deployment on Vercel. Demonstrates client-facing development skills.",
    category: ["Web"],
    tags: ["HTML", "CSS", "JavaScript", "Vercel", "Responsive Design"],
    github: "https://github.com/noorfatima018/Aftab_Brothers",
    live: "https://aftabbrothers.vercel.app/",
    image: "/aftab-brothers.png",
    status: "Completed",
    difficulty: "Beginner",
    timeline: "2026",
    features: [
      "Professional multi-page layout",
      "Service showcase section",
      "Responsive mobile design",
      "Contact form integration",
      "SEO optimized",
      "Deployed on Vercel",
    ],
    featured: false,
  },
  {
    id: "lush-blush",
    title: "LushBlush Makeup Website",
    description:
      "A beautifully designed modern e-commerce platform for makeup and beauty products with elegant UI.",
    longDescription:
      "A stunning e-commerce website for a makeup and beauty brand. Features elegant product showcases, category browsing, a wishlist system, and a premium visual design that reflects the beauty industry aesthetic.",
    category: ["Web"],
    tags: ["HTML", "CSS", "JavaScript", "E-Commerce", "UI/UX"],
    github: "https://github.com/noorfatima018/LushBlush-makeup-website",
    image: "/lush_blush.png",
    status: "Completed",
    difficulty: "Beginner",
    timeline: "2025",
    features: [
      "Elegant product showcase",
      "Category browsing",
      "Wishlist functionality",
      "Shopping cart",
      "Premium beauty-focused UI",
      "Mobile responsive",
    ],
    featured: false,
  },
  {
    id: "guess-number-game",
    title: "Guess the Number Game",
    description:
      "A fun browser-based number guessing game with scoring, animations, and difficulty levels.",
    longDescription:
      "A classic number guessing game reimagined with modern web technologies. Features dynamic difficulty levels, animated feedback, score tracking, and a clean minimalist interface — great demonstration of core JavaScript skills.",
    category: ["Web"],
    tags: ["JavaScript", "HTML", "CSS", "Game Dev"],
    github: "https://github.com/noorfatima018/guess-number-game",
    image: "/guess_game.png",
    status: "Completed",
    difficulty: "Beginner",
    timeline: "2025",
    features: [
      "Multiple difficulty levels",
      "Animated win/lose feedback",
      "Score tracking",
      "Clean minimal UI",
      "Deployed on GitHub Pages",
    ],
    featured: false,
  },
];

export type SkillCategory = {
  category: string;
  icon: string;
  color: string;
  skills: { name: string; level: number; icon?: string }[];
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Mobile Development",
    icon: "mobile",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 88 },
      { name: "React Native", level: 60 },
    ],
  },
  {
    category: "Frontend",
    icon: "layout",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 78 },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Python", level: 85 },
      { name: "Flask", level: 78 },
      { name: "Node.js", level: 65 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    category: "AI & ML",
    icon: "cpu",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "TensorFlow", level: 75 },
      { name: "CNN Architecture", level: 70 },
      { name: "SVM / KNN", level: 72 },
      { name: "Groq AI", level: 68 },
      { name: "Gemini AI", level: 70 },
    ],
  },
  {
    category: "Database",
    icon: "database",
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "Firebase", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "Supabase", level: 65 },
    ],
  },
  {
    category: "Design & Tools",
    icon: "tool",
    color: "from-teal-500 to-cyan-500",
    skills: [
      { name: "Figma", level: 80 },
      { name: "UI/UX Design", level: 78 },
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 95 },
    ],
  },
];

export const TECH_STACK = [
  { name: "Flutter", icon: "SiFlutter", color: "#02569B" },
  { name: "React", icon: "SiReact", color: "#61DAFB" },
  { name: "Next.js", icon: "SiNextdotjs", color: "#000000" },
  { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
  { name: "Python", icon: "SiPython", color: "#3776AB" },
  { name: "TensorFlow", icon: "SiTensorflow", color: "#FF6F00" },
  { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" },
  { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
  { name: "Figma", icon: "SiFigma", color: "#F24E1E" },
  { name: "Flask", icon: "SiFlask", color: "#000000" },
  { name: "Dart", icon: "SiDart", color: "#0175C2" },
  { name: "Git", icon: "SiGit", color: "#F05032" },
  { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
  { name: "Supabase", icon: "SiSupabase", color: "#3ECF8E" },
  { name: "Vercel", icon: "SiVercel", color: "#000000" },
];

export const EXPERIENCE = [
  {
    id: "portfolio-dev",
    role: "Mobile & Web Developer",
    company: "Personal Projects",
    companyUrl: "https://github.com/noorfatima018",
    duration: "2024 — Present",
    location: "Pakistan",
    description:
      "Building and shipping 10+ projects spanning AI/ML systems, Flutter mobile apps, and full-stack web applications. Focused on clean code, premium UX, and real-world impact.",
    tags: ["Flutter", "AI/ML", "React", "Python", "TensorFlow"],
    type: "Projects",
  },
];

export const EDUCATION = [
  {
    id: "bscs",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Engineering & Technology",
    institutionShort: "UET",
    duration: "2023 — 2027",
    location: "Pakistan",
    description:
      "Studying core computer science fundamentals including algorithms, data structures, machine learning, software engineering, and mobile application development.",
    gpa: "3.5+",
    courses: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Mobile Application Development",
      "Software Engineering",
      "Database Systems",
      "Computer Networks",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    id: "google-ai-professional",
    title: "Google AI Professional Certificate",
    issuer: "Coursera",
    date: "Jul 2026",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/C8W294NKSKTZ",
    tags: ["Google", "AI", "Professional"],
  },
  {
    id: "google-ai-essentials",
    title: "Google AI Essentials Specialization",
    issuer: "Coursera",
    date: "Jul 2026",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/2DW83MA40776",
    tags: ["Google", "AI", "Essentials"],
  },
  {
    id: "flutter-dev",
    title: "Flutter Development",
    issuer: "Udemy",
    date: "2025",
    credentialUrl: "#",
    tags: ["Flutter", "Dart", "Mobile"],
  },
  {
    id: "ml-python",
    title: "Machine Learning with Python",
    issuer: "Coursera",
    date: "2025",
    credentialUrl: "#",
    tags: ["Python", "ML", "TensorFlow"],
  },
  {
    id: "react-nextjs",
    title: "React & Next.js Complete Guide",
    issuer: "Udemy",
    date: "2025",
    credentialUrl: "#",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design Fundamentals",
    issuer: "Google",
    date: "2024",
    credentialUrl: "#",
    tags: ["Figma", "UI/UX", "Design"],
  },
  {
    id: "firebase",
    title: "Firebase & Cloud Fundamentals",
    issuer: "Firebase",
    date: "2025",
    credentialUrl: "#",
    tags: ["Firebase", "Cloud", "NoSQL"],
  },
];


export const STATS = [
  { label: "Projects Completed", value: 10, suffix: "+", icon: "rocket" },
  { label: "Technologies Mastered", value: 15, suffix: "+", icon: "zap" },
  { label: "GitHub Commits", value: 200, suffix: "+", icon: "code" },
  { label: "Years of Learning", value: 2, suffix: "+", icon: "book" },
];

export const FAQS = [
  {
    q: "What types of projects have you built?",
    a: "I've built Flutter mobile apps, React/Next.js web applications, Python/AI backend systems, and full-stack projects including AI crop disease detection, quiz apps, e-commerce platforms, and more.",
  },
  {
    q: "Which tech stack do you prefer for mobile apps?",
    a: "Flutter is my go-to for cross-platform mobile development — it delivers native performance on both iOS and Android with a single codebase and beautiful UI capabilities.",
  },
  {
    q: "How do you approach AI/ML projects?",
    a: "I typically start with data analysis and model selection, then train and evaluate models (TensorFlow, CNN, SVM/KNN), integrate them via Flask APIs, and connect to a frontend for a seamless user experience.",
  },
  {
    q: "What is your development process?",
    a: "I follow a structured approach: Planning → Design → Development → Testing → Deployment. I focus on clean, maintainable code and premium user experiences throughout.",
  },
  {
    q: "Can you integrate AI into existing applications?",
    a: "Absolutely! I've integrated Groq AI, Gemini AI, TensorFlow, and custom ML models into both Flutter apps and web applications.",
  },
  {
    q: "What makes your work stand out?",
    a: "I combine strong technical skills with a genuine eye for design. I don't just write code that works — I craft experiences that look beautiful, feel smooth, and perform exceptionally well.",
  },
];

export const TESTIMONIALS: never[] = [];
