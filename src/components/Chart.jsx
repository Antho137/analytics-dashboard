import {
  Chart as ChartJS, ArcElement, BarElement, 
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { VerticalBar } from './BarChart';
import { DoughnutChart } from './ArcChart';
import { LineChart } from './LineChart';

ChartJS.register(ArcElement, BarElement, 
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {

  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center items-center mt-5 mb-10'>
        <div className='col-span-2 bg-white p-5'>
          <VerticalBar />
        </div>
        <div className='bg-white p-5'>
          <DoughnutChart />
        </div>
      </div>
      <div className='bg-white p-5 my-10'>
        <LineChart />
      </div>
    </div>
  );
};

export default Chart;
