

export interface ComplaintCategory {
  id: string;
  title: string;
  icon: string;
}

export interface ComplaintData {
  type: string;
  description: string;
  date: string;
  time: string;
  location: string;
  contact: string;
  anonymous: boolean;
  evidence?: File | null;
}