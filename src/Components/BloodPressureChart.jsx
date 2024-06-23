import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const BloodPressureChart = ({ diagnosis_history }) => {
  const truncatedHistory = diagnosis_history.slice(0, 6).reverse();
  const systolicData = truncatedHistory.map(month_his => month_his.blood_pressure.systolic.value);
  const diastolicData = truncatedHistory.map(month_his => month_his.blood_pressure.diastolic.value);
  const labels = truncatedHistory.map(month_his => `${month_his.month}, ${month_his.year}`);
  const data = {
    labels:labels,
    datasets: [
      {
        label: 'Systolic',
        data: systolicData,
        borderColor: '#E66FD2',
        backgroundColor: '#E66FD2',
        borderWidth: 1,
        fill: false,
        tension: 0.4
      },
      {
        label: 'Diastolic',
        data: diastolicData,
        borderColor: '#7E6CAB',
        backgroundColor: '#7E6CAB',
        borderWidth: 1,
        fill: false,
        tension: 0.4
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: true,
        grid:{
          display:false
        }
      },
      y: {
        beginAtZero: true,
        min: 60,
        max: 180,
      },
    },
  };

  return <Line className='h-[24vh]' data={data} options={options} />;
};

export default BloodPressureChart;