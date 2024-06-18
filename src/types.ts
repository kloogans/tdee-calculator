export interface UserInfo {
  sex: "male" | "female";
  age: number;
  weight: {
    pounds: number;
    kg: number;
  };
  height: {
    feet: number;
    inches: number;
    cm: number;
    fullInches?: number;
  };
  exerciseFrequency:
    | "sedentary"
    | "light"
    | "moderate"
    | "active"
    | "veryActive";
  bodyFatPercentage?: number;
  unit: "imperial" | "metric";
}

interface TDEEData {
  basalMetabolicRate: number;
  sedentary: number;
  light: number;
  moderate: number;
  active: number;
  veryActive: number;
}

interface RecommendedWeight {
  hamwi: number;
  devine: number;
  robinson: number;
  miller: number;
  lowestWeight: number;
  highestWeight: number;
}

interface MuscularPotential {
  at5PercentBodyFat: number;
  at10PercentBodyFat: number;
  at15PercentBodyFat: number;
}

interface Macronutrients {
  proteinGrams: number;
  fatGrams: number;
  carbGrams: number;
}

interface MacroNutrientsTypes {
  lowCarb: Macronutrients;
  moderateCarb: Macronutrients;
  highCarb: Macronutrients;
}

interface MacronutrientsData {
  maintenance: MacroNutrientsTypes;
  cutting: MacroNutrientsTypes;
  bulking: MacroNutrientsTypes;
}

export interface Results {
  TDEE: TDEEData;
  recommendedWeight: RecommendedWeight;
  muscularPotential: MuscularPotential;
  macronutrientsData: MacronutrientsData;
  BMI: number;
  activityLevel: UserInfo["exerciseFrequency"];
  unit: UserInfo["unit"];
  bodyfat: UserInfo["bodyFatPercentage"];
}
