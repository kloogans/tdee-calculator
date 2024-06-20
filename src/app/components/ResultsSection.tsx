"use client";
import { Results } from "@/types";
import { StatCard } from "@/ui/StatCard";
import { formatNumber } from "@/utils/formatNumber";
import React from "react";
import { BarChart, BarList, Card, Table } from "@tremor/react";
import { TableHero } from "@/ui/Table";
import { Tabs } from "@/ui/Tabs";
import useCalculations from "../hooks/useCalculations";

interface ResultsPageProps {
  results: Results;
}

const ResultsSection = ({ results }: ResultsPageProps) => {
  const { handleReset } = useCalculations();

  const unit = results.unit === "metric" ? "kg" : "lbs";
  const barListData = results.TDEE;
  const BMIData = [
    {
      name: "18.5 or less",
      value: "Underweight",
    },
    {
      name: "18.5-24.9",
      value: "Normal Weight",
    },
    {
      name: "25-29.9",
      value: "Overweight",
    },
    {
      name: "30 or more",
      value: "Obese",
    },
  ];

  const idealWeightData = results.recommendedWeight;

  let formattedData = Object.keys(barListData).map((key) => {
    // @ts-ignore
    let name = key;

    if (key === "veryActive") name = "very active";
    if (key === "basalMetabolicRate") name = "BMR";

    return {
      name,
      // @ts-ignore
      value: barListData[key],
    };
  });

  let formattedIdealWeightData = Object.keys(idealWeightData).map((key) => {
    // @ts-ignore
    let name = key;

    if (key === "lowestWeight") name = "Lowest Weight";
    if (key === "highestWeight") name = "Highest Weight";
    if (key === "hamwi") name = "G.J. Hamwi Formula (1964)";
    if (key === "devine") name = "B.J. Devine Formula (1974)";
    if (key === "robinson") name = "J.D. Robinson Formula (1983)";
    if (key === "miller") name = "D.R. Miller Formula (1983)";

    return {
      name,
      // @ts-ignore
      value: idealWeightData[key] + unit,
    };
  });

  const muscularPotentialBarChartData = [
    {
      name: "At 5% Body Fat",
      "Muscle Weight": results.muscularPotential.at5PercentBodyFat,
    },
    {
      name: "At 10% Body Fat",
      "Muscle Weight": results.muscularPotential.at10PercentBodyFat,
    },
    {
      name: "At 15% Body Fat",
      "Muscle Weight": results.muscularPotential.at15PercentBodyFat,
    },
  ];

  const macroNutritionData = [
    {
      name: "Maintenance",
      list: [
        {
          name: "Low Carb",
          list: [
            {
              name: "Protein",
              value: `${results.macronutrientsData.maintenance.lowCarb.proteinGrams}g`,
            },
            {
              name: "Fat",
              value: `${results.macronutrientsData.maintenance.lowCarb.fatGrams}g`,
            },
            {
              name: "Carbs",
              value: `${results.macronutrientsData.maintenance.lowCarb.carbGrams}g`,
            },
          ],
        },
        {
          name: "Moderate Carb",
          list: [
            {
              name: "Protein",
              value: `${results.macronutrientsData.maintenance.moderateCarb.proteinGrams}g`,
            },
            {
              name: "Fat",
              value: `${results.macronutrientsData.maintenance.moderateCarb.fatGrams}g`,
            },
            {
              name: "Carbs",
              value: `${results.macronutrientsData.maintenance.moderateCarb.carbGrams}g`,
            },
          ],
        },
        {
          name: "High Carb",
          list: [
            {
              name: "Protein",
              value: `${results.macronutrientsData.maintenance.highCarb.proteinGrams}g`,
            },
            {
              name: "Fat",
              value: `${results.macronutrientsData.maintenance.highCarb.fatGrams}g`,
            },
            {
              name: "Carbs",
              value: `${results.macronutrientsData.maintenance.highCarb.carbGrams}g`,
            },
          ],
        },
      ],
    },
    {
      name: "Cutting",
      list: [
        {
          name: "Low Carb",
          list: [
            {
              name: "Protein",
              value: `${results.macronutrientsData.cutting.lowCarb.proteinGrams}g`,
            },
            {
              name: "Fat",
              value: `${results.macronutrientsData.cutting.lowCarb.fatGrams}g`,
            },
            {
              name: "Carbs",
              value: `${results.macronutrientsData.cutting.lowCarb.carbGrams}g`,
            },
          ],
        },
        {
          name: "Moderate Carb",
          list: [
            {
              name: "Protein",
              value: `${results.macronutrientsData.cutting.moderateCarb.proteinGrams}g`,
            },
            {
              name: "Fat",
              value: `${results.macronutrientsData.cutting.moderateCarb.fatGrams}g`,
            },
            {
              name: "Carbs",
              value: `${results.macronutrientsData.cutting.moderateCarb.carbGrams}g`,
            },
          ],
        },
        {
          name: "High Carb",
          list: [
            {
              name: "Protein",
              value: `${results.macronutrientsData.cutting.highCarb.proteinGrams}g`,
            },
            {
              name: "Fat",
              value: `${results.macronutrientsData.cutting.highCarb.fatGrams}g`,
            },
            {
              name: "Carbs",
              value: `${results.macronutrientsData.cutting.highCarb.carbGrams}g`,
            },
          ],
        },
      ],
    },
    {
      name: "Bulking",
      list: [
        {
          name: "Low Carb",
          list: [
            {
              name: "Protein",
              value: `${results.macronutrientsData.bulking.lowCarb.proteinGrams}g`,
            },
            {
              name: "Fat",
              value: `${results.macronutrientsData.bulking.lowCarb.fatGrams}g`,
            },
            {
              name: "Carbs",
              value: `${results.macronutrientsData.bulking.lowCarb.carbGrams}g`,
            },
          ],
        },
        {
          name: "Moderate Carb",
          list: [
            {
              name: "Protein",
              value: `${results.macronutrientsData.bulking.moderateCarb.proteinGrams}g`,
            },
            {
              name: "Fat",
              value: `${results.macronutrientsData.bulking.moderateCarb.fatGrams}g`,
            },
            {
              name: "Carbs",
              value: `${results.macronutrientsData.bulking.moderateCarb.carbGrams}g`,
            },
          ],
        },
        {
          name: "High Carb",
          list: [
            {
              name: "Protein",
              value: `${results.macronutrientsData.bulking.highCarb.proteinGrams}g`,
            },
            {
              name: "Fat",
              value: `${results.macronutrientsData.bulking.highCarb.fatGrams}g`,
            },
            {
              name: "Carbs",
              value: `${results.macronutrientsData.bulking.highCarb.carbGrams}g`,
            },
          ],
        },
      ],
    },
  ];

  const TDEECalculationModel = results.bodyfat
    ? "Katch-McArdle"
    : "Mifflin-St Jeor";

  return (
    <div className="max-w-5xl w-full mx-auto flex flex-col justify-center items-center text-black">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Results</h1>
      <div className="w-full flex flex-col items-center">
        <StatCard
          primaryText={formatNumber(results.TDEE.active)}
          secondaryText="calories per day"
        />

        <p className="text-sm text-zinc-700 mb-4">
          or{" "}
          <strong className="text-black">
            {formatNumber(results.TDEE.active * 7)}
          </strong>{" "}
          calories per week
        </p>
      </div>

      {!results.bodyfat && (
        <p className="p-4 rounded-2xl bg-zinc-200 text-xs max-w-sm text-zinc-700">
          You didn't include your body fat percentage, so we used a different
          formula to calculate your TDEE. This formula is less accurate than the
          Katch-McArdle formula, which requires your body fat percentage.
        </p>
      )}

      <div className="h-1 w-full bg-zinc-100 my-6 rounded-full" />

      <div className="w-full flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full h-full">
          <div>
            <h2 className="text-lg font-semibold mb-1">TDEE</h2>
            <p className="text-sm text-zinc-700 mb-2">
              Your Total Daily Energy Expenditure (TDEE) is the number of
              calories you burn every day. It is the sum of your Basal Metabolic
              Rate (BMR) and the calories you burn through physical activity.
              Your TDEE is estimated to be around{" "}
              <strong>{formatNumber(results.TDEE.active)}</strong> calories per
              day based on the {TDEECalculationModel} formula.
            </p>
            <Card className="h-full border-2">
              <BarList
                className="capitalize"
                sortOrder="ascending"
                data={formattedData}
                color="yellow-400"
                valueFormatter={(value: number) => formatNumber(value)}
              />
            </Card>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-1">
              BMI: <strong>{results.BMI}</strong>
            </h2>
            <p className="text-sm text-zinc-700 mb-2 md:mb-12 xl:mb-7">
              With a BMI of {results.BMI}, you are classified as{" "}
              <strong>
                {results.BMI >= 30
                  ? "Obese"
                  : results.BMI >= 25
                  ? "Overweight"
                  : results.BMI >= 18.5
                  ? "Normal Weight"
                  : "Underweight"}
              </strong>
              . BMI is a simple calculation using a person's height and weight,
              so it is not a perfect measure of health, especially if you lift
              weights.
            </p>
            <Card className="!p-0 overflow-hidden h-full flex-1 border-2">
              <TableHero data={BMIData} />
            </Card>
            {/* <p className="mt-2">
            Your BMI is {results.BMI}, which means you are classified as{" "}
            <strong>
              {results.BMI >= 30
                ? "Obese"
                : results.BMI >= 25
                ? "Overweight"
                : results.BMI >= 18.5
                ? "Normal Weight"
                : "Underweight"}
            </strong>
            .
          </p> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full h-full">
          <div className="w-full">
            <h2 className="text-lg font-semibold mb-1">
              Ideal Weight: {results.recommendedWeight.lowestWeight}-
              {results.recommendedWeight.highestWeight}{" "}
              {results.unit === "metric" ? "kg" : "lbs"}
            </h2>
            <p className="text-sm text-zinc-700 mb-2">
              Based on several formulas, your ideal weight range is between{" "}
              <strong>
                {results.recommendedWeight.lowestWeight}
                {results.unit === "metric" ? "kg" : "lbs"}
              </strong>{" "}
              and{" "}
              <strong>
                {results.recommendedWeight.highestWeight}
                {results.unit === "metric" ? "kg" : "lbs"}
              </strong>
              . This range can wildly fluctuate if you lift weights or have
              genetic predispositions.
            </p>
            <Card className="!p-0 overflow-hidden h-full border-2">
              <TableHero data={formattedIdealWeightData} />
            </Card>
          </div>

          <div className="w-full">
            <h2 className="text-lg font-semibold mb-1">
              Maximum Muscular Potential
            </h2>
            <p className="text-sm text-zinc-700 mb-2">
              Your maximum muscular potential is the maximum amount of muscle
              you can build based on your height and body fat percentage. We use{" "}
              <a
                href="https://archive.is/xyrPA"
                title="Martin Berkhan's formula"
              >
                Martin Berkhan's formula
              </a>{" "}
              to calculate this.
            </p>
            <Card className="p-0 overflow-hidden h-full pb-2 border-2">
              <BarChart
                className="mt-6"
                data={muscularPotentialBarChartData}
                index="name"
                categories={["Muscle Weight"]}
                colors={["indigo-600"]}
                valueFormatter={(value: number) =>
                  `${value}${results.unit === "metric" ? "kg" : "lbs"}`
                }
                showLegend={false}
                yAxisWidth={48}
              />
            </Card>
            {/* <ul>
            <li>
              At 5% Body Fat: {results.muscularPotential.at5PercentBodyFat} lbs
            </li>
            <li>
              At 10% Body Fat: {results.muscularPotential.at10PercentBodyFat}{" "}
              lbs
            </li>
            <li>
              At 15% Body Fat: {results.muscularPotential.at15PercentBodyFat}{" "}
              lbs
            </li>
          </ul> */}
          </div>
        </div>
      </div>

      <div className="w-full mt-4">
        <h2 className="text-lg font-semibold mb-1">Macronutrients</h2>
        <p className="text-sm text-zinc-700 mb-2">
          Based on your goals, here are the suggested macronutrient
          distributions you should aim for:
        </p>
        <Tabs data={macroNutritionData} />
        <p className="text-xs text-zinc-700 w-full text-center mt-4">
          Protein and carbohydrates each contain 4 calories per gram and fat
          contains 9 calories per gram.
        </p>
      </div>
    </div>
  );
};

export default ResultsSection;
