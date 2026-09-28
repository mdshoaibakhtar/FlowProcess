import integrationJson from '../assets/integration.json';
import { IntegrationCard } from '../components/common/Integrationcard';
import type { Integration } from '../types';

const Integrations = () => {
  return (
    <div className='flex flex-wrap justify-between gap-x-4 gap-y-6'>
      {integrationJson.map((eachIntegration: Integration) => (
        <IntegrationCard
          key={eachIntegration.id}
          integration={eachIntegration}
          onClick={() => {}}
        />
      ))}
    </div>
  );
};

export default Integrations;
