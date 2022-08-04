import React from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import allMethods from '@utils/allDocumentationMethods';

export default function FunctionTemplate() {
  const { id } = useParams();

  let result;
  allMethods.map((ele) => {
    if (ele.value === id) {
      result = ele;
    }
    return 0;
  });

  return (
    <Box marginLeft="5vw" marginTop="15vh">
      <Typography variant="h3" fontWeight="500">
        {result.name}
      </Typography>
      <Typography marginLeft="5vw" fontSize="2.5rem">
        {result.description}
      </Typography>
      <Typography variant="documentationSectionHeader">Inputs</Typography>{' '}
      <Typography variant="documentationSectionBody">Metric 1: </Typography>{' '}
      <Typography variant="documentationSectionBody">Metric 2:</Typography>{' '}
      <Typography variant="documentationSectionHeader">Output</Typography>
      <Typography variant="documentationSectionBody">Returns a series the result.</Typography>
      <Typography variant="documentationSectionHeader">Example</Typography>
      <Typography variant="documentationSectionBody">This is an example.</Typography>
      <Typography variant="documentationSectionHeader">Video</Typography>
      <Typography variant="documentationSectionBody">Video coming soon!</Typography>
    </Box>
  );
}
