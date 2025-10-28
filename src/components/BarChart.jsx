import { Bar } from 'react-chartjs-2';

export const VerticalBar = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Product A',
        barPercentage: 0.5,
        barThickness: 7,
        maxBarThickness: 9,
        minBarLength: 3,
        data: [58, 65, 62, 79],
        backgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderRadius: 5,
        borderWidth: 1,
      },
      {
        label: 'Product B',
        barPercentage: 0.5,
        barThickness: 7,
        maxBarThickness: 9,
        minBarLength: 3,
        data: [35, 55, 58, 53],
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderRadius: 5,
        borderWidth: 1,
      },
      {
        label: 'Product C',
        barPercentage: 0.5,
        barThickness: 7,
        maxBarThickness: 9,
        minBarLength: 3,
        data: [44, 74, 53, 68],
        backgroundColor: 'rgba(0, 0, 205, 1)',
        borderColor: 'rgba(0, 0, 205, 1)',
        borderRadius: 5,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2 className='text-center'>Weekly Product Sales</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
