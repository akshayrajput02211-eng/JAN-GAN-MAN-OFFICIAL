

export type Scheme = {
  id: number;
  name: string;
  ministry: string;
  benefit: string;
  applyLink: string;
  learnMore: string;
  eligibility: {
    roles?: string[];
    minAge?: number;
    maxIncome?: string[];
    categories?: string[];
  };
};

export const schemes: Scheme[] = [
  {
    id: 1,
    name: "PM Kisan Samman Nidhi",
    ministry: "Krishi Mantralaya",
    benefit: "Har saal ₹6000 ki sahayata kisanon ko.",
    applyLink: "#",
    learnMore: "#",
    eligibility: {
      roles: ["Kisan"],
      maxIncome: ["below-1", "1-3"],
    },
  },
  {
    id: 2,
    name: "Mahila Samman Savings Scheme",
    ministry: "Vitt Mantralaya",
    benefit: "Mahilaon ke liye special savings benefit.",
    applyLink: "#",
    learnMore: "#",
    eligibility: {
      roles: ["Mahila"],
    },
  },
  {
    id: 3,
    name: "PM Rozgar Yojana",
    ministry: "Skill Development Ministry",
    benefit: "Yuvaon ko rozgar aur training support.",
    applyLink: "#",
    learnMore: "#",
    eligibility: {
      roles: ["Yuva"],
      minAge: 18,
      maxIncome: ["below-1", "1-3", "3-6"],
    },
  },
  {
    id: 4,
    name: "National Old Age Pension",
    ministry: "Social Justice Ministry",
    benefit: "Buzdurg nagrikon ko pension sahayata.",
    applyLink: "#",
    learnMore: "#",
    eligibility: {
      roles: ["Buzdurg"],
      minAge: 60,
    },
  },
  {
    id: 5,
    name: "Divyang Scholarship Yojana",
    ministry: "Social Empowerment Ministry",
    benefit: "Divyang students ko scholarship aur support.",
    applyLink: "#",
    learnMore: "#",
    eligibility: {
      roles: ["Divyang"],
      categories: ["SC", "ST", "OBC"],
    },
  },
];