import React from 'react';
import {
  BuildingModels,
  ArtificialIntelligenceChip,
  DataProcessing,
  Modelling,
  LoadData,
  Graphs,
  Interface,
  softwareEngineerBanner,
} from '@assets/index';
import { RequestADemo } from '@components';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/styles';
import FeaturesBox from './FeaturesBox';
import WorkflowBox from './WorkflowBox';
import RightChevron from './RightChevron';
import softwareEngineerText from './softwareEngineerText';
import Heading from './Heading';
import Intro from './Intro';

export default function SoftwareEngineer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box marginTop="10vh">
      <Heading
        backgroundImage={softwareEngineerBanner}
        title="Software Engineer"
        subHeading={softwareEngineerText.subHeading}
      />
      <br />

      <br />
      <Box margin="0 10vw">
        <Intro
          title={softwareEngineerText.introTitle}
          subheading={softwareEngineerText.introSubHeading}
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
            description={softwareEngineerText.buildingModels}
            image={BuildingModels}
          />
          <FeaturesBox
            title="User Friendly Interface and Intuitive Designs"
            description={softwareEngineerText.interfaceText}
            image={Interface}
          />
          <FeaturesBox
            title="Iterate Model Designs"
            description={softwareEngineerText.modelDesigns}
            image={ArtificialIntelligenceChip}
          />
          <FeaturesBox
            title="Easily Communicate Model Designs and Output with Non-Technical Shareholders"
            description={softwareEngineerText.communicate}
            image={Graphs}
          />
        </Box>
        <Box margin="0 5%">
          <Box paddingBottom="65px">
            <Typography color="#E7E7E7" lineHeight="45px" variant="solutionsSubheading">
              Typical Workflow for a Software Engineer
            </Typography>{' '}
            <br />
            <br />
          </Box>
          <Box display={matches ? '' : 'flex'} overflow="hidden"s>
            <WorkflowBox
              title="Connect to Data Sources"
              description={softwareEngineerText.connectToDataSources}
              image={LoadData}
            />
            <RightChevron />
            <WorkflowBox
              title="Process Data"
              description={softwareEngineerText.processData}
              image={DataProcessing}
            />
            <RightChevron />
            <WorkflowBox
              title="Create Models"
              description={softwareEngineerText.createModels}
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
