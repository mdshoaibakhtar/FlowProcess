import StatCard from '../components/common/StatCard';

const Dashboard = () => {
  return (
    <div>
      <h1 className='mb-6 text-3xl font-bold'>Dashboard</h1>

      <div className='grid grid-cols-4 gap-4'>
        <StatCard title='Total Workflows' value='12' />
        <StatCard title='Pending Approvals' value='8' />
        <StatCard title='Completed' value='42' />
        <StatCard title='Rejected' value='3' />
      </div>
    </div>
  );
};

export default Dashboard;
