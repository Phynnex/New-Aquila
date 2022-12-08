import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['High ', 'Medium ', 'Low ', ],
  datasets: [
    {
      label: '# of Votes',
      data: [10, 9, 18],
      backgroundColor: [
        'rgba(237, 28, 36, 1)',
        'rgba(115, 99, 87, 1)',
        'rgba(198, 156, 109, 1)',

        
      ],
      borderColor: [
        'rgba(237, 28, 36, 1)',
        'rgba(115, 99, 87, 1)',
        'rgba(198, 156, 109, 1)',
      ],
      borderWidth: 0.3,
    },
  ],
};

const Chart = () => {
  return (
    <div style={{width: '300px', height:'300px'}} >
        <Doughnut  data={data}  />
    </div>
    );
}
export default Chart;

