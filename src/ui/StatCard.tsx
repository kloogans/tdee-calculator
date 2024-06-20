import React from "react";

interface StatCardProps {
  primaryText: string;
  secondaryText: string;
}

export const StatCard = ({ primaryText, secondaryText }: StatCardProps) => {
  return (
    <div className="relative flex items-center justify-center gap-4 rounded-2xl border-4 border-black p-6 w-full bg-blue-600 shadow-md max-w-sm mb-4">
      <span className="block absolute left-6 text-2xl">🔥</span>

      <div>
        <p className="text-2xl text-white font-bold">{primaryText}</p>

        <p className="text-sm text-white">{secondaryText}</p>
      </div>
    </div>
  );
};
