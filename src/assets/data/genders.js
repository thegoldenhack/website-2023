const gendersList = ["Female", "Male", "Other"];

export const genders = gendersList.map((v) => ({
  label: v,
  value: v,
}));
export default genders;
