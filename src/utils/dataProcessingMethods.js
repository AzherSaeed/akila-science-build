import dynamicSort from "./dynamicSort";

const dataCleaning = [
  {
    name: "Drop Columns",
    value: "drop-columns",
    show: false,
    exact: true,
    description: "Remove columns by specifying label names.",
  },
  {
    name: "Drop Duplicates",
    value: "drop-duplicates",
    show: false,
    exact: true,
    description:
      "Drops duplicate rows based off subset of column(s) specified.",
  },
  {
    name: "Fill NA Values",
    value: "fill-na",
    show: false,
    exact: true,
    description: "Fill NA/NaN values using the specified method.",
  },
  {
    name: "Rename Columns",
    value: "rename",
    show: false,
    exact: true,
    description: "Renames the specified columns.",
  },
];

const dataProcessing = [
  {
    name: "Concat",
    value: "concat",
    show: false,
    exact: true,
    description: "Concatenates two objects along the column axis.",
  },
  {
    name: "Cut",
    value: "cut",
    show: false,
    exact: true,
    description:
      "Sorts data into bins. This is helpful when converting a continuous variable into categorical variable.",
  },
  {
    name: "Group By",
    value: "group-by",
    show: false,
    exact: true,
    description:
      "Groups dataset by the given columns. This is helpful when there are many categorical variables that need to be reduced into one row per category.",
  },
  {
    name: "Merge Datasets",
    value: "merge",
    show: false,
    exact: true,
    description:
      "Merges two datasets together, creating one dataset. Usually applied when there are two datasets with a common value that can be utilized to merge the datasets.",
  },
  {
    name: "Melt",
    value: "melt",
    show: false,
    exact: true,
    description:
      "Converts a dataset from wide to long format. The categories within a column are utilized to create new column names.",
  },
  {
    name: "Pivot",
    value: "pivot",
    show: false,
    exact: true,
    description:
      "Reshapes data based on column values. This is similar to the operation in excel.",
  },
  {
    name: "Shift",
    value: "shift",
    show: false,
    exact: true,
    description:
      "Shifts the rows within a column up/down by the desired amount.  Often useful when working with time series data and a certain variable needs to be lagged or pushed forward a certain number of time periods.",
  },
  {
    name: "Value Counts",
    value: "value-counts",
    show: false,
    exact: true,
    description:
      "Returns a count of the number of occurences of each variable.",
  },
  {
    name: "Q Cut",
    value: "qcut",
    show: false,
    exact: true,
    description:
      "Splits variable into equal-sized buckets (e.g. quartiles, deciles, etc.)",
  },
];

const dataCalculations = [
  {
    name: "Max/Min",
    value: "max-min",
    show: false,
    exact: true,
    description:
      "Returns the maximum/minimum value over the specified range of values.",
  },
  {
    name: "Rolling Calculations",
    value: "rolling-calculation",
    show: false,
    exact: true,
    description:
      "Provides a rolling window calculation, often useful when calculating a rolling sum over a given time period.",
  },
  {
    name: "Column Sum/Product",
    value: "column-sum-product",
    show: false,
    exact: true,
    description: "Returns the sum/product from the specified column.",
  },
];

const textProcessing = [
  {
    name: "Contains",
    value: "string-contains",
    show: false,
    exact: true,
    description: "Returns true if the string contains the specified pattern.",
  },
  {
    name: "Extract",
    value: "string-extract",
    show: false,
    description: "For each row, it will return the specified pattern.",
    exact: true,
  },
  {
    name: "Replace",
    value: "string-replace",
    show: false,
    exact: true,
    description:
      "Replaces the search pattern with a new string. This is similar to ctrl + F (i.e. find and replace)",
  },
  {
    name: "Split",
    value: "string-split",
    show: false,
    exact: true,
    description: "This will split a string on the given search pattern.",
  },
];

let dataProcessingMethods = dataCleaning.concat(
  dataProcessing,
  dataCalculations,
  textProcessing
);

dataProcessingMethods = dataProcessingMethods.sort(dynamicSort("name"));

// add path property to each element
const root = "/documentation/data-processing";
dataProcessingMethods.forEach((element) => {
  element.path = `${root}/${element.value}`;
});

export default dataProcessingMethods;
