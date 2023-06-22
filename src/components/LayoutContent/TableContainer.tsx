import { Table } from 'antd';
import type { TableProps } from 'antd/es/table';
import { FilterValue, SorterResult, TablePaginationConfig } from 'antd/es/table/interface';
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SORTER_DATA } from 'src/consts';
import { selectUserAction } from 'src/redux/reducers/selectUserReduser';
import { changeSorter } from 'src/redux/reducers/sortPaginationReduser';
import { fetchUsers, IUsers } from 'src/redux/reducers/usersReduser';
import { getSortPaginationData, selectUsers } from 'src/redux/selectors';
import { DispatchType } from 'src/redux/store';

import { getColumns } from './consts';
import './index.css';

export const TableContainer = () => {
  const users = useSelector(selectUsers);
  const { sorter } = useSelector(getSortPaginationData);
  const dispatch = useDispatch<DispatchType>();

  const onChangeSort: TableProps<IUsers>['onChange'] = useCallback(
    (_: TablePaginationConfig, __: Record<string, FilterValue | null>, sorter: SorterResult<IUsers> | SorterResult<IUsers>[]) => {
      if (!Array.isArray(sorter)) {
        dispatch(changeSorter({ sorter }));
        dispatch(fetchUsers());
        localStorage.setItem(SORTER_DATA, JSON.stringify({ sorter }));
      }
    },
    [dispatch],
  );

  const selectUser = useCallback((record: IUsers) => {
    dispatch(selectUserAction(record));
  }, [dispatch]);

  const columns = useMemo(() => getColumns(sorter), [sorter]);

  return (
    <div className="table-container h-[calc(100vh_-_65px_-_2.5rem)] overfow-x-hidden overflow-y-auto scroll-smooth bg-scroll border-[1px] rounded-t-lg">
      <Table onRow={(record) => {
        return {
          onDoubleClick: () => selectUser(record),
        };
      }} bordered columns={columns} dataSource={users} onChange={onChangeSort} pagination={false}/>
    </div>
  );
};
