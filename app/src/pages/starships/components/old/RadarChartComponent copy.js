// import React from 'react';
// import styled from 'styled-components';

// // import RadarChart from 'react-svg-radar-chart';
// import 'react-svg-radar-chart/build/css/index.css';

// import { Radar } from 'react-chartjs-2';

// export default function RadarChartComponent(props) {
//   // const data = [
//   //   {
//   //     data: {
//   //       battery: 0.7,
//   //       design: 0.8,
//   //       useful: 0.9,
//   //       speed: 0.67,
//   //       weight: 0.8,
//   //     },
//   //     meta: { color: 'blue' },
//   //   },
//   //   ,
//   // ];

//   const data = {
//     labels: ['Max Atm. Speed', 'Max ML/h', 'HyperD Rat.', 'Crew', 'Cost'],
//     datasets: [0.6, 0.85, 0.5, 0.6, 0.7],
//   };

//   const captions = {
//     // columns
//     battery: 'Max Atm. Speed',
//     design: 'Max ML/h',
//     useful: 'HyperD Rat.',
//     speed: 'Crew',
//     weight: 'Cost',
//   };

//   const options = {
//     scales: 8,
//     dots: true,
//     'background-color': 'red',
//   };

//   return (
//     <StyledChartWrapper>
//       <Radar data={data} options={options} />
//     </StyledChartWrapper>
//   );
// }

// const StyledChartWrapper = styled.div`
//   margin: auto;
//   text-align: center;
//   background-color: lightblue;
// `;
