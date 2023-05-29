import { useFetchUsers } from 'src/hooks/useFetchUsers';

import './App.css';
import { MainContent } from './components';

export function App() {

  useFetchUsers();

  return <MainContent />;
}
