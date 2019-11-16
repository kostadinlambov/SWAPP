import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ResponsiveRadar } from '@nivo/radar';

export default function  RadarChartComponent({data1}){
  console.log(data1)


 const data =  [
  {
    "taste": "fruity",
    "chardonay": 49,
    "carmenere": 47,
    "syrah": 103
  },
  {
    "taste": "bitter",
    "chardonay": 51,
    "carmenere": 90,
    "syrah": 75
  },
  {
    "taste": "heavy",
    "chardonay": 100,
    "carmenere": 47,
    "syrah": 105
  },
  {
    "taste": "strong",
    "chardonay": 102,
    "carmenere": 24,
    "syrah": 48
  },
  {
    "taste": "sunny",
    "chardonay": 27,
    "carmenere": 58,
    "syrah": 109
  }
]

  // const [metrics, setMetrics] = useState([]);

  // useEffect(() => {
  //   setMetrics(data);
  // }, [data]);

  const theme = {
    tooltip: {
      container: {
        background: '#FFF',
        color: '#000',
        boxShadow: '0 3px 9px rgba(0, 0, 0, 0.5)',
        fontFamily: 'sf-distant-galaxy',
        fontSize: 10,
      },
    },
    gridLabel: {
      color: '#000',
    },
  };

  return (
  
    <ResponsiveRadar
        data={data}
        keys={[ 'chardonay', 'carmenere', 'syrah' ]}
        indexBy={['taste']}
        margin={{ top: 20, right: 80, bottom: 40, left: 80 }}
        maxValue="auto"
        curve="linearClosed"
        borderWidth={7}
        borderColor={{ from: 'color' }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={10}
        enableDots={true}
        dotSize={7}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color' }}
        enableDotLabel={false}
        dotLabel="value"
        dotLabelYOffset={-12}

        colors={{ scheme: 'dark2' }}
        fillOpacity={0.50}
        blendMode="multiply"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        isInteractive={true}

        theme={theme}
    />
  );
};

// RadarChart.propTypes = {
//   theme: PropTypes.object.isRequired,
//   primaryHeadingFontColor: PropTypes.string,
//   data: PropTypes.any,
// };

// <ResponsiveRadar
//         data={data}
//         keys={[ 'cost', 'maxAtmosphericSpeed', 'crew', 'hyperdriveRating','maxMLPerHour' ]}
//         indexBy="taste"
//         maxValue="auto"
//         margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
//         curve="linearClosed"
//         borderWidth={2}
//         borderColor={{ from: 'color' }}
//         gridLevels={5}
//         gridShape="circular"
//         gridLabelOffset={36}
//         enableDots={true}
//         dotSize={10}
//         dotColor={{ theme: 'background' }}
//         dotBorderWidth={2}
//         dotBorderColor={{ from: 'color' }}
//         enableDotLabel={true}
//         dotLabel="value"
//         dotLabelYOffset={-12}
//         colors={{ scheme: 'nivo' }}
//         fillOpacity={0.25}
//         blendMode="multiply"
//         animate={true}
//         motionStiffness={90}
//         motionDamping={15}
//         isInteractive={true}
//         legends={[
//             {
//                 anchor: 'top-left',
//                 direction: 'column',
//                 translateX: -50,
//                 translateY: -40,
//                 itemWidth: 80,
//                 itemHeight: 20,
//                 itemTextColor: '#999',
//                 symbolSize: 12,
//                 symbolShape: 'circle',
//                 effects: [
//                     {
//                         on: 'hover',
//                         style: {
//                             itemTextColor: '#000'
//                         }
//                     }
//                 ]
//             }
//         ]}