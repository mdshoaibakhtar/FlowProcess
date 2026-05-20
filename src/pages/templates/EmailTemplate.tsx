import { useAppLayoutContext } from '../../hooks/useAppLayoutContext';

const EmailTemplate = () => {
  const { t } = useAppLayoutContext();

  return (
    <div className='rounded-2xl border border-(--app-border) bg-(--surface-primary) p-6'>
      <h1 className='text-2xl font-semibold text-(--app-text)'>{t('page_email_template')}</h1>
      <p className='mt-2 text-(--muted-text)'>{t('inbox_description')}</p>
    </div>
  );
};

export default EmailTemplate;
