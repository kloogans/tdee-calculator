import { UserInfo } from "@/types";
import { calculateBMI } from "@/utils/calculateBMI";
import { calculateIdealWeight } from "@/utils/calculateIdealWeight";
import { calculateMaxMuscularPotential } from "@/utils/calculateMaximumMuscularPotential";
import { calculateMacronutrients } from "@/utils/calculateRecommendedMacronutrients";
import { calculateTDEE } from "@/utils/calculateTDEE";
import { useState } from "react";
import toast from "react-hot-toast";

const MACRO_NUTRIENT_DISTRIBUTION = {
  lowCarb: {
    proteinPercentage: 40,
    fatPercentage: 40,
    carbPercentage: 20,
  },

  moderateCarb: {
    proteinPercentage: 30,
    fatPercentage: 35,
    carbPercentage: 35,
  },

  highCarb: {
    proteinPercentage: 30,
    fatPercentage: 20,
    carbPercentage: 50,
  },
};

interface IncomingFormData {
  age: string;
  weight: string;
  heightFeet?: string;
  heightInches?: string;
  heightCm?: string;
  exerciseFrequency: UserInfo["exerciseFrequency"];
  unit: UserInfo["unit"];
  sex: UserInfo["sex"];
  bodyFatPercentage?: string;
}

