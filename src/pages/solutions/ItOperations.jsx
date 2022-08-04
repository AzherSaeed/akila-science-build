import React from 'react';
import {
  BuildingModels,
  ArtificialIntelligenceChip,
  DataProcessing,
  Modelling,
  LoadData,
  Graphs,
  Interface,
  ITOperationsBanner,
} from '@assets/index';
import { RequestADemo } from '@components';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/styles';
import FeaturesBox from './FeaturesBox';
import WorkflowBox from './WorkflowBox';
import RightChevron from './RightChevron';
import itOperationsText from './itOperationsText';
import Heading from './Heading';
import Intro from './Intro';

export default function ItOperations() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box marginTop="10vh">
      <Heading
        backgroundImage={ITOperationsBanner}
        title="IT Operations"
        subHeading={itOperationsText.subHeading}
      />
      <br />
      <br />

      <Box margin="0 10vw">
        <Intro title={itOperationsText.introTitle} subheading={itOperationsText.introSubHeading} />
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
            description={itOperationsText.buildingModels}
            image={BuildingModels}
          />
          <FeaturesBox
            title="User Friendly Interface and Intuitive Designs"
            description={itOperationsText.interfaceText}
            image={Interface}
          />
          <FeaturesBox
            title="Iterate Model Designs"
            description={itOperationsText.modelDesigns}
            image={ArtificialIntelligenceChip}
          />
          <FeaturesBox
            title="Easily Communicate Model Designs and Output with Non-Technical Shareholders"
            description={itOperationsText.communicate}
            image={Graphs}
          />
        </Box>
        <Box>
          <Box paddingBottom="65px">
            <Typography color="#E7E7E7" lineHeight="45px" variant="solutionsSubheading">
              Typical Workflow for a IT Operations <br />
            </Typography>{' '}
            <br />
            <br />
          </Box>
          <Box display={matches ? '' : 'flex'} overflow="hidden">
            <WorkflowBox
              title="Connect to Data Sources"
              description={itOperationsText.connectToDataSources}
              image={LoadData}
            />
            <RightChevron />
            <WorkflowBox
              title="Process Data"
              description={itOperationsText.processData}
              image={DataProcessing}
            />
            <RightChevron />
            <WorkflowBox
              title="Create Models"
              description={itOperationsText.createModels}
              image={Modelling}
            />
          </Box>
        </Box>
      </Box>
      <Box minHeight="465px">
        <RequestADemo />
      </Box>
    </Box>
  );
}
