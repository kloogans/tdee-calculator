interface MuscularPotentialUserInfo {
  heightInches: number;
}

interface MuscularPotentialResults {
  at5PercentBodyFat: number;
  at10PercentBodyFat: number;
  at15PercentBodyFat: number;
}

export function calculateMaxMuscularPotential(
  userInfo: MuscularPotentialUserInfo
): MuscularPotentialResults {
  const { heightInches } = userInfo;

  // Martin Berkhan's formula uses a base weight at 5% body fat for a specific height and adjusts based on the actual height
  const baseWeightAt5Percent = 5 * 2.20462; // Convert kg to lbs
  const heightReference = 170 / 2.54; // Convert cm to inches (5 feet 7 inches is the reference height, approximately 170 cm)
  const weightAdjustmentPerInch = 2.3; // Approximate adjustment per inch

  // Calculate the weight adjustment based on height difference from the reference
  const heightDifference = heightInches - heightReference;
  const weightAdjustment = heightDifference * weightAdjustmentPerInch;

  const at5PercentBodyFat = baseWeightAt5Percent + weightAdjustment;
  const at10PercentBodyFat = at5PercentBodyFat * 1.1; // 10% more than 5% body fat
  const at15PercentBodyFat = at5PercentBodyFat * 1.2; // 20% more than 5% body fat

  return {
    at5PercentBodyFat: Math.round(at5PercentBodyFat),
    at10PercentBodyFat: Math.round(at10PercentBodyFat),
    at15PercentBodyFat: Math.round(at15PercentBodyFat),
  };
}
