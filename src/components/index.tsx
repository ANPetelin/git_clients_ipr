import './index.css';

import { Layout } from 'antd';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getLoader } from 'src/redux/selectors';

import { LayoutContent } from './LayoutContent';
import { SliderWrapper } from './Slider';
import { ErrorContainer } from './ErrorContainer';
import { UserModalContainer } from './SelectedUser/UserModalContainer';

export function MainContent() {
  const loading = useSelector(getLoader);

  const spinner = useMemo(() => loading ? <div className='lds-dual-ring' onClick={(e) => e.stopPropagation()}/> : null, [loading]);

  return (
    <div className="App">
      {spinner}
      <Layout>
        <SliderWrapper />
        <LayoutContent />
      </Layout>
      <ErrorContainer />
      <UserModalContainer />
    </div>
  );
}
