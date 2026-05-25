export interface GovtJob {
  id: number;
  department: string;
  post: string;
  vacancies: number;
  eligibility: string;
  lastDate: string;
  salary: string;
  category: string;
  applyLink: string;
  upcoming?: boolean;
}

export const govtJobs: GovtJob[] = [
  {
    id: 1,
    department: "Indian Railways",
    post: "RRB Group D",
    vacancies: 32000,
    eligibility: "10th Pass",
    lastDate: "2026-06-02",
    salary: "₹22,000 - ₹69,000",
    category: "Railway",
    applyLink: "https://indianrailways.gov.in",
  },

  {
    id: 2,
    department: "UP Police",
    post: "Constable भर्ती",
    vacancies: 60244,
    eligibility: "12th Pass",
    lastDate: "2026-05-30",
    salary: "₹25,000 - ₹81,000",
    category: "Police",
    applyLink: "https://uppbpb.gov.in",
  },

  {
    id: 3,
    department: "SBI",
    post: "Clerk Recruitment",
    vacancies: 8500,
    eligibility: "Graduate",
    lastDate: "2026-06-15",
    salary: "₹29,000 - ₹85,000",
    category: "Bank",
    applyLink: "https://sbi.co.in",
  },

  {
    id: 4,
    department: "Indian Army",
    post: "Army GD",
    vacancies: 12000,
    eligibility: "12th Pass",
    lastDate: "2026-06-18",
    salary: "₹30,000 - ₹90,000",
    category: "Army",
    applyLink: "https://joinindianarmy.nic.in",
  },

  {
    id: 5,
    department: "KVS",
    post: "Teaching Staff",
    vacancies: 9000,
    eligibility: "Graduate",
    lastDate: "2026-06-20",
    salary: "₹44,000 - ₹1,42,000",
    category: "Teaching",
    applyLink: "https://kvsangathan.nic.in",
  },

  {
    id: 6,
    department: "SSC",
    post: "CGL 2026",
    vacancies: 17727,
    eligibility: "Graduate",
    lastDate: "2026-07-01",
    salary: "₹35,000 - ₹1,12,000",
    category: "Others",
    applyLink: "https://ssc.gov.in",
    upcoming: true,
  },
];