// components/UserInfoForm.tsx

"use client";
import { UserInfoIngest } from "./UserInfoIngest";
import useCalculations from "../hooks/useCalculations";
import ResultsSection from "./ResultsSection";

const UserStatsContainer = () => {
  const { handleSubmit, formSubmitted, results } = useCalculations();

  return (
    <div className="container mx-auto mt-10 p-6 bg-white text-black shadow-md rounded-2xl">
      {formSubmitted && results ? (
        // @ts-ignore
        <ResultsSection results={results} />
      ) : (
        <UserInfoIngest handleSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default UserStatsContainer;
