import React from 'react';
import { BlueLine } from '@components/index';
import {rightArrow , downArrow , LoadDataDatabase , processData , analyzeData ,  visulizeData } from '@assets'
import {Box, Container, Grid, Typography} from '@mui/material';
import TemplateCard from './TemplateCard'
import styles from './AnalyticsDiagram.module.css';


export default function AnalyticsDiagram() {
  return (
    <div className={styles.Container}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justify-content="center"
      >
        <Typography mb={2} variant="solutionsSubheading">Platform</Typography>
        <Box>
          <BlueLine />
        </Box>
      </Box>
        <Container sx={{ maxWidth:'1126px'  }} maxWidth={false} disableGutters>
            <div className={styles.topContainer}>
                <div className={styles.outlineStartBox}>Outline Objective</div>
                <img className={styles.topDownArrow} src={downArrow} alt="" />
                <img className={styles.bottomDownArrow} src={downArrow} alt="" />
                <div className={styles.outlineEndBox}>End Users & Consumers</div>
                <Box pt={10} pl={5} pr={5} pb={10} >
                    <Container disableGutters>
                        <Box
                            sx={{
                                padding: '64px 20px 106px  20px',
                                border: '9px solid #1A1951',
                                borderRadius: '10px',
                            }}
                        >
                            <Box display="flex" justifyContent="center">
                                <Typography sx={{ paddingBottom: '26px' , fontSize : '26px' , fontWeight : '600' }} variant="platformSubHeading">
                                    Akila Analytics
                                </Typography>
                            </Box>
                            <Grid p={0} container spacing={3} m={0}>
                                <TemplateCard arrow={rightArrow} icon={LoadDataDatabase} text="Load Data" />
                                <TemplateCard arrow={rightArrow} icon={processData} text="Process data" />
                                <TemplateCard
                                    arrow={rightArrow}
                                    icon={analyzeData}
                                    text="Analyze and Create Data"
                                />
                                <TemplateCard icon={visulizeData} text="Visualize Results" />
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </div>
        </Container>

    </div>
  );
}
