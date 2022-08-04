import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { ButtonSwitch } from '@components';
import Select from '../../dataProcessing/methods/Select';

function AutoML() {
  const dropdownValues = [
    { key: 'Regression', value: 'regression' },
    { key: 'Classification', value: 'classification' },
    { key: 'Unsupervised', value: 'unsupervised' },
  ];
  const dataSourceValues = [
    { key: 'S3 Bucket', value: 'S3-Bucket' },
    { key: 'DynamoDB Table', value: 'DB-Table' },
  ];
  const [dataSource, setDataSource] = useState('');
  const [problemType, setProblemType] = useState('');
  const [numericColumns, setNumericColumns] = useState('');
  const [categoricalColumns, setCategoricalColumns] = useState('');

  return (
    <Box>
      <Typography variant="h1">Auto ML</Typography>
      <br />
      <br />
      <Typography variant="h3">Processing</Typography>
      Process this model remotely or locally: <br />
      <ButtonSwitch defaultValue="Local" alternateValue="Remote" />
      <br />
      <br />
      <br />
      <Typography variant="h3">Load Data</Typography>
      Please load the dataset to build the model.
      <Select
        title="Select the data source:"
        dropdownValues={dataSourceValues}
        placeholder="Data Source"
        handleChange={setDataSource}
      />
      <br />
      <br />
      <Typography variant="h3">Problem Type</Typography>
      Please select if this is a classification, regression, or unsupervised learning problem.
      <br />
      <Select
        title=""
        dropdownValues={dropdownValues}
        placeholder="Problem Type"
        handleChange={setProblemType}
      />
      <br />
      <br />
      <Typography variant="h3">Target Column</Typography>
      Please select the column containing the data we will predict.
      <br />
      <br />
      <Typography variant="h3">Numeric Columns</Typography>
      Please select all numeric columns.
      <br />
      <br />
      <Typography variant="h3">Categorical Columns</Typography>
      Please select all categorical columns.
      <br />
      <br />
      <Typography variant="h3">Run Model</Typography>
    </Box>
  );
}

export default AutoML;
