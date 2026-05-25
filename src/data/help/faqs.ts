// ========================================
// FILE: src/data/help/faqs.ts
// ========================================

export const faqData: Record<
  string,
  {
    id: number;
    question: string;
    answer: string;
  }[]
> = {
  // ========================================
  // NAUKRI
  // ========================================

  naukri: [
    {
      id: 1,
      question:
        "Naukri ke liye apply kaise karein?",
      answer:
        "App mein Naukri section open karke available jobs par apply kar sakte hain.",
    },
    {
      id: 2,
      question:
        "Resume upload kaise karein?",
      answer:
        "Profile settings mein jaakar resume upload option use karein.",
    },
    {
      id: 3,
      question:
        "Job alert kaise enable karein?",
      answer:
        "Notification settings mein jaakar alerts enable karein.",
    },
    {
      id: 4,
      question:
        "Interview schedule kaha dikhega?",
      answer:
        "Aapke dashboard aur notifications section mein.",
    },
    {
      id: 5,
      question:
        "Government jobs available hain?",
      answer:
        "Haan, Sarkari jobs regularly update hoti rehti hain.",
    },
  ],

  // ========================================
  // DUKAAN
  // ========================================

  dukaan: [
    {
      id: 1,
      question:
        "Dukaan kaise register karein?",
      answer:
        "Dukaan section mein business details submit karein.",
    },
    {
      id: 2,
      question:
        "Products upload kaise karein?",
      answer:
        "Seller dashboard se products add kar sakte hain.",
    },
    {
      id: 3,
      question:
        "Payment settlement kitne din mein hota hai?",
      answer:
        "Usually 2-3 working days mein settlement ho jata hai.",
    },
    {
      id: 4,
      question:
        "Order tracking available hai?",
      answer:
        "Haan, har order ka live tracking available hai.",
    },
    {
      id: 5,
      question:
        "Return policy kya hai?",
      answer:
        "Products ke hisaab se different return policy apply hoti hai.",
    },
  ],

  // ========================================
  // SARKARI SEVA
  // ========================================

  "sarkari-seva": [
    {
      id: 1,
      question:
        "Sarkari yojna kaise check karein?",
      answer:
        "Sarkari Seva section mein state aur category select karke yojna details dekh sakte hain.",
    },
    {
      id: 2,
      question:
        "Online certificate apply kaise karein?",
      answer:
        "Birth, caste aur income certificate online apply kar sakte hain.",
    },
    {
      id: 3,
      question:
        "Document upload ka format kya hai?",
      answer:
        "PDF, JPG aur PNG formats supported hain.",
    },
    {
      id: 4,
      question:
        "Application status kaha dikhega?",
      answer:
        "Dashboard ke Sarkari Applications section mein.",
    },
    {
      id: 5,
      question:
        "CSC support available hai?",
      answer:
        "Haan, nearby CSC aur support centers listed hain.",
    },
  ],

  // ========================================
  // SWASTHYA
  // ========================================

  swasthya: [
    {
      id: 1,
      question:
        "Doctor consultation kaise book karein?",
      answer:
        "Swasthya section mein doctors list se booking karein.",
    },
    {
      id: 2,
      question:
        "Health reports kaha dikhenge?",
      answer:
        "Profile ke Health Records section mein.",
    },
    {
      id: 3,
      question:
        "Emergency support available hai?",
      answer:
        "Haan, 24x7 emergency helpline available hai.",
    },
    {
      id: 4,
      question:
        "Medicine delivery available hai?",
      answer:
        "Selected areas mein medicine delivery available hai.",
    },
    {
      id: 5,
      question:
        "Online consultation secure hai?",
      answer:
        "Haan, sabhi consultations encrypted aur secure hain.",
    },
  ],

  // ========================================
  // SHIKSHA
  // ========================================

  shiksha: [
    {
      id: 1,
      question:
        "Online classes kaha milengi?",
      answer:
        "Shiksha dashboard mein live aur recorded classes available hain.",
    },
    {
      id: 2,
      question:
        "Notes download kaise karein?",
      answer:
        "Course details ke andar notes download option available hai.",
    },
    {
      id: 3,
      question:
        "Mock tests available hain?",
      answer:
        "Haan, exams aur practice ke liye mock tests available hain.",
    },
    {
      id: 4,
      question:
        "Certificate milega?",
      answer:
        "Course completion ke baad digital certificate diya jayega.",
    },
    {
      id: 5,
      question:
        "Live doubt solving available hai?",
      answer:
        "Haan, live doubt support aur mentor guidance available hai.",
    },
  ],

  // ========================================
  // KRISHI
  // ========================================

  krishi: [
    {
      id: 1,
      question:
        "Mandi prices kaha dikhenge?",
      answer:
        "Krishi dashboard mein live mandi rates available hain.",
    },
    {
      id: 2,
      question:
        "Weather updates milenge?",
      answer:
        "Haan, daily weather alerts aur rainfall predictions milenge.",
    },
    {
      id: 3,
      question:
        "Fasal insurance kaise karein?",
      answer:
        "Krishi section mein insurance partner options available hain.",
    },
    {
      id: 4,
      question:
        "Expert se baat kaise karein?",
      answer:
        "AI Sahayak aur expert chat dono available hain.",
    },
    {
      id: 5,
      question:
        "Loan support available hai?",
      answer:
        "Haan, agriculture loan assistance bhi available hai.",
    },
  ],

  // ========================================
  // SURAKSHA
  // ========================================

  suraksha: [
    {
      id: 1,
      question:
        "Emergency helpline kaha milegi?",
      answer:
        "Suraksha section mein emergency contacts available hain.",
    },
    {
      id: 2,
      question:
        "Women safety support available hai?",
      answer:
        "Haan, women safety aur SOS features available hain.",
    },
    {
      id: 3,
      question:
        "Cyber fraud report kaise karein?",
      answer:
        "Cyber complaint directly app ke through submit kar sakte hain.",
    },
    {
      id: 4,
      question:
        "SOS alert kaise use karein?",
      answer:
        "Emergency button press karke SOS alert send kar sakte hain.",
    },
    {
      id: 5,
      question:
        "Police support available hai?",
      answer:
        "Nearby police station aur helpline details available hain.",
    },
  ],

  // ========================================
  // AI SAHAYAK
  // ========================================

  ai: [
    {
      id: 1,
      question:
        "AI Sahayak kya karta hai?",
      answer:
        "AI Sahayak jobs, farming, education aur government services mein help karta hai.",
    },
    {
      id: 2,
      question:
        "AI chatbot Hindi mein available hai?",
      answer:
        "Haan, AI chatbot Hindi aur regional languages support karta hai.",
    },
    {
      id: 3,
      question:
        "Voice support available hai?",
      answer:
        "Haan, voice input aur AI voice response available hai.",
    },
    {
      id: 4,
      question:
        "AI farming advice deta hai?",
      answer:
        "Haan, crop aur weather based smart farming suggestions milte hain.",
    },
    {
      id: 5,
      question:
        "AI free hai ya paid?",
      answer:
        "Basic AI support free hai, advanced features premium ho sakte hain.",
    },
  ],

  // ========================================
  // ACCOUNT
  // ========================================

  account: [
    {
      id: 1,
      question:
        "Password reset kaise karein?",
      answer:
        "Forgot password option use karke reset karein.",
    },
    {
      id: 2,
      question:
        "Mobile number update kaise karein?",
      answer:
        "Account settings mein mobile number change kar sakte hain.",
    },
    {
      id: 3,
      question:
        "KYC complete kaise karein?",
      answer:
        "PAN/Aadhaar upload karke KYC complete karein.",
    },
    {
      id: 4,
      question:
        "Account delete kaise karein?",
      answer:
        "Support team ko request bhejni hogi.",
    },
    {
      id: 5,
      question:
        "OTP nahi aa raha hai?",
      answer:
        "Network check karein ya resend OTP button use karein.",
    },
  ],

  // ========================================
  // PAYMENT
  // ========================================

  payment: [
    {
      id: 1,
      question:
        "Payment failed ho gaya?",
      answer:
        "Paise 5-7 working days mein refund ho jayenge.",
    },
    {
      id: 2,
      question:
        "UPI support available hai?",
      answer:
        "Haan, sabhi major UPI apps supported hain.",
    },
    {
      id: 3,
      question:
        "Transaction history kaha milegi?",
      answer:
        "Wallet aur payments section mein.",
    },
    {
      id: 4,
      question:
        "Cashback kab milega?",
      answer:
        "Offer ke according cashback process hota hai.",
    },
    {
      id: 5,
      question:
        "Auto debit kaise band karein?",
      answer:
        "Subscription settings mein jaakar disable karein.",
    },
  ],
};