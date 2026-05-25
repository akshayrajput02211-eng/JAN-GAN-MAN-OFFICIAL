// ========================================
// FILE: src/types/wallet/index.ts
// ========================================

export type TransactionType = "credit" | "debit";

export interface Transaction {
  id: number;
  title: string;
  date: string;
  amount: number;
  type: TransactionType;
}

export interface CallItem {
  id: number;
  name: string;
  date: string;
  duration: string;
  type: "Incoming" | "Outgoing";
}