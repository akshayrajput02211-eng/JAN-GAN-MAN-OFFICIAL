export type DocumentStatus = "ready" | "maybe" | "missing";

export interface DocumentItem {
  id: string;
  name: string;
  description: string;
  whereToGet: string;
  status: DocumentStatus;
}

export interface SchemeDocs {
  id: string;
  name: string;
  ministry: string;
  brief: string;
  documents: DocumentItem[];
}

export const schemes: SchemeDocs[] = [
  {
    id: "pm-kisan",
    name: "PM Kisan",
    ministry: "Ministry of Agriculture",
    brief:
      "Kisano ko financial support dene wali yojana jisme yearly assistance milti hai.",
    documents: [
      {
        id: "1",
        name: "Aadhaar Card",
        description: "Identity verification ke liye.",
        whereToGet: "Nearest Aadhaar Kendra",
        status: "ready",
      },
      {
        id: "2",
        name: "Bank Passbook",
        description: "DBT transfer ke liye bank details.",
        whereToGet: "Bank branch",
        status: "ready",
      },
      {
        id: "3",
        name: "Land Record",
        description: "Zameen ownership proof.",
        whereToGet: "Tehsil office",
        status: "maybe",
      },
      {
        id: "4",
        name: "Mobile Number",
        description: "OTP verification ke liye.",
        whereToGet: "Active SIM",
        status: "missing",
      },
    ],
  },

  {
    id: "ayushman",
    name: "Ayushman Bharat",
    ministry: "Ministry of Health",
    brief:
      "Free health insurance aur treatment support scheme.",
    documents: [
      {
        id: "1",
        name: "Aadhaar Card",
        description: "Identity verification.",
        whereToGet: "Aadhaar Center",
        status: "ready",
      },
      {
        id: "2",
        name: "Ration Card",
        description: "Family eligibility proof.",
        whereToGet: "CSC / Tehsil",
        status: "maybe",
      },
      {
        id: "3",
        name: "Mobile Number",
        description: "Login and OTP verification.",
        whereToGet: "Active SIM",
        status: "missing",
      },
    ],
  },

  {
    id: "pm-awas",
    name: "PM Awas Yojana",
    ministry: "Ministry of Housing",
    brief:
      "Ghar banane ke liye financial assistance.",
    documents: [
      {
        id: "1",
        name: "Income Certificate",
        description: "Eligibility income proof.",
        whereToGet: "Tehsil Office",
        status: "maybe",
      },
      {
        id: "2",
        name: "Aadhaar Card",
        description: "Identity proof.",
        whereToGet: "Aadhaar Kendra",
        status: "ready",
      },
      {
        id: "3",
        name: "Bank Account",
        description: "Subsidy transfer ke liye.",
        whereToGet: "Bank",
        status: "ready",
      },
    ],
  },

  {
    id: "ujjwala",
    name: "Ujjwala Yojana",
    ministry: "Ministry of Petroleum",
    brief:
      "Free LPG connection for eligible families.",
    documents: [
      {
        id: "1",
        name: "Ration Card",
        description: "Family proof.",
        whereToGet: "CSC Center",
        status: "ready",
      },
      {
        id: "2",
        name: "Passport Photo",
        description: "Application verification.",
        whereToGet: "Photo Studio",
        status: "maybe",
      },
      {
        id: "3",
        name: "Aadhaar Card",
        description: "Identity proof.",
        whereToGet: "Aadhaar Center",
        status: "ready",
      },
    ],
  },
];