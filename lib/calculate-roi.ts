import type { RoiResult, RoiSolutionType } from "@/types/roi";

export function calculateROI(
  selectedSolutionType: RoiSolutionType,
  hoursWasted: number,
  hourlyCost: number
): RoiResult {
  let projectCost = 11500;
  if (selectedSolutionType === "web") projectCost = 6500;
  if (selectedSolutionType === "bi") projectCost = 14500;
  if (selectedSolutionType === "custom") projectCost = 28000;

  const hoursSaved = Math.round(hoursWasted * 0.75);
  const monthlySavings = hoursSaved * hourlyCost;
  const annualSavings = monthlySavings * 12;

  const paybackMonths = monthlySavings > 0 ? (projectCost / monthlySavings).toFixed(1) : "0.0";
  const ROI = projectCost > 0 ? Math.round(((annualSavings * 2 - projectCost) / projectCost) * 100) : 0;

  return {
    projectCost,
    hoursSaved,
    monthlySavings,
    annualSavings,
    paybackMonths,
    ROI,
  };
}
