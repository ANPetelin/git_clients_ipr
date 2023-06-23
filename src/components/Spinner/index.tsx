import { useSelector } from 'react-redux';
import { getLoader } from 'src/redux/selectors';

import './index.css';

export function Spinner() {
  const loading = useSelector(getLoader);

  return loading ? <div data-testid='spinner' className='lds-dual-ring' onClick={(e) => e.stopPropagation()}/> : null;
}