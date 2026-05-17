import { useAppLayoutContext } from '../hooks/useAppLayoutContext';

const Requests = () => {
  const { t } = useAppLayoutContext();

  return (
    <div className='rounded-2xl border border-(--app-border) bg-(--surface-primary) p-6'>
      <h1 className='text-2xl font-semibold text-(--app-text)'>{t('page_requests')}</h1>
      <p className='mt-2 text-(--muted-text)'>{t('requests_description')}</p>
    </div>
  );
};

export default Requests;
