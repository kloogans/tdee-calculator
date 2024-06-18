interface MacronutrientDistribution {
  proteinPercentage: number;
  fatPercentage: number;
  carbPercentage: number;
}

interface MacronutrientValues {
  proteinGrams: number;
  fatGrams: number;
  carbGrams: number;
}

export function calculateMacronutrients(
  calories: number,
  distribution: MacronutrientDistribution
): MacronutrientValues {
  const { proteinPercentage, fatPercentage, carbPercentage } = distribution;

  const proteinCalories = (calories * proteinPercentage) / 100;
  const fatCalories = (calories * fatPercentage) / 100;
  const carbCalories = (calories * carbPercentage) / 100;

  const proteinGrams = Math.round(proteinCalories / 4);
  const fatGrams = Math.round(fatCalories / 9);
  const carbGrams = Math.round(carbCalories / 4);

  return {
    proteinGrams,
    fatGrams,
    carbGrams,
  };
}
