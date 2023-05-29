import { Layout } from 'antd';

import { TableContainer } from './TableContainer';
import { ExpandSliderButton } from '../Slider/SliderComponents';
import { PaginationContainer } from './PaginationContainer';

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  backgroundColor: '#edf0f7',
};

export function LayoutContent() {
  return (
    <Content className="relative" style={contentStyle}>
      <ExpandSliderButton />
      <div className="h-[calc(100vh_-_65px)] m-8 p-4 flex flex-col justify-between bg-white rounded-3xl">
        <TableContainer />
        <PaginationContainer />
      </div>
    </Content>
  );
}
