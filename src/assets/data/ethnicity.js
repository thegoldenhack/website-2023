const ethnicityList = [
  "American Indian or Alaskan Native",
  "Asian / Pacific Islander",
  "Black or African American",
  "Hispanic",
  "White / Caucasian",
  "Prefer not to answer",
];

export const ethnicity = ethnicityList.map((v) => ({
  label: v,
  value: v,
}));
export default ethnicity;
