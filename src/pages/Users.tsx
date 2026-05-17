import { useAppLayoutContext } from '../hooks/useAppLayoutContext';

const Users = () => {
  const { t } = useAppLayoutContext();

  return (
    <div className='rounded-2xl border border-(--app-border) bg-(--surface-primary) p-6'>
      <h1 className='text-2xl font-semibold text-(--app-text)'>{t('page_users')}</h1>
      <p className='mt-2 text-(--muted-text)'>{t('users_description')}</p>
    </div>
  );
};

export default Users;
