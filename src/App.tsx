import { useDispatch, useSelector } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { fetchUsers } from './redux/reducers/usersReduser';
import { DispatchType } from './redux/store';
import { getLoader, selectUsers } from './redux/selectors';

export function App() {
  const dispatch = useDispatch<DispatchType>();
  const loading = useSelector(getLoader);
  const users = useSelector(selectUsers);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => dispatch(fetchUsers('created:>=2021-01-01'))}>TEST_FETCH</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        {loading ? (
          <p>...Loading</p>
        ) : (
          <ul>
            {users?.map((user) => (
              <li key={user.id}>{user.login}</li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}
