import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { DispatchType } from 'src/redux/store';
import { fetchUsers } from 'src/redux/reducers/usersReduser';
import { changePagination, changeSorter, ChangePaginationPagePayload, ChangeSorterPayload } from 'src/redux/reducers/sortPaginationReduser';
import { ChangeFieldPayload, changeFieldValues, ISliderFields } from 'src/redux/reducers/sliderReduser';

export function useFetchUsers() {
  const dispatch = useDispatch<DispatchType>();

  const fillStore = useCallback(() => {
    const fieldsSliderData: ISliderFields | null = JSON.parse(localStorage.getItem('fieldsSliderData') ?? 'null');
    if (fieldsSliderData) {
      Object.entries(fieldsSliderData).forEach(([key, value]) => dispatch(changeFieldValues({ key, value } as ChangeFieldPayload)));
    }
    const paginationData: ChangePaginationPagePayload | null = JSON.parse(localStorage.getItem('paginationData') ?? 'null');
    if (paginationData) {
      dispatch(changePagination(paginationData));
    }
    const sorterData: ChangeSorterPayload | null = JSON.parse(localStorage.getItem('sorterData') ?? 'null');
    if (sorterData) {
      dispatch(changeSorter(sorterData));
    }
  }, [dispatch]);

  useEffect(() => {
    fillStore();
    dispatch(fetchUsers());
  }, [dispatch, fillStore]);
}
