export type ResumeSection =
  | "header"
  | "contact"
  | "education"
  | "experience"
  | "projects"
  | "skills"
  | "honors";

export type ResumeItemType = "title" | "heading" | "body" | "tag";

export interface ResumeItem {
  id: string;
  section: ResumeSection;
  type: ResumeItemType;
  text: string;
}

export const resumeData: ResumeItem[] = [
  {
    id: "name",
    section: "header",
    type: "title",
    text: "Vinayak Sharma",
  },
  //CONTACT
  {
    id: "phone",
    section: "contact",
    type: "body",
    text: "9530587264",
  },
  {
    id: "email",
    section: "contact",
    type: "body",
    text: "vinayaksharma4777@gmail.com",
  },
  {
    id: "github",
    section: "contact",
    type: "body",
    text: "github.com/vinayaksharma4777",
  },
  {
    id: "linkedIn",
    section: "contact",
    type: "body",
    text: "linkedin.com/in/vinayak-sharma4777",
  },
  //EDUCATION
  {
    id: "education-heading",
    section: "education",
    type: "heading",
    text: "Education",
  },
  {
    id: "education-degree",
    section: "education",
    type: "body",
    text: "Bachelor of Engineering in Computer Science and Engineering — Chitkara University",
  },
  {
    id: "education-gpa",
    section: "education",
    type: "tag",
    text: "CGPA: 8.97",
  },
  {
    id: "education-date",
    section: "education",
    type: "tag",
    text: "Expected 2028",
  },
  //EXPERIENCE / INVOLVEMENT
  {
    id: "experience-heading",
    section: "experience",
    type: "heading",
    text: "Leadership & Campus Involvement",
  },
  {
    id: "experience-role",
    section: "experience",
    type: "body",
    text: "Public Relations Coordinator — IEEE",
  },
  {
    id: "experience-date",
    section: "experience",
    type: "tag",
    text: "Chitkara University",
  },
  {
    id: "experience-1",
    section: "experience",
    type: "body",
    text: "Supported sponsor outreach, PR, and coordination for a national-level overnight hackathon at Chitkara University.",
  },
  {
    id: "experience-2",
    section: "experience",
    type: "body",
    text: "Web Coordinator at Institution of Engineers India (IEI), contributing web-development knowledge for digital initiatives.",
  },
  //PROJECTS
  {
    id: "projects-heading",
    section: "projects",
    type: "heading",
    text: "Projects",
  },
  {
    id: "project-neuroflux",
    section: "projects",
    type: "body",
    text: "NeuroFlux – AI Learning Assistant",
  },
  {
    id: "project-neuroflux-stack",
    section: "projects",
    type: "tag",
    text: "React.js • Node.js • Express.js • MongoDB • JWT • Socket.IO",
  },
  {
    id: "project-neuroflux-1",
    section: "projects",
    type: "body",
    text: "Full-stack AI-enabled learning platform for resource uploads, summaries, flashcards, and interactive study support.",
  },
  {
    id: "project-neuroflux-2",
    section: "projects",
    type: "body",
    text: "Engineered Express/MongoDB backend, JWT & Bcrypt auth, Multer upload workflows, Axios, and Socket.IO real-time features.",
  },
  {
    id: "project-grabitgo",
    section: "projects",
    type: "body",
    text: "GrabItGo – Quick-Commerce Web Application",
  },
  {
    id: "project-grabitgo-stack",
    section: "projects",
    type: "tag",
    text: "React.js • Node.js • Express.js • MongoDB • JWT • Multer",
  },
  {
    id: "project-grabitgo-1",
    section: "projects",
    type: "body",
    text: "Full-stack quick-commerce platform with auth, product discovery, shopping cart, address, and order workflows.",
  },
  {
    id: "project-grabitgo-2",
    section: "projects",
    type: "body",
    text: "Admin dashboard for product/category CRUD, JWT protected routes, email OTP, REST APIs, and Multer image uploads.",
  },
  {
    id: "project-vishwas",
    section: "projects",
    type: "body",
    text: "Vishwas – AI-Powered Scam and Fraud Detector",
  },
  {
    id: "project-vishwas-stack",
    section: "projects",
    type: "tag",
    text: "Backend Development • AI-assisted Fraud Detection • Codex 2.0",
  },
  {
    id: "project-vishwas-1",
    section: "projects",
    type: "body",
    text: "AI-powered scam detection solution for rural digital safety developed in a 5-member hackathon team at Codex 2.0.",
  },
  {
    id: "project-vishwas-2",
    section: "projects",
    type: "body",
    text: "Contributed backend workflows, risk-based fraud identification, and voice-accessible warning interfaces.",
  },
  //SKILLS
  {
    id: "skills-heading",
    section: "skills",
    type: "heading",
    text: "Tech Stack",
  },
  // Languages
  { id: "skill-java", section: "skills", type: "tag", text: "Java" },
  { id: "skill-python", section: "skills", type: "tag", text: "Python" },
  { id: "skill-javascript", section: "skills", type: "tag", text: "JavaScript" },
  { id: "skill-sql", section: "skills", type: "tag", text: "SQL" },
  // Frontend
  { id: "skill-react", section: "skills", type: "tag", text: "React.js" },
  { id: "skill-html5", section: "skills", type: "tag", text: "HTML5" },
  { id: "skill-css3", section: "skills", type: "tag", text: "CSS3" },
  { id: "skill-tailwindcss", section: "skills", type: "tag", text: "Tailwind CSS" },
  { id: "skill-axios", section: "skills", type: "tag", text: "Axios" },
  // Backend
  { id: "skill-nodejs", section: "skills", type: "tag", text: "Node.js" },
  { id: "skill-express", section: "skills", type: "tag", text: "Express.js" },
  { id: "skill-restapis", section: "skills", type: "tag", text: "REST APIs" },
  { id: "skill-jwt", section: "skills", type: "tag", text: "JWT" },
  { id: "skill-bcrypt", section: "skills", type: "tag", text: "Bcrypt" },
  { id: "skill-multer", section: "skills", type: "tag", text: "Multer" },
  { id: "skill-socketio", section: "skills", type: "tag", text: "Socket.IO" },
  // Databases
  { id: "skill-mongodb", section: "skills", type: "tag", text: "MongoDB" },
  { id: "skill-mysql", section: "skills", type: "tag", text: "MySQL" },
  { id: "skill-postgresql", section: "skills", type: "tag", text: "PostgreSQL" },
  // Tools
  { id: "skill-git", section: "skills", type: "tag", text: "Git" },
  { id: "skill-github", section: "skills", type: "tag", text: "GitHub" },
  { id: "skill-postman", section: "skills", type: "tag", text: "Postman" },
  { id: "skill-docker", section: "skills", type: "tag", text: "Docker" },
  { id: "skill-linux", section: "skills", type: "tag", text: "Linux" },
  { id: "skill-vscode", section: "skills", type: "tag", text: "VS Code" },
  // Core CS
  { id: "skill-dsa", section: "skills", type: "tag", text: "DSA" },
  { id: "skill-oop", section: "skills", type: "tag", text: "OOP" },
  { id: "skill-dbms", section: "skills", type: "tag", text: "DBMS" },
  { id: "skill-cn", section: "skills", type: "tag", text: "Computer Networks" },
  { id: "skill-os", section: "skills", type: "tag", text: "Operating Systems" },

  //HONORS & ACHIEVEMENTS
  {
    id: "honors-heading",
    section: "honors",
    type: "heading",
    text: "Honors & Achievements",
  },
  {
    id: "honor-1",
    section: "honors",
    type: "body",
    text: "Smart India Hackathon — Cleared the first round of the SIH selection process; active in college coding events.",
  },
  {
    id: "honor-2",
    section: "honors",
    type: "body",
    text: "AI & Smart Cities Research — Contributed to a research-oriented book chapter on AI-enabled urban systems.",
  },
  {
    id: "honor-3",
    section: "honors",
    type: "body",
    text: "Science Cup Winner — First place in Patiala inter-school science competition; Olympiad & debate participant.",
  },
  {
    id: "honor-4",
    section: "honors",
    type: "body",
    text: "Problem Solving — Solved ~100 DSA problems focused on Arrays, Two Pointers, Binary Search, Linked Lists, Trees.",
  },
];