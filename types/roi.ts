export type RoiSolutionType = "web" | "bi" | "automation" | "custom";

export interface RoiResult {
  projectCost: number;
  hoursSaved: number;
  monthlySavings: number;
  annualSavings: number;
  paybackMonths: string;
  ROI: number;
}
