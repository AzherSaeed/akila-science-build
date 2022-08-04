import React from 'react';
import { Route } from 'react-router-dom';
import FunctionTemplate from '@pages/documentation/FunctionTemplate';
import { mlModels } from '@utils/machineLearningModels';
import MachineLearningTemplate from './MachineLearningTemplate';
import MachineLearningHome from './MachineLearningHome';

// export default function MachineLearning() {
//  return (
//    <>
//      <Route exact path="/workflows/machine-learning">
//        <MachineLearningHome mlModels={mlModels} />
//      </Route>
//      <Route exact path="/workflows/machine-learning/*">
//        <MachineLearningTemplate>
//          <h1 style={{ marginTop: "20vh", color: "white" }}>Hello</h1>
//          <FunctionTemplate />
//        </MachineLearningTemplate>
//      </Route>
//    </>
//  );
// }
