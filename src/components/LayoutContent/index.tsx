import { Layout } from 'antd';

import { TableContainer } from './table';
import { ExpandSliderButton } from '../Slider/SliderComponents';

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  backgroundColor: '#edf0f7',
};

export function LayoutContent() {
  return (
    <Content className='relative' style={contentStyle}>
        <ExpandSliderButton />
        <TableContainer />
    </Content>
  );
}
