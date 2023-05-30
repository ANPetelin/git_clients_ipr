import { SpinProps } from 'antd';
import Table from 'antd/es/table';
import { FilterValue, SorterResult, TablePaginationConfig } from 'antd/es/table/interface';
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSorter } from 'src/redux/reducers/sortPaginationReduser';
import { IUsers } from 'src/redux/reducers/usersReduser';
import { getLoader, selectUsers } from 'src/redux/selectors';
import { DispatchType } from 'src/redux/store';

import { columns, loaderIcon } from './consts';

import type { TableProps } from 'antd/es/table';

import './index.css';

export const TableContainer = () => {
  const loading = useSelector(getLoader);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch<DispatchType>();

  const onChangeSort: TableProps<IUsers>['onChange'] = useCallback(
    (_: TablePaginationConfig, __: Record<string, FilterValue | null>, sorter: SorterResult<IUsers> | SorterResult<IUsers>[]) => {
      if (!Array.isArray(sorter)) {
        dispatch(changeSorter({ sorter }));
      }
    },
    [dispatch],
  );

  const loader: SpinProps = useMemo(
    () => ({
      spinning: loading,
      indicator: loaderIcon,
      size: 'large',
    }),
    [loading],
  );

  return (
    <div className="table-container h-[calc(100vh_-_65px_-_2.5rem)] overfow-x-hidden overflow-y-auto scroll-smooth bg-scroll border-[1px] rounded-t-lg">
      <Table loading={loader} bordered columns={columns} dataSource={users} onChange={onChangeSort} pagination={false} />
    </div>
  );
};
