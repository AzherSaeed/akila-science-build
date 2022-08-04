import React, { useEffect, useState } from 'react';
import RadioScrollProcess from '@components/RadioButtonsScroll/RadioScrollProcess';
import { DataProcessingContext } from '@contexts/DataProcessingContext';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { processLabels } from './text';
import LoadData from './LoadData';
import ListTabs from './ListTabs';
import Preview from './Preview';
import Pipeline from './Pipeline';
import SaveSubmit from './SaveSubmit';
import SubHeading from './SubHeading';
import methods from './methods';
import MethodsContainer from './MethodsContainer';

export default function DataProcessing() {
  const [tab, setTab] = useState('Cleaning');

  // Use the find method to ensure we're always returning the Cleaning
  // array from processLabels  (rather than hard coding an index value)
  const updateMethods = () => processLabels.find((x) => x.title === tab);
  const initialMethods = updateMethods();
  const [methodsList, setMethodsList] = useState(initialMethods.labels);

  const [selectedMethod, setSelectedMethod] = useState('Drop Columns');

  // this captures each processing method selected by the user and fed into the
  // pipeline component to display each selected method to the user
  const [pipeline, setPipeline] = useState([]);
  const updatePipeline = (newStep) => {
    const newPipeline = [...pipeline, newStep];
    setPipeline(newPipeline);
  };

  const columnNames = [
    'Column 1',
    'Column 2',
    'Column 3',
    'Column 4',
    'Column 5',
    'Column 6',
    'Column 7',
    'Column 8',
    'Column 9',
  ];

  const [methodDefinition, setMethodDefintion] = useState({});
  const [methodDefinitionsList, setMethodDefintionsList] = useState([]);

  const removeOperation = (idx) => {
    const temp = [...finalOperation];
    temp.splice(idx, 1);
    // setFinalOperation(temp);
  };

  const updateMethodDefinitionsList = () => {
    methods.forEach((method) => {
      if (method.method === selectedMethod) {
        setMethodDefintionsList(method.definitions);
        setMethodDefintion({
          title: method.method,
          definition: method.definition,
        });
      }
    });
  };

  const handleRemoveOperation = (idx) => {
    console.log(idx, '<<< idx');
  };

  useEffect(() => {
    const results = updateMethods();
    setMethodsList(results.labels);
    updateMethodDefinitionsList();
  }, [tab, selectedMethod, methodsList, pipeline, methodDefinitionsList]);

  return (
    <Box color="white">
      <Typography variant="h1">Data Processing</Typography>
      <br /> <br />
      <Container>
        <LoadData />
        <SubHeading />
        <ListTabs tab={tab} setTab={setTab} setMethodsList={setMethodsList} />
        <Box mt="3rem">
          <Grid container columnSpacing={3} rowSpacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3">
                {tab} <br />
              </Typography>
              <RadioScrollProcess newLabels={methodsList} handleChange={setSelectedMethod} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3">Method Definition</Typography>
              <Box
                minHeight="30vh"
                maxHeight="40vh"
                padding="5%"
                overflow="scroll"
                sx={{
                  backgroundColor: '#171649',
                  border: 1,
                  borderColor: '#8b8ba5',
                }}
              >
                <Typography variant="solutionsWorkflowBoxTitle">
                  {methodDefinition.title}
                  <br />
                </Typography>
                {methodDefinition.definition} <br />
                <br />
                {!methodDefinitionsList.length
                  ? 'False'
                  : methodDefinitionsList.map((method) => (
                      <>
                        <Grid item xs={12} md={12} key={method.title}>
                          <Typography fontWeight="600" key={method.title}>
                            {method.title}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={12} key={`${method.title}-definition`}>
                          {method.definition} <br />
                          <br />
                        </Grid>
                      </>
                    ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={12}>
              <Box>
                <Typography variant="h3">{selectedMethod}</Typography>
                <Divider color="#E3E3E3" />
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <DataProcessingContext.Provider value={{ columnNames, updatePipeline }}>
                <MethodsContainer>
                  {methods.map((method) =>
                    method.method === selectedMethod ? (
                      <div key={method}>{method.component}</div>
                    ) : (
                      ''
                    )
                  )}
                </MethodsContainer>
              </DataProcessingContext.Provider>
            </Grid>
            <Grid>
              <Preview pipeline={pipeline} handleRemoveButton={handleRemoveOperation} />
              <Pipeline
                pipeline={pipeline}
                handleRemoveOperation={handleRemoveOperation}
                removeOperation={removeOperation}
              />
              <SaveSubmit />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
