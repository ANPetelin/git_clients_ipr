import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import { getIsVisibleSlider } from 'src/redux/selectors';

import { FooterSlider, HeaderSlider, MainContentSlider } from './SliderComponents';

const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
  backgroundColor: '#fff',
};

export function SliderWrapper() {
  const isVisibleSlider = useSelector(getIsVisibleSlider);

  return (
    <Sider collapsed={!isVisibleSlider} collapsedWidth={0} style={siderStyle} width={300} >
        <div className='flex flex-col h-full'>
        <HeaderSlider />
        <MainContentSlider />
        <FooterSlider />
        </div>
    </Sider>
  );
}
