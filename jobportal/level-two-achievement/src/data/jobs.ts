import { Job, JobCategory } from "@/types/job";

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "We're looking for an experienced Frontend Developer to join our growing team. You'll be working on cutting-edge web applications using React, TypeScript, and modern CSS frameworks.",
    requirements: [
      "5+ years of experience in frontend development",
      "Expert knowledge of React and TypeScript",
      "Experience with state management (Redux, Zustand)",
      "Strong understanding of responsive design",
      "Excellent problem-solving skills"
    ],
    responsibilities: [
      "Build and maintain high-quality web applications",
      "Collaborate with designers and backend developers",
      "Write clean, maintainable, and well-tested code",
      "Mentor junior developers",
      "Participate in code reviews"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work hours",
      "Remote work options",
      "Professional development budget"
    ],
    postedDate: "2024-01-15",
    category: "Technology",
    featured: true
  },
  {
    id: "2",
    title: "UX/UI Designer",
    company: "Creative Studio",
    location: "New York, NY",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description: "Join our design team to create beautiful and intuitive user experiences. You'll work closely with product managers and developers to bring ideas to life.",
    requirements: [
      "3+ years of UX/UI design experience",
      "Proficiency in Figma and Adobe Creative Suite",
      "Strong portfolio showcasing design projects",
      "Understanding of user research methods",
      "Excellent communication skills"
    ],
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and design systems",
      "Collaborate with cross-functional teams",
      "Present designs to stakeholders"
    ],
    benefits: [
      "Competitive compensation",
      "Health benefits",
      "Unlimited PTO",
      "Creative work environment",
      "Latest design tools and equipment"
    ],
    postedDate: "2024-01-14",
    category: "Design",
    featured: true
  },
  {
    id: "3",
    title: "Product Manager",
    company: "Innovation Labs",
    location: "Remote",
    type: "Remote",
    salary: "$130,000 - $170,000",
    description: "We're seeking a strategic Product Manager to lead our product development initiatives. You'll define the product roadmap and work with engineering to deliver exceptional products.",
    requirements: [
      "5+ years of product management experience",
      "Experience with agile methodologies",
      "Strong analytical and strategic thinking",
      "Excellent stakeholder management",
      "Technical background preferred"
    ],
    responsibilities: [
      "Define and execute product strategy",
      "Prioritize features based on business impact",
      "Work closely with engineering and design teams",
      "Analyze market trends and competition",
      "Communicate product vision to stakeholders"
    ],
    benefits: [
      "Fully remote position",
      "Competitive salary",
      "Stock options",
      "Home office stipend",
      "Annual team retreats"
    ],
    postedDate: "2024-01-13",
    category: "Product",
    featured: true
  },
  {
    id: "4",
    title: "Data Scientist",
    company: "DataDriven Inc",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $180,000",
    description: "Join our data science team to build ML models and derive insights from large datasets. You'll work on challenging problems in recommendation systems and predictive analytics.",
    requirements: [
      "MS/PhD in Computer Science, Statistics, or related field",
      "Experience with Python, SQL, and ML frameworks",
      "Strong statistical analysis skills",
      "Experience with big data technologies",
      "Published research is a plus"
    ],
    responsibilities: [
      "Develop and deploy machine learning models",
      "Analyze large datasets to extract insights",
      "Collaborate with product teams on data-driven features",
      "Present findings to technical and non-technical audiences",
      "Improve data infrastructure and pipelines"
    ],
    benefits: [
      "Top-tier compensation",
      "Research publication support",
      "Conference attendance",
      "Health and wellness programs",
      "401(k) matching"
    ],
    postedDate: "2024-01-12",
    category: "Technology",
    featured: false
  },
  {
    id: "5",
    title: "Marketing Manager",
    company: "GrowthHack Agency",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$80,000 - $110,000",
    description: "Lead our marketing efforts and drive growth through innovative campaigns. You'll manage a team of marketers and collaborate with sales to achieve revenue targets.",
    requirements: [
      "5+ years of marketing experience",
      "Experience with digital marketing and analytics",
      "Strong leadership and team management skills",
      "Excellent written and verbal communication",
      "B2B marketing experience preferred"
    ],
    responsibilities: [
      "Develop and execute marketing strategies",
      "Manage marketing budget and ROI",
      "Lead a team of marketing specialists",
      "Collaborate with sales and product teams",
      "Track and report on marketing metrics"
    ],
    benefits: [
      "Competitive salary plus bonus",
      "Health insurance",
      "Professional development",
      "Flexible schedule",
      "Dog-friendly office"
    ],
    postedDate: "2024-01-11",
    category: "Marketing",
    featured: false
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: "CloudScale Systems",
    location: "Denver, CO",
    type: "Contract",
    salary: "$70 - $90/hour",
    description: "We need an experienced DevOps Engineer to help us scale our infrastructure. You'll work on CI/CD pipelines, container orchestration, and cloud architecture.",
    requirements: [
      "4+ years of DevOps experience",
      "Expert knowledge of AWS/GCP/Azure",
      "Experience with Kubernetes and Docker",
      "Strong scripting skills (Python, Bash)",
      "Infrastructure as Code (Terraform, Pulumi)"
    ],
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage Kubernetes clusters",
      "Automate infrastructure provisioning",
      "Monitor system performance and reliability",
      "Implement security best practices"
    ],
    benefits: [
      "Competitive hourly rate",
      "Remote work",
      "Flexible hours",
      "Long-term contract potential",
      "Cutting-edge technology stack"
    ],
    postedDate: "2024-01-10",
    category: "Technology",
    featured: false
  }
];

export const categories: JobCategory[] = [
  { id: "1", name: "Technology", icon: "💻", count: 156 },
  { id: "2", name: "Design", icon: "🎨", count: 89 },
  { id: "3", name: "Marketing", icon: "📈", count: 67 },
  { id: "4", name: "Product", icon: "🚀", count: 45 },
  { id: "5", name: "Sales", icon: "💼", count: 78 },
  { id: "6", name: "Finance", icon: "💰", count: 34 },
  { id: "7", name: "Healthcare", icon: "🏥", count: 52 },
  { id: "8", name: "Education", icon: "📚", count: 41 },
];
