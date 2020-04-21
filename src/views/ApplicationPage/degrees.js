const degreeList = [
    "High School",
    "Undergraduate",
    "Graduate",
    "Other",
];

export const degrees = degreeList.map((v) => ({
    label: v,
    value: v
}));
export default degrees;