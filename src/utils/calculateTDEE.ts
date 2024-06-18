interface UserInfo {
  age: number;
  sex: "male" | "female";
  weight: number; // in kg
  height: number; // in cm
  exerciseFrequency:
    | "sedentary"
    | "light"
    | "moderate"
    | "active"
    | "veryActive";
  bodyFatPercentage?: number; // optional
}

interface TDEEResponse {
  basalMetabolicRate: number;
  sedentary: number;
  light: number;
  moderate: number;
  active: number;
  veryActive: number;
}

export function calculateTDEE(userInfo: UserInfo): TDEEResponse {
  const { age, sex, weight, height, exerciseFrequency, bodyFatPercentage } =
    userInfo;

  // Calculate Basal Metabolic Rate (BMR)
  let BMR: number;

  if (bodyFatPercentage !== undefined) {
    // Katch-McArdle Formula
    const leanBodyMass = weight * (1 - bodyFatPercentage / 100);
    BMR = 370 + 21.6 * leanBodyMass;
  } else {
    // Mifflin-St Jeor Formula
    if (sex === "male") {
      BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }
  }

  // Activity multipliers
  const activityMultipliers: { [key: string]: number } = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9,
  };

  const allTDEEs = {
    basalMetabolicRate: Math.floor(BMR),
    sedentary: Math.floor(BMR * activityMultipliers.sedentary),
    light: Math.floor(BMR * activityMultipliers.light),
    moderate: Math.floor(BMR * activityMultipliers.moderate),
    active: Math.floor(BMR * activityMultipliers.active),
    veryActive: Math.floor(BMR * activityMultipliers.veryActive),
  };

  return allTDEEs;
}
