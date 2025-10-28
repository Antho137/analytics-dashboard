import { Doughnut } from 'react-chartjs-2';

export const DoughnutChart = () => {
  const data = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        label: 'Customers Online %',
        data: [37.5, 28.6, 33.9],
        backgroundColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(0, 0, 205, 1)',
        ],
        hoverOffset: 4,
      },
    ],
  }

  return (
    <div className='mx-auto'>
      <h2 className='text-center'>Customers Online</h2>
      <Doughnut data={data} />
    </div>
  )
}