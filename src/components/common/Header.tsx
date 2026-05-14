const Header = () => {
  return (
    <header className='border-b bg-white px-6 py-4'>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl font-semibold'>FlowProcess Dashboard</h2>

        <div className='flex items-center gap-3'>
          <div className='rounded-full bg-slate-900 px-4 py-2 text-sm text-white'>Admin</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
