import React from 'react';

interface NotFoundProps {
  message?: string;
}

const NotFound: React.FC<NotFoundProps> = ({
  message = "The page you're looking for doesn't seem to exist. Maybe it took a little detour.",
}) => {
  return (
    <div className='flex h-full w-full absolute flex-col items-center justify-center gap-4 text-center'>
      <div className='grid gap-4'>
        <h1 className='text-6xl font-bold text-gray-800'>404</h1>

        <h2 className='text-2xl font-semibold text-gray-600'>Page Not Found</h2>

        <p className='text-gray-500'>{message}</p>

        <div>
          <button
            type='button'
            className='bg-gray-500 text-white py-1 px-4 rounded hover:bg-gray-600 transition-colors cursor-pointer'
            onClick={() => {
              window.location.href = '/';
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
