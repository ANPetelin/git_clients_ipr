import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DispatchType } from 'src/redux/store';
import { fetchUsers } from 'src/redux/reducers/usersReduser';

import { getSortPaginationData } from 'src/redux/selectors';

export function useFetchUsers() {
  const sortPaginationData = useSelector(getSortPaginationData);
  const dispatch = useDispatch<DispatchType>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, sortPaginationData]);
}
