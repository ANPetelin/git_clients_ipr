import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { DispatchType } from 'src/redux/store';
import { fetchUsers } from 'src/redux/reducers/usersReduser';

import './App.css';
import { MainContent } from './components';

export function App() {
  const dispatch = useDispatch<DispatchType>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <MainContent />;
}
