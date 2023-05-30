import { useFetchUsers } from 'src/hooks/useFetchUsers';

import { MainContent } from './components';

export function App() {

  useFetchUsers();

  return <MainContent />;
}
