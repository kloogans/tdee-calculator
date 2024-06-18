interface IdealWeightUserInfo {
  sex: "male" | "female";
  heightInches: number;
}

interface IdealWeightResults {
  hamwi: number;
  devine: number;
  robinson: number;
  miller: number;
  lowestWeight: number;
  highestWeight: number;
}

// export function calculateIdealWeight(
//   userInfo: IdealWeightUserInfo
// ): IdealWeightResults {
//   const { sex, heightInches } = userInfo;
//   console.log({ sex, heightInches });

//   // Convert height to inches over 5 feet
//   const inchesOverFiveFeet = heightInches - 60; // 5 feet = 60 inches
//   console.log(inchesOverFiveFeet);

//   let hamwi: number;
//   let devine: number;
//   let robinson: number;
//   let miller: number;

//   if (sex === "male") {
//     hamwi = 106 + 6 * inchesOverFiveFeet;
//     devine = 50.0 + 2.3 * inchesOverFiveFeet * 2.20462; // Convert kg to lbs
//     robinson = 52 + 1.9 * inchesOverFiveFeet * 2.20462; // Convert kg to lbs
//     miller = 56.2 + 1.41 * inchesOverFiveFeet * 2.20462; // Convert kg to lbs
//   } else {
//     hamwi = 100 + 5 * inchesOverFiveFeet;
//     devine = 45.5 + 2.3 * inchesOverFiveFeet * 2.20462; // Convert kg to lbs
//     robinson = 49 + 1.7 * inchesOverFiveFeet * 2.20462; // Convert kg to lbs
//     miller = 53.1 + 1.36 * inchesOverFiveFeet * 2.20462; // Convert kg to lbs
//   }

//   return {
//     hamwi: Math.round(hamwi),
//     devine: Math.round(devine),
//     robinson: Math.round(robinson),
//     miller: Math.round(miller),
//   };
// }

export function calculateIdealWeight(
  userInfo: IdealWeightUserInfo
): IdealWeightResults {
  const { sex, heightInches } = userInfo;

  const inchesOverFiveFeet = heightInches > 60 ? heightInches - 60 : 0; // Difference from 5 feet (60 inches)

  let hamwi: number;
  let devine: number;
  let robinson: number;
  let miller: number;

  if (sex === "male") {
    hamwi = 106 + 6 * inchesOverFiveFeet;
    devine = (50 + 2.3 * inchesOverFiveFeet) * 2.20462; // Convert kg to lbs
    robinson = (52 + 1.9 * inchesOverFiveFeet) * 2.20462; // Convert kg to lbs
    miller = (56.2 + 1.41 * inchesOverFiveFeet) * 2.20462; // Convert kg to lbs
  } else {
    hamwi = 100 + 5 * inchesOverFiveFeet;
    devine = (45.5 + 2.3 * inchesOverFiveFeet) * 2.20462; // Convert kg to lbs
    robinson = (49 + 1.7 * inchesOverFiveFeet) * 2.20462; // Convert kg to lbs
    miller = (53.1 + 1.36 * inchesOverFiveFeet) * 2.20462; // Convert kg to lbs
  }

  const data = {
    hamwi: Math.round(hamwi),
    devine: Math.round(devine),
    robinson: Math.round(robinson),
    miller: Math.round(miller),
  };

  const lowestWeight = Math.min(...Object.values(data));
  const highestWeight = Math.max(...Object.values(data));

  return {
    hamwi: Math.round(hamwi),
    devine: Math.round(devine),
    robinson: Math.round(robinson),
    miller: Math.round(miller),
    lowestWeight,
    highestWeight,
  };
}
