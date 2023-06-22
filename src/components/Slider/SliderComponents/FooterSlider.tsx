import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { DispatchType } from 'src/redux/store';
import { clearFieldValues } from 'src/redux/reducers/sliderReduser';
import { fetchUsers } from 'src/redux/reducers/usersReduser';
import { resetPagination } from 'src/redux/reducers/sortPaginationReduser';
import { getSliderFields } from 'src/redux/selectors';
import { UiButton } from 'src/ui';
import { FIELDS_SLIDER_DATA, PAGINATION_DATA } from 'src/consts';

export function FooterSlider() {
  const fields = useSelector(getSliderFields);
  const dispatch = useDispatch<DispatchType>();

  const handleFetchUsers = useCallback(() => {
    dispatch(resetPagination());
    dispatch(fetchUsers());
    localStorage.setItem(FIELDS_SLIDER_DATA, JSON.stringify(fields));
    localStorage.setItem(PAGINATION_DATA, JSON.stringify({ page: 1, pageSize: 10 }));
  }, [dispatch, fields]);
  const handleClickClearButton = useCallback(() => {
    dispatch(clearFieldValues());
    dispatch(resetPagination());
    dispatch(fetchUsers());
    localStorage.clear();
  }, [dispatch]);

  return (
    <div className='border-t-2 h-24 flex items-center justify-around'>
        <UiButton className='bg-[#1C6FDC] w-32 h-10 rounded-2xl' onClick={handleFetchUsers} type='primary' label='Применить'/>
        <UiButton className='w-32 h-10 rounded-2xl' onClick={handleClickClearButton} label='Сбросить'/>
    </div>
  );
}
