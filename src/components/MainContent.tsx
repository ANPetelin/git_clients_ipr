import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { DispatchType } from 'src/redux/store';
import { fetchUsers } from 'src/redux/reducers/usersReduser';
import { LeftOutlined } from '@ant-design/icons';

import { TableContainer } from './table';

const { Sider, Content } = Layout;

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  backgroundColor: '#fff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#edf0f7',
};

export function MainContent() {
  const dispatch = useDispatch<DispatchType>();
  const [isVisibleSlider, setIsvisibleSlider] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <Layout>
        <Sider collapsed={isVisibleSlider} collapsedWidth={0} style={siderStyle}>
          <button
            onClick={() => {
              setIsvisibleSlider(!isVisibleSlider);
            }}
          >
            <LeftOutlined twoToneColor='#eb2f96' />
          </button>
        </Sider>
        <Content style={contentStyle}>
          <TableContainer />
        </Content>
      </Layout>
    </div>
  );
}
