export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  postedDate: string;
  category: string;
  featured?: boolean;
}

export interface JobCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
}
