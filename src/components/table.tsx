import { useSelector } from 'react-redux';
import type { ColumnsType, TableProps } from 'antd/es/table';

import { getLoader, selectUsers } from '../redux/selectors';
import { LoadingOutlined } from '@ant-design/icons';
import Table from 'antd/es/table';
import { IUsers } from '../redux/reducers/usersReduser';
import { useMemo } from 'react';
import { Pagination } from 'antd';

type SizeType = 'large';

const loaderIcon = <LoadingOutlined style={{ fontSize: 50, marginTop: 200 }} spin />;

const columns: ColumnsType<IUsers> = [
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

const onChange: TableProps<IUsers>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log({ pagination, filters, sorter, extra });
};

const onChangePagination = (page: number, pageSize: number) => {
  console.log({ page, pageSize });
};

export const TableContainer = () => {
  const loading = useSelector(getLoader);
  const users = useSelector(selectUsers);

  const loader = useMemo(
    () => ({
      spinning: loading,
      indicator: loaderIcon,
      size: 'large' as SizeType,
    }),
    [loading],
  );

  return (
    <div
      className='h-[calc(100vh_-_65px)] m-8 p-4 flex flex-col overfow-x-hidden overflow-y-auto bg-white rounded-3xl scroll-smooth'
    >
      <Table
        loading={loader}
        bordered
        columns={columns}
        dataSource={users}
        onChange={onChange}
        pagination={false}
      />
      <Pagination className='mt-2' onChange={onChangePagination} showLessItems hideOnSinglePage total={234} showSizeChanger showTotal={(total) => `Всего записей ${total}`} />
    </div>
  );
};
