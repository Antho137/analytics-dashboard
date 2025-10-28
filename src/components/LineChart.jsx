import { Line } from 'react-chartjs-2';

export const LineChart = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Product A',
        data: [11, 17, 15, 23],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.3,
      },
      {
        label: 'Product B',
        data: [8, 13, 16, 12],
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.3,
      },
      {
        label: 'Product C',
        data: [10, 19, 13, 17],
        fill: false,
        borderColor: 'rgba(0, 0, 205, 1)',
        tension: 0.3,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div>
      <h2 className='text-center'>Weekly Net Profit</h2>
      <Line data={data} options={options} />
    </div>
  );
}