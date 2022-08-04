const processLabels = [
  {
    title: "Cleaning",
    labels: [
      "Drop Columns",
      "Drop Duplicates",
      "Fill Missing Values",
      "Rename Columns",
    ],
  },
  {
    title: "Transformations",
    labels: [
      "Concat",
      "Cut",
      "Group By",
      "Merge",
      "Melt",
      "Pivot",
      "Shift",
      "Value Counts",
      "Q Cut",
    ],
  },
  {
    title: "Calculations",
    labels: ["Max/Min", "Rolling Calculations", "Custom"],
  },
  {
    title: "Text Processing",
    labels: ["Contains", "Replace", "Split"],
  },
];

const tabs = [
  "Cleaning",
  "Transformations",
  "Calculations",
  "Text Processing",
  "Custom",
];

const labels = [
  "Group By",
  "Merge Datasets",
  "Concat",
  "Cut",
  "Melt",
  "Shift",
  "Pivot",
];

export { labels, processLabels, tabs };
