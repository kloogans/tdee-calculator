"use client";
import { UserInfoIngest } from "./UserInfoIngest";
import useCalculations from "../hooks/useCalculations";
import ResultsSection from "./ResultsSection";
import { DonutChart, Legend } from "@tremor/react";
import { Toaster } from "react-hot-toast";
import { IconRefresh } from "@tabler/icons-react";

const UserStatsContainer = () => {
  const { handleSubmit, formSubmitted, results, handleReset } =
    useCalculations();

  const pieData = [
    {
      name: "Basal Metabolic Rate",
      value: 70,
    },
    {
      name: "Activity Level",
      value: 20,
    },
    {
      name: "Thermic Effect of Food",
      value: 10,
    },
  ];

  return (
    <>
      <div
        style={{ minHeight: "calc(100svh - 128px" }}
        className="container w-full flex flex-col items-center justify-center"
      >
        {!formSubmitted && (
          <div className="w-full flex flex-col items-center max-w-xl mx-auto px-2">
            <h1 className="text-2xl font-bold mb-2 text-center border-b-2 border-b-white pb-1">
              Calculate How Many Calories You Burn Daily
            </h1>
            <p className="text-xs text-white/95 max-w-lg mb-4">
              Our <strong>Total Daily Energy Expenditure</strong> (TDEE)
              calculator will help you discover how many calories you burn
              daily, along with show you your Basal Metabolic Rate (BMR), Body
              Mass Index (BMI), and other useful information.
            </p>
          </div>
        )}
        <div
          className={`w-full ${
            formSubmitted ? "max-w-none" : "md:max-w-lg"
          } mx-auto p-2 md:p-4 bg-white border-y-4 md:border-4 border-black text-black shadow-md md:rounded-2xl`}
        >
          {formSubmitted && results ? (
            // @ts-ignore
            <ResultsSection results={results} />
          ) : (
            <>
              <UserInfoIngest handleSubmit={handleSubmit} />
            </>
          )}
        </div>
        {formSubmitted && (
          <button
            className="relative group p-4 border-2 w-full max-w-sm border-black bg-yellow-300 text-black rounded-2xl hover:bg-yellow-400 transition my-4"
            onClick={handleReset}
          >
            <IconRefresh className="absolute left-2 group-hover:rotate-90 group-focus:rotate-90 transition origin-center" />
            <strong>Recalculate</strong>
          </button>
        )}
      </div>

      {!formSubmitted && (
        <div className="container min-h-screen w-full flex flex-col items-center justify-center px-2">
          <div className="w-full max-w-lg flex flex-col bg-white rounded-2xl border-4 border-black shadow-md p-4 text-black mb-4">
            <div className="flex items-center justify-center space-x-4">
              <DonutChart
                data={pieData}
                category="value"
                index="name"
                valueFormatter={(value) => `${value}%`}
                colors={["blue", "yellow", "fuchsia"]}
                className="w-40 text-white"
                showLabel={false}
              />
              <Legend
                categories={[
                  "Basal Metabolic Rate",
                  "Activity Level",
                  "Thermic Effect of Food",
                ]}
                colors={["blue", "yellow", "fuchsia"]}
                className="max-w-xs !text-white"
              />
            </div>
          </div>
          <div className="w-full max-w-lg text-white">
            <h2 className="text-center text-2xl font-bold mb-2 border-b-2 border-b-white pb-1">
              How Is TDEE Calculated?
            </h2>
            <p className="text-sm mb-4">
              There are a few different ways to calculate your Total Daily
              Energy Expenditure (TDEE), but the most common method is the
              Harris-Benedict Equation. This formula calculates your Basal
              Metabolic Rate (BMR) and then multiplies it by an activity factor
              to determine your TDEE.
            </p>
            <p className="text-sm">
              Your BMR is the number of calories your body needs to maintain
              itself at rest. The activity factor accounts for the calories you
              burn through daily activities and exercise.
            </p>
          </div>
          <Toaster />
        </div>
      )}
    </>
  );
};

export default UserStatsContainer;
