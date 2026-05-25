// ========================================
// FILE: src/data/wallet/transactions.ts
// ========================================

import { CallItem, Transaction } from "@/types/wallet";

export const walletBalance = 12580;

export const transactions: Transaction[] = [
  {
    id: 1,
    title: "Money Added via UPI",
    date: "25 May 2026",
    amount: 500,
    type: "credit",
  },
  {
    id: 2,
    title: "Recharge Payment",
    date: "24 May 2026",
    amount: 199,
    type: "debit",
  },
  {
    id: 3,
    title: "Referral Reward",
    date: "23 May 2026",
    amount: 120,
    type: "credit",
  },
  {
    id: 4,
    title: "Dukaan Purchase",
    date: "22 May 2026",
    amount: 350,
    type: "debit",
  },
  {
    id: 5,
    title: "Cashback Received",
    date: "21 May 2026",
    amount: 80,
    type: "credit",
  },
];

export const callHistory: CallItem[] = [
  {
    id: 1,
    name: "Krishi Sahayata",
    date: "25 May 2026",
    duration: "08m 12s",
    type: "Outgoing",
  },
  {
    id: 2,
    name: "Swasthya Helpline",
    date: "24 May 2026",
    duration: "04m 42s",
    type: "Incoming",
  },
  {
    id: 3,
    name: "Naukri Support",
    date: "23 May 2026",
    duration: "11m 02s",
    type: "Outgoing",
  },
];