import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

function ShowPipeline({ pipeline, handleRemoveOperation }) {
  const tempPipeline = [
    {
      title: 'title1',
      operations: {
        op1: 'op1 value',
        op11: 'op11 value',
      },
    },
    {
      title: 'title2',
      operations: {
        op2: 'op2 value',
        op22: 'op22 value',
        op222: 'op222 value',
      },
    },
    {
      title: 'title3',
      operations: {
        op4: ['value 1', 'value 2', 'value 3', 'value 4'],
        op44: 'op44 value',
      },
    },
  ];
  const camelCaseToRegular = (str) => {
    const result = str.replace(/([A-Z])/g, ' $1');
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };

  const objectToRows = (obj) => {
    const tempKey = [];
    const tempValue = [];
    for (let [key, value] of Object.entries(obj)) {
      if (Array.isArray(value)) {
        value = value.join(', ');
      }
      key = camelCaseToRegular(key);
      // value = camelCaseToRegular(value);
      tempKey.push({ key });
      tempValue.push({ key: value });
    }
    return tempKey.map((ele) => {
      const value = tempValue[ele]; // this is basically a trick to map over two arrays at once
      return (
        <tr key={ele}>
          <td>
            {ele.key} : {value.key}
          </td>
        </tr>
      );
    });
  };

  const [showPipeline, setShowPipeline] = useState(false);
  useEffect(() => {}, [showPipeline]);

  return (
    <div>
      <Box mt="4rem" color="white">
        <p className="model-heading-text"> Pipeline</p>
        <Box mt="2.5rem">
          <button
            className="modal-small-text submit-btn"
            onClick={() => {
              setShowPipeline(!showPipeline);
            }}
          >
            {showPipeline ? 'Hide' : 'Show'}
          </button>
          <br />
          <br />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '#171649',
          border: 1,
          borderColor: '#8b8ba5',
          display: showPipeline ? '' : 'none',
        }}
      >
        <table style={{ borderSpacing: '10px' }}>
          <tr>
            <th style={{ width: '20vw' }}>Operation</th>
            <th style={{ width: '20vw' }}>Inputs</th>
            <th style={{ width: '20vw' }}>Remove Step</th>
          </tr>
          {pipeline.map((ele, idx) => {
            const title = camelCaseToRegular(ele.title);
            return (
              <tr style={{ borderBottom: '2px', borderColor: 'white' }}>
                <td style={{ textAlign: 'center' }}>{title}</td>
                {objectToRows(ele.operations)}
                <td style={{ textAlign: 'center' }}>
                  <button
                    value={idx}
                    onClick={() => handleRemoveOperation(idx)}
                    style={{
                      borderRadius: 25,
                      width: '20%',
                      height: '2.5rem',
                      cursor: 'pointer',
                      backgroundColor: 'pink',
                      fontSize: 14,
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </Box>
    </div>
  );
}

export default ShowPipeline;
