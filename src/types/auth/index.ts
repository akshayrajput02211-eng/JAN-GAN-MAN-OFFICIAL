export interface LoginFormData {
  phone: string;
  otp: string;
}

export interface SignupFormData {
  phone: string;
  name: string;
  gender: string;
  dob: string;
  state: string;
  district: string;
  village: string;
}

export interface AuthUser {
  id: string;
  name: string;
  phone: string;

  state?: string;
  district?: string;
  village?: string;
}

export interface OtpState {
  otp: string[];

  isOtpSent: boolean;

  isVerified: boolean;
}