export default function useCalculations() {
  const [unit, setUnit] = useState<UserInfo["unit"]>("imperial");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [results, setResults] = useState({});

  const handleCalculateTDEE = (userInfo: UserInfo) => {
    const info = { ...userInfo };

    const data = {
      ...userInfo,
      weight: info.weight.kg,
      height: info.height.cm,
    };

    return calculateTDEE(data);
  };

  const handleCalculateIdealWeight = (userInfo: UserInfo) => {
    const info = { ...userInfo };

    let recommendedWeight = calculateIdealWeight({
      sex: info.sex,
      heightInches: info.height.fullInches as number,
    });

    if (userInfo.unit === "metric") {
      recommendedWeight = {
        hamwi: Math.round(recommendedWeight.hamwi / 2.20462),
        devine: Math.round(recommendedWeight.devine / 2.20462),
        robinson: Math.round(recommendedWeight.robinson / 2.20462),
        miller: Math.round(recommendedWeight.miller / 2.20462),
        lowestWeight: Math.round(recommendedWeight.lowestWeight / 2.20462),
        highestWeight: Math.round(recommendedWeight.highestWeight / 2.20462),
      };
    }

    return recommendedWeight;
  };

  const handleCalculateMuscularPotential = (userInfo: UserInfo) => {
    const info = { ...userInfo };

    let muscularPotential = calculateMaxMuscularPotential({
      heightInches: info.height.fullInches as number,
    });

    if (userInfo.unit === "metric") {
      muscularPotential = {
        at5PercentBodyFat: Math.round(
          muscularPotential.at5PercentBodyFat / 2.20462
        ),
        at10PercentBodyFat: Math.round(
          muscularPotential.at10PercentBodyFat / 2.20462
        ),
        at15PercentBodyFat: Math.round(
          muscularPotential.at15PercentBodyFat / 2.20462
        ),
      };
    }

    return muscularPotential;
  };

  const handleCalculateMacronutrients = (TDEE: number) => {
    const macroNutrientsForMaintenance = {
      lowCarb: calculateMacronutrients(
        TDEE,
        MACRO_NUTRIENT_DISTRIBUTION.lowCarb
      ),
      moderateCarb: calculateMacronutrients(
        TDEE,
        MACRO_NUTRIENT_DISTRIBUTION.moderateCarb
      ),
      highCarb: calculateMacronutrients(
        TDEE,
        MACRO_NUTRIENT_DISTRIBUTION.highCarb
      ),
    };
    const macroNutrientsForCutting = {
      lowCarb: calculateMacronutrients(
        TDEE - 500,
        MACRO_NUTRIENT_DISTRIBUTION.lowCarb
      ),
      moderateCarb: calculateMacronutrients(
        TDEE - 500,
        MACRO_NUTRIENT_DISTRIBUTION.moderateCarb
      ),
      highCarb: calculateMacronutrients(
        TDEE - 500,
        MACRO_NUTRIENT_DISTRIBUTION.highCarb
      ),
    };
    const macroNutrientsForBulking = {
      lowCarb: calculateMacronutrients(
        TDEE + 500,
        MACRO_NUTRIENT_DISTRIBUTION.lowCarb
      ),
      moderateCarb: calculateMacronutrients(
        TDEE + 500,
        MACRO_NUTRIENT_DISTRIBUTION.moderateCarb
      ),
      highCarb: calculateMacronutrients(
        TDEE + 500,
        MACRO_NUTRIENT_DISTRIBUTION.highCarb
      ),
    };

    const macronutrientsData = {
      maintenance: macroNutrientsForMaintenance,
      cutting: macroNutrientsForCutting,
      bulking: macroNutrientsForBulking,
    };

    return macronutrientsData;
  };

  const handleCalculateBMI = (userInfo: UserInfo) => {
    let BMI = 0;

    BMI = calculateBMI({
      weight: userInfo.weight.pounds,
      height: userInfo.height.fullInches as number,
    });

    return Number(BMI.toFixed(1));
  };

  const handleFormValidation = (data: IncomingFormData) => {
    const requiredFields = ["age", "weight", "exerciseFrequency", "unit"];

    if (unit === "imperial") {
      requiredFields.push("heightFeet", "heightInches");
    } else {
      requiredFields.push("heightCm");
    }

    // @ts-ignore
    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length) {
      return {
        success: false,
        message: `Please fill in the required fields.`,
      };
    } else {
      return {
        success: true,
        message: "",
      };
    }
  };

  const handleFormatData = (data: IncomingFormData) => {
    const formattedData = {
      ...data,
      age: Number(data["age"]),
      height: {
        feet: Number(data["heightFeet"]) || 0,
        inches: Number(data["heightInches"]) || 0,
        cm: Number(data["heightCm"]) || 0,
        fullInches: 0,
      },
      weight: {
        pounds: Number(data["weight"]) || 0,
        kg: Number(data["weight"]) || 0,
      },
      bodyFatPercentage: Number(data["bodyFatPercentage"]) || undefined,
    };

    if (data.unit === "imperial") {
      const heightInInches =
        formattedData.height.feet! * 12 + formattedData.height.inches!;
      const heightInCm = Math.round(heightInInches * 2.54);
      const weightInKg = Math.round(formattedData.weight.pounds * 0.453592);
      formattedData.height = {
        ...formattedData.height,
        cm: heightInCm,
        fullInches: heightInInches,
      };
      formattedData.weight = {
        pounds: formattedData.weight.pounds,
        kg: weightInKg,
      };
    } else {
      const weightInPounds = Math.round(formattedData.weight.kg * 2.20462);
      const heightInInches = Math.round(formattedData.height.cm / 2.54);
      const heightInFeet = Math.floor(heightInInches / 12);
      const heightInRemainingInches = Math.round(heightInInches % 12);
      formattedData.weight = {
        pounds: weightInPounds,
        kg: formattedData.weight.kg,
      };
      formattedData.height = {
        ...formattedData.height,
        feet: heightInFeet,
        inches: heightInRemainingInches,
        cm: formattedData.height.cm,
        fullInches: heightInInches,
      };
    }

    delete formattedData["heightFeet"];
    delete formattedData["heightInches"];
    delete formattedData["heightCm"];

    return formattedData;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // @ts-ignore
    const validation = handleFormValidation(data);
    if (!validation.success) {
      toast.error(validation.message);
      return;
    }
    // @ts-ignore
    const formattedData = handleFormatData(data);

    const TDEE = handleCalculateTDEE(formattedData);
    const recommendedWeight = handleCalculateIdealWeight(formattedData);
    const muscularPotential = handleCalculateMuscularPotential(formattedData);
    const macronutrientsData = handleCalculateMacronutrients(
      // @ts-ignore
      TDEE[formattedData.exerciseFrequency]
    );
    const BMI = handleCalculateBMI(formattedData);

    const results = {
      TDEE,
      recommendedWeight,
      muscularPotential,
      macronutrientsData,
      BMI,
      activityLevel: formattedData.exerciseFrequency,
      unit: formattedData.unit,
      bodyfat: formattedData.bodyFatPercentage,
    };

    setResults(results);
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setResults({});
    setFormSubmitted(false);

    // scroll to top
    window.scrollTo({ top: 0 });
  };

  return {
    handleSubmit,
    setUnit,
    handleReset,
    unit,
    formSubmitted,
    results,
  };
}
