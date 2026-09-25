import integrationJson from '../assets/integration.json';
import { IntegrationCard } from '../components/common/Integrationcard';

const Integrations = () => {
  return (
    <div>
      {integrationJson.map((eachIntegration) => {
        return <IntegrationCard integration={eachIntegration} />;
      })}
    </div>
  );
};

export default Integrations;
