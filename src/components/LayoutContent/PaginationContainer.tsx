import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { Pagination } from 'antd';
import { DispatchType } from 'src/redux/store';
import { changePagination } from 'src/redux/reducers/sortPaginationReduser';

export const PaginationContainer = () => {
  const dispatch = useDispatch<DispatchType>();

  const onChangePagination = useCallback((page: number, pageSize: number) => {
    dispatch(changePagination({ page, pageSize }));    
  }, [dispatch]);

  return (
    <div className='h-10 p-2 pb-10 flex justify-end border-[1px] border-t-0'>
        <Pagination onChange={onChangePagination} showLessItems hideOnSinglePage total={234} showSizeChanger showTotal={(total) => `Всего записей ${total}`} />
    </div>
  );
};
