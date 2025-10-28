import Chart from '../components/Chart';
import SalesMetrics from '../components/SalesMetrics'


function Dashboard() {
  return (
    <div className="bg-slate-200 min-h-dvh p-5 lg:p-10 lg:ml-40">
      <SalesMetrics />
      <Chart />
    </div>
  )
}

export default Dashboard;