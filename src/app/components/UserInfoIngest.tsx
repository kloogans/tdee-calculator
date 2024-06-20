import useCalculations from "../hooks/useCalculations";

interface UserInfoIngestProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const UserInfoIngest = ({ handleSubmit }: UserInfoIngestProps) => {
  const { unit, setUnit } = useCalculations();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="mb-4">
            <label className="block text-gray-700">Unit</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="unit"
                  value="imperial"
                  defaultChecked
                  onChange={() => setUnit("imperial")}
                  className="form-radio"
                />
                <span className="ml-2">Imperial</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="unit"
                  value="metric"
                  onChange={() => setUnit("metric")}
                  className="form-radio"
                />
                <span className="ml-2">Metric</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Sex</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="sex"
                  value="male"
                  defaultChecked
                  className="form-radio"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="sex" className="form-radio" />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="mb-4">
            <label className="block text-zinc-700 mb-2">Age</label>
            <input
              type="number"
              name="age"
              placeholder="Age"
              className="mt-1 block w-full px-4 py-2 bg-white border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-zinc-700 mb-2">
              Weight ({unit === "imperial" ? "lbs" : "kg"})
            </label>
            <input
              type="number"
              name="weight"
              placeholder={unit === "imperial" ? "lbs" : "kg"}
              className="mt-1 block w-full px-4 py-2 bg-white border rounded-md"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 items-end">
          <div className="mb-4">
            <label className="block text-zinc-700 mb-2">Height</label>
            {unit === "imperial" ? (
              <div className="flex space-x-4">
                <div>
                  <label className="block text-zinc-700 text-xs">Feet</label>
                  <input
                    type="number"
                    name="heightFeet"
                    placeholder="Feet"
                    className="mt-1 block w-full px-4 py-2 bg-white border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-zinc-700 text-xs">Inches</label>
                  <input
                    type="number"
                    name="heightInches"
                    placeholder="Inches"
                    className="mt-1 block w-full px-4 py-2 bg-white border rounded-md"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-zinc-700 text-xs">
                  Centimeters
                </label>
                <input
                  type="number"
                  name="heightCm"
                  placeholder="Centimeters"
                  className="mt-1 block w-full px-4 py-2 bg-white border rounded-md"
                />
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-zinc-700 mb-2">Activity</label>
            <label className="block text-zinc-700 text-xs">
              Your daily level of cardio
            </label>
            <select
              name="exerciseFrequency"
              defaultValue="sedentary"
              className="mt-1 block w-full px-4 py-2 bg-white border rounded-md text-zinc-700"
            >
              <option value="sedentary">Sedentary (office job)</option>
              <option value="light">
                Light (light exercise/sports 1-3 days/week)
              </option>
              <option value="moderate">
                Moderate (moderate exercise/sports 3-5 days/week)
              </option>
              <option value="active">
                Active (hard exercise/sports 6-7 days a week)
              </option>
              <option value="veryActive">
                Very Active (very hard exercise/sports & physical job)
              </option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Body Fat % (optional)</label>
          <input
            type="number"
            name="bodyFatPercentage"
            placeholder="Body Fat %"
            className="mt-1 block w-full px-4 py-2 bg-white border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full px-4 py-2 bg-yellow-300 shadow-md text-black rounded-xl border-2 border-black hover:bg-yellow-400 transition"
        >
          Calculate!
        </button>
      </form>
    </>
  );
};
