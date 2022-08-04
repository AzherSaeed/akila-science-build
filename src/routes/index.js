import { useRoutes } from 'react-router-dom';
import workflowsRoutes from './workflowsRoutes';
import companyPagesRoutes from './companyPages';
import documentationRoutes from './documentation';

const routes = [].concat(companyPagesRoutes, documentationRoutes, workflowsRoutes);

export default function Router() {
  const element = useRoutes(routes);
  return element;
}
