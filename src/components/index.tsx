import { Layout } from 'antd';

import { SliderWrapper } from './Slider';
import { LayoutContent } from './LayoutContent';

export function MainContent() {
  return (
    <div className="App">
      <Layout>
        <SliderWrapper />
        <LayoutContent />
      </Layout>
    </div>
  );
}
