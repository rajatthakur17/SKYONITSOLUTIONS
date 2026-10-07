// src/data/budget.ts
export const BUDGET_RANGES = [
  '₹25k – ₹50k INR',
  '₹50k – ₹1.5L INR',
  '₹1.5L – ₹5L+ INR',
  '$1,000 – $3,000 USD',
  '$3,000 – $10,000+ USD',
  'Flexible / Discussion needed',
] as const;

export type BudgetRange = typeof BUDGET_RANGES[number];
