interface BMIUserInfo {
  weight: number; // in kg
  height: number; // in cm
}

export function calculateBMI(userInfo: BMIUserInfo): number {
  const { weight, height } = userInfo;

  // Calculate BMI
  const BMI = (weight / (height * height)) * 703;

  return BMI;
}
