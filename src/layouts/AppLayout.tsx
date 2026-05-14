import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import Header from '../components/common/Header';

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex min-h-screen bg-slate-100'>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className='flex min-w-0 flex-1 flex-col overflow-hidden'>
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
