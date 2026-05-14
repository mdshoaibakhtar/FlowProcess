const Requests = () => {
  return (
    <div className='rounded-2xl border border-(--app-border) bg-(--surface-primary) p-6'>
      <h1 className='text-2xl font-semibold text-(--app-text)'>Requests</h1>
      <p className='mt-2 text-(--muted-text)'>
        Incoming and in-progress approval requests can be tracked from this queue.
      </p>
    </div>
  );
};

export default Requests;
