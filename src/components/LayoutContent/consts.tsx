import { IUsers } from 'src/redux/reducers/usersReduser';

import type { ColumnsType } from 'antd/es/table';
import { SorterResult } from 'antd/es/table/interface';

export const getColumns = (sorter: Pick<SorterResult<IUsers>, "field" | "order">):ColumnsType<IUsers> => [
  {
    title: 'Код',
    dataIndex: 'node_id',
    sortOrder: sorter.field === 'node_id' ? sorter.order : undefined,
    sorter: true,
  },
  {
    title: 'Логин',
    dataIndex: 'login',
    sortOrder: sorter.field === 'login' ? sorter.order : undefined,
    sorter: true,
  },
  {
    title: 'Тип роли',
    dataIndex: 'score',
    sortOrder: sorter.field === 'score' ? sorter.order : undefined,
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