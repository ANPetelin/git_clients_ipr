import { useFetchUsers } from 'src/hooks/useFetchUsers';
import { useError } from 'src/hooks/useError';

import { MainContent } from './components';

export function App() {

  useFetchUsers();
  useError();

  return <MainContent />;
}
