const studyYearsList = [
  "< Grade 11",
  "Grade 11",
  "Grade 12",
  "1A/1B",
  "2A/2B",
  "3A/3B",
  "4A/4B",
  "5A/5B",
  "Grad School",
];
export const studyYears = studyYearsList.map((v) => ({ label: v, value: v }));
export default studyYears;
