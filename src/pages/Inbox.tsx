const Inbox = () => {
  return (
    <div className='rounded-2xl border border-(--app-border) bg-(--surface-primary) p-6'>
      <h1 className='text-2xl font-semibold text-(--app-text)'>Inbox</h1>
      <p className='mt-2 text-(--muted-text)'>
        Workflow notifications and pending updates will surface in this inbox.
      </p>
    </div>
  );
};

export default Inbox;
