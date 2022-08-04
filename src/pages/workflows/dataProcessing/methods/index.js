import React from "react";
import GroupBy from "./GroupBy";
import DropColumns from "./DropColumns";
import DropDuplicates from "./DropDuplicates";
import FillMissingValues from "./FillMissingValues";
import RenameColumns from "./RenameColumns";
import Concat from "./Concat";
import Cut from "./Cut";
import Merge from "./Merge";
import Melt from "./Melt";
import Pivot from "./Pivot";
import Shift from "./Shift";
import ValueCounts from "./ValueCounts";
import Qcut from "./Qcut";
import MaxMin from "./MaxMin";
import RollingCalculations from "./RollingCalculations";
import Contains from "./Contains";
import Replace from "./Replace";
import Split from "./Split";
import CustomCalculation from "./CustomCalculation";

const methods = [
  {
    method: "Group By",
    component: <GroupBy />,
    definition:
      "Groups rows that have the same values and then calculates a summarized number (e.g. sum all rows with the same value, calculate the average on all rows with the same value).",
    definitions: [
      {
        title: "Aggregate Method",
        definition:
          "This will calculate the aggregate method on the grouped values.",
      },
      {
        title: "Test title",
        definition:
          "Dolor et similique at provident reprehenderit sint Tempora illo animi",
      },
    ],
  },
  {
    method: "Merge",
    component: <Merge />,
    definition: "Merge two datasets together.",
    definitions: [
      {
        title: "Second Dataset",
        definition:
          "The second dataset that will be merged on the already-loaded dataset.",
      },
      {
        title: "Merge Method",
        definition:
          "This is indicates how the merge will be executed (e.g. left join, right join, etc.)",
      },
      {
        title: "Columns in the existing dataset",
        definition:
          "Lorem alias commodi fuga dolorum illo libero suscipit mollitia Soluta",
      },
      {
        title: "Columns in the second dataset",
        definition:
          "Lorem alias commodi fuga dolorum illo libero suscipit mollitia Soluta",
      },
    ],
  },
  {
    method: "Drop Columns",
    component: <DropColumns />,
    definition: "Removes a column from the dataset.",
    definitions: [
      {
        title: "Select Columns",
        definition: "These are the rows that will be dropped.",
      },
    ],
  },
  {
    method: "Drop Duplicates",
    component: <DropDuplicates />,
    definition: "Removes duplicate values.",
    definitions: [
      {
        title: "Select Columns",
        definition:
          "These are the columns that will be used to identify duplicates.",
      },
      {
        title: "Drop Method",
        definition:
          "Consectetur animi voluptatibus officiis adipisci similique Hic rerum ipsa natus.",
      },
    ],
  },
  {
    method: "Fill Missing Values",
    component: <FillMissingValues />,
    definition: "Replaces missing values.",
    definitions: [
      {
        title: "Select Columns",
        definition:
          "These are the columns that will be used to identify duplicates.",
      },
      {
        title: "Drop Method",
        definition:
          "Consectetur animi voluptatibus officiis adipisci similique Hic rerum ipsa natus.",
      },
    ],
  },
  {
    method: "Rename Columns",
    component: <RenameColumns />,
    definition: "Renames columns.",
    definitions: [
      {
        title: "Select Columns",
        definition:
          "These are the columns that will be used to identify duplicates.",
      },
      {
        title: "Drop Method",
        definition:
          "Consectetur animi voluptatibus officiis adipisci similique Hic rerum ipsa natus.",
      },
    ],
  },
  {
    method: "Concat",
    component: <Concat />,
    definition:
      "Appends columns or rows from a second dataset onto the existing dataset.",
    definitions: [
      {
        title: "Select Columns",
        definition:
          "These are the columns that will be used to identify duplicates.",
      },
      {
        title: "Drop Method",
        definition:
          "Consectetur animi voluptatibus officiis adipisci similique Hic rerum ipsa natus.",
      },
    ],
  },
  {
    method: "Cut",
    component: <Cut />,
    definition:
      "Utilized when data needs to be segmented and sort data values into bins",
    definitions: [
      {
        title: "Select Columns",
        definition:
          "These are the columns that will be used to identify duplicates.",
      },
      {
        title: "Drop Method",
        definition:
          "Consectetur animi voluptatibus officiis adipisci similique Hic rerum ipsa natus.",
      },
    ],
  },
  {
    method: "Melt",
    component: <Melt />,
    definition: "Typically used when a wide dataset needs to become long.",
    definitions: [
      {
        title: "ID Varibales",
        definition:
          "These are the columns that will be used to identify duplicates.",
      },
      {
        title: "Variable Name",
        definition:
          "Consectetur animi voluptatibus officiis adipisci similique Hic rerum ipsa natus.",
      },
    ],
  },
  {
    method: "Pivot",
    component: <Pivot />,
    definition:
      "This is similar to pivot tables in excel, it reshapes a dataset.",
    definitions: [
      {
        title: "Select Columns",
        definition:
          "These are the columns that will be used to identify duplicates.",
      },
      {
        title: "Drop Method",
        definition:
          "Consectetur animi voluptatibus officiis adipisci similique Hic rerum ipsa natus.",
      },
    ],
  },
  {
    method: "Shift",
    component: <Shift />,
    definition:
      "This can moves rows up or down.  This is often utilized with time series data when a variable needs to be lagged or pushed forward.",
    definitions: [
      {
        title: "Select Columns",
        definition:
          "These are the columns that will be used to identify duplicates.",
      },
      {
        title: "Drop Method",
        definition:
          "Consectetur animi voluptatibus officiis adipisci similique Hic rerum ipsa natus.",
      },
    ],
  },
  {
    method: "Value Counts",
    component: <ValueCounts />,
    definition: "Drop duplicate values.",
    definitions: [
      {
        title: "Select Columns",
        definition: "Returns the numebr of occurences for each unique value.",
      },
      {
        title: "Drop Method",
        definition:
          "Consectetur animi voluptatibus officiis adipisci similique Hic rerum ipsa natus.",
      },
    ],
  },
  {
    method: "Q Cut",
    component: <Qcut />,
    definition: "tries to dividing the data into equal sized bins.",
    definitions: [
      {
        title: "Select Columns",
        definition:
          "These are the columns that will be used to identify duplicates.",
      },
      {
        title: "Drop Method",
        definition:
          "Consectetur animi voluptatibus officiis adipisci similique Hic rerum ipsa natus.",
      },
    ],
  },
  {
    method: "Max/Min",
    component: <MaxMin />,
    definition: "Calculates the maximum or minimum from the specified column.",
    definitions: [
      {
        title: "Select Columns",
        definition:
          "These are the columns that will be used to identify duplicates.",
      },
      {
        title: "Drop Method",
        definition:
          "Consectetur animi voluptatibus officiis adipisci similique Hic rerum ipsa natus.",
      },
    ],
  },
  {
    method: "Rolling Calculations",
    component: <RollingCalculations />,
    definition: "Creates a rolling calculation (e.g. rolling sum).",
    definitions: [
      {
        title: "Select Columns",
        definition:
          "These are the columns that will be used to identify duplicates.",
      },
      {
        title: "Drop Method",
        definition:
          "Consectetur animi voluptatibus officiis adipisci similique Hic rerum ipsa natus.",
      },
    ],
  },
  {
    method: "Contains",
    component: <Contains />,
    definition: "Checks if a string contains a given word or pattern.",
    definitions: [
      {
        title: "Select Columns",
        definition:
          "These are the columns that will be used to identify duplicates.",
      },
      {
        title: "Drop Method",
        definition:
          "Consectetur animi voluptatibus officiis adipisci similique Hic rerum ipsa natus.",
      },
    ],
  },
  {
    method: "Replace",
    component: <Replace />,
    definition:
      "Replaces an existing string or pattern with a new string or pattern.",
    definitions: [
      {
        title: "Select Columns",
        definition:
          "These are the columns that will be used to identify duplicates.",
      },
      {
        title: "Drop Method",
        definition:
          "Consectetur animi voluptatibus officiis adipisci similique Hic rerum ipsa natus.",
      },
    ],
  },
  {
    method: "Split",
    component: <Split />,
    definition:
      "Splits a string on a given character or patter. Often used to separate a list on commas into different columns.",
    definitions: [
      {
        title: "Select Columns",
        definition:
          "These are the columns that will be used to identify duplicates.",
      },
      {
        title: "Drop Method",
        definition:
          "Consectetur animi voluptatibus officiis adipisci similique Hic rerum ipsa natus.",
      },
    ],
  },
  {
    method: "Custom",
    component: <CustomCalculation />,
    definition:
      "Create a custom formula to add,subtract, multiply, and divide columns.",
    definitions: [
      {
        title: "Select Columns",
        definition:
          "These are the columns that will be used to identify duplicates.",
      },
      {
        title: "Drop Method",
        definition:
          "Consectetur animi voluptatibus officiis adipisci similique Hic rerum ipsa natus.",
      },
    ],
  },
];

export default methods;
