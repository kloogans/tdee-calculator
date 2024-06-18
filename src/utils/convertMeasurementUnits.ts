interface ImperialMeasurements {
  heightInches: number;
  weightPounds: number;
}

interface MetricMeasurements {
  heightCm: number;
  weightKg: number;
}

export function convertImperialToMetric(
  imperial: ImperialMeasurements
): MetricMeasurements {
  const { heightInches, weightPounds } = imperial;

  // Convert height from inches to centimeters
  const heightCm = heightInches * 2.54;

  // Convert weight from pounds to kilograms
  const weightKg = weightPounds * 0.453592;

  return {
    heightCm,
    weightKg,
  };
}

export function convertMetricToImperial(
  metric: MetricMeasurements
): ImperialMeasurements {
  const { heightCm, weightKg } = metric;

  // Convert height from centimeters to inches
  const heightInches = heightCm / 2.54;

  // Convert weight from kilograms to pounds
  const weightPounds = weightKg / 0.453592;

  return {
    heightInches,
    weightPounds,
  };
}
