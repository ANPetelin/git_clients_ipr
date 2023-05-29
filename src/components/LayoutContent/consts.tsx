import { LoadingOutlined } from '@ant-design/icons';

import { IUsers } from 'src/redux/reducers/usersReduser';

import type { ColumnsType } from 'antd/es/table';

export const loaderIcon = <LoadingOutlined style={{ fontSize: 50, marginTop: 200 }} spin />;

export const columns: ColumnsType<IUsers> = [
  {
    title: 'Код',
    dataIndex: 'node_id',
    defaultSortOrder: 'ascend',
    sorter: true,
  },
  {
    title: 'Наименование',
    dataIndex: 'login',
    sorter: true,
  },
  {
    title: 'Тип роли',
    dataIndex: 'score',
    sorter: true,
  },
  {
    title: 'Описание',
    dataIndex: 'id',
  },
  {
    title: 'Статус',
    dataIndex: 'type',
  },
];