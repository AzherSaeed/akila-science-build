import React from 'react';
import {
  BuildingModels,
  ArtificialIntelligenceChip,
  DataProcessing,
  Modelling,
  LoadData,
  Graphs,
  Interface,
  dataScientistBanner,
} from '@assets/index';
import { RequestADemo } from '@components';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/styles';
import FeaturesBox from './FeaturesBox';
import WorkflowBox from './WorkflowBox';
import RightChevron from './RightChevron';
import dataScientistText from './dataScientistText';
import Heading from './Heading';
import Intro from './Intro';

export default function DataScientist() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box marginTop="10vh">
      <Heading
        backgroundImage={dataScientistBanner}
        title="Data Scientist"
        subHeading={dataScientistText.subHeading}
      />
      <Box margin="0 10vw">
        <Intro
          title={dataScientistText.introTitle}
          subheading={dataScientistText.introSubHeading}
        />
        <Box
          minHeight="675px"
          display="flex"
          flexWrap="wrap"
          margin="5% 0%"
          borderRadius="7px"
          backgroundColor={matches ? '' : '#f1f5f8'}
        >
          <FeaturesBox
            title="A Thoughtful Approach to Building Models"
            description={dataScientistText.buildingModels}
            image={BuildingModels}
          />
          <FeaturesBox
            title="User Friendly Interface and Intuitive Designs"
            description={dataScientistText.interfaceText}
            image={Interface}
          />
          <FeaturesBox
            title="Iterate Model Designs"
            description={dataScientistText.modelDesigns}
            image={ArtificialIntelligenceChip}
          />
          <FeaturesBox
            title="Easily Communicate Model Designs and Output with Non-Technical Shareholders"
            description={dataScientistText.communicate}
            image={Graphs}
          />
        </Box>
        <Box>
          <Box paddingBottom="65px">
            <Typography color="#E7E7E7" lineHeight="45px" variant="solutionsSubheading">
              Typical Workflow for a Data Scientist
            </Typography>{' '}
            <br />
            <br />
          </Box>
          <Box display={matches ? '' : 'flex'} overflow="hidden">
            <WorkflowBox
              title="Connect to Data Sources"
              description={dataScientistText.connectToDataSources}
              image={LoadData}
            />
            <RightChevron />
            <WorkflowBox
              title="Process Data"
              description={dataScientistText.processData}
              image={DataProcessing}
            />
            <RightChevron />
            <WorkflowBox
              title="Create Models"
              description={dataScientistText.createModels}
              image={Modelling}
            />
          </Box>
        </Box>
      </Box>
      <Box height="85vh">
        <RequestADemo />
      </Box>
    </Box>
  );
}
