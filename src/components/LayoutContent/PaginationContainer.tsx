import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Pagination } from 'antd';
import { DispatchType } from 'src/redux/store';
import { changePagination } from 'src/redux/reducers/sortPaginationReduser';
import { getSortPaginationData, getTotalCountUser } from 'src/redux/selectors';
import { fetchUsers } from 'src/redux/reducers/usersReduser';
import { PAGINATION_DATA } from 'src/consts';

export const PaginationContainer = () => {
  const { page, pageSize } = useSelector(getSortPaginationData);
  const totalCountUser = useSelector(getTotalCountUser);
  const dispatch = useDispatch<DispatchType>();

  const onChangePagination = useCallback((page: number, pageSize: number) => {
    dispatch(changePagination({ page, pageSize }));
    dispatch(fetchUsers());
    localStorage.setItem(PAGINATION_DATA, JSON.stringify({ page, pageSize }));
  }, [dispatch]);  

  return (
    <div className='h-10 p-2 pb-10 flex justify-end border-[1px] border-t-0'>
        <Pagination pageSize={pageSize} current={page} onChange={onChangePagination} showLessItems hideOnSinglePage total={totalCountUser} showSizeChanger showTotal={(total) => `Всего записей ${total}`} />
    </div>
  );
};