import EmailBuilder from '../../components/common/UnlayerEditor';
import DataTable from '../../features/table/DataTable';
import { templateColumns } from '../../features/table/workflowColumns';
import { templateData } from '../../features/table/workflowData';
import { useAppLayoutContext } from '../../hooks/useAppLayoutContext';

const EmailTemplate = () => {
  const { t } = useAppLayoutContext();

  return (
    <div className='w-full h-full'>
      <DataTable
        title='Workflows'
        data={templateData}
        columns={templateColumns}
        isDialog
        dialogComponent={
          <div className='w-full h-full'>
            <EmailBuilder />
          </div>
        }
        dialogClass='w-full h-full'
        createNewActionButtonLabel={t('Create New Template')}
      />
    </div>
  );
};

export default EmailTemplate;
