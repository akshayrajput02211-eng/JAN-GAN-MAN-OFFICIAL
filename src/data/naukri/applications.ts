// ========================================
// FILE: src/data/naukri/applications.ts
// ========================================

export type ApplicationStatus =
  | "Pending"
  | "Selected"
  | "Rejected"
  | "Interview";

export interface JobApplication {
  id: number;
  jobTitle: string;
  company: string;
  location: string;
  appliedDate: string;
  phone: string;
  status: ApplicationStatus;
}

export const applications: JobApplication[] = [
  {
    id: 1,
    jobTitle: "Delivery Boy",
    company: "QuickKart Pvt Ltd",
    location: "Patna, Bihar",
    appliedDate: "12 May 2026",
    phone: "+91 9876543210",
    status: "Pending",
  },
  {
    id: 2,
    jobTitle: "Computer Operator",
    company: "CSC Digital Seva",
    location: "Delhi",
    appliedDate: "10 May 2026",
    phone: "+91 9876543211",
    status: "Selected",
  },
  {
    id: 3,
    jobTitle: "Field Sales Executive",
    company: "Bharat Agro",
    location: "Noida",
    appliedDate: "8 May 2026",
    phone: "+91 9876543212",
    status: "Rejected",
  },
  {
    id: 4,
    jobTitle: "Warehouse Assistant",
    company: "Smart Logistics",
    location: "Ghaziabad",
    appliedDate: "14 May 2026",
    phone: "+91 9876543213",
    status: "Interview",
  },
];