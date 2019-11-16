import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';

export default function  RadarChartComponent({data}){
  console.log(data)

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
        keys={[ 'cost', 'maxAtmosphericSpeed', 'crew', 'hyperdriveRating', 'maxMLPerHour'  ]}
        indexBy={['label']}
        margin={{ top: 20, right: 80, bottom: 40, left: 80 }}
        maxValue={100}
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
