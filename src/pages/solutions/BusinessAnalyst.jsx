import React from 'react';
import {
  BuildingModels,
  ArtificialIntelligenceChip,
  DataProcessing,
  Modelling,
  LoadData,
  Graphs,
  Interface,
  bussinessAnalystBanner,
  // BusinessAnalystBanner as backgroundImage,
} from '@assets/index';
import { RequestADemo } from '@components';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/styles';
import FeaturesBox from './FeaturesBox';
import WorkflowBox from './WorkflowBox';
import RightChevron from './RightChevron';
import businessAnalystText from './businessAnalystText';
import Heading from './Heading';
import Intro from './Intro';

export default function BusinessAnalyst() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box marginTop="10vh">
      <Heading
        backgroundImage={bussinessAnalystBanner}
        title="Business Analyst"
        subHeading={businessAnalystText.subHeading}
      />
      <Box margin="0 10vw">
        <br />
        <br />
        <Intro
          title={businessAnalystText.introTitle}
          subheading={businessAnalystText.introSubHeading}
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
            title="Clearly Communicate Analyses With Stakeholders"
            description={businessAnalystText.buildingModels}
            image={BuildingModels}
          />
          <FeaturesBox
            title="Easily Summarize and Extract Highlights From Datasets"
            description={businessAnalystText.interfaceText}
            image={Interface}
          />
          <FeaturesBox
            title="Automate and Schedule Workflows"
            description={businessAnalystText.modelDesigns}
            image={ArtificialIntelligenceChip}
          />
          <FeaturesBox
            title="Coordinate Between Technical and Non-Technical Teams"
            description={businessAnalystText.communicate}
            image={Graphs}
          />
        </Box>
        <Box>
          <Box paddingBottom="65px">
            <Typography color="#E7E7E7" lineHeight="45px" variant="solutionsSubheading">
              Typical Workflow for a Business Analyst
              <br />
              <br />
            </Typography>{' '}
          </Box>
          <Box display={matches ? '' : 'flex'} overflow="hidden">
            <WorkflowBox
              title="Load Data From Models and Various Sources"
              description={businessAnalystText.connectToDataSources}
              image={LoadData}
            />
            <RightChevron />
            <WorkflowBox
              title="Combine Datasets to Identify Key Metrics"
              description={businessAnalystText.processData}
              image={DataProcessing}
            />
            <RightChevron />
            <WorkflowBox
              title="Create Visuals to Communicate Results with Stakeholders"
              description={businessAnalystText.createModels}
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
