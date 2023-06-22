import { Layout } from 'antd';

import { LayoutContent } from './LayoutContent';
import { SliderWrapper } from './Slider';
import { CardUser } from './SelectedUser/CardUser';
import { Spinner } from './Spinner';

import './index.css';

export const MainContent = () => (
  <div className="App">
    <Spinner />
    <Layout>
      <SliderWrapper />
      <LayoutContent />
    </Layout>
    <CardUser />
  </div>
);
