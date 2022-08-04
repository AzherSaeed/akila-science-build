const dataCleaning = [
  { name: "Drop Columns", value: "dropColumns", show: false },
  { name: "Drop Duplicates", value: "dropDuplicates", show: false },
  { name: "Fill NA Values", value: "fillNA", show: false },
  { name: "Rename Columns", value: "rename", show: false },
];

const dataProcessing = [
  { name: "Concat", value: "concat", show: false },
  { name: "Cut", value: "cut", show: false },
  { name: "Group By", value: "groupBy", show: false },
  { name: "Merge Datasets", value: "merge", show: false },
  { name: "Melt", value: "melt", show: false },
  { name: "Pivot", value: "pivot", show: false },
  { name: "Shift", value: "shift", show: false },
  { name: "Value Counts", value: "valueCounts", show: false },
  { name: "Q Cut", value: "qcut", show: false },
];

const dataCalculations = [
  { name: "Max/Min", value: "maxMin", show: false },
  { name: "Rolling Calculations", value: "rollingCalculation", show: false },
  { name: "Column Sum/Product", value: "columnSumProduct", show: false },
];

const textProcessing = [
  { name: "Contains", value: "string_contains", show: false },
  { name: "Extract", value: "string_extract", show: false },
  { name: "Replace", value: "string_replace", show: false },
  { name: "Split", value: "string_split", show: false },
];

export { dataCleaning, dataProcessing, dataCalculations, textProcessing };
