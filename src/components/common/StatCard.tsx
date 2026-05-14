type Props = {
  title: string;
  value: string;
};

const StatCard = ({ title, value }: Props) => {
  return (
    <div className='rounded-xl bg-white p-6 shadow-sm'>
      <p className='text-sm text-slate-500'>{title}</p>
      <h3 className='mt-2 text-3xl font-bold'>{value}</h3>
    </div>
  );
};

export default StatCard;
