import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { DispatchType } from 'src/redux/store';
import { switchSlider } from 'src/redux/reducers/sliderReduser';
import { LeftOutlined } from '@ant-design/icons';

import { UiButton } from 'src/ui';

export function HeaderSlider() {
  const dispatch = useDispatch<DispatchType>();

  const collapseSlider = useCallback(() => {
    dispatch(switchSlider());
  }, [dispatch]);
  return (
    <div className='flex items-center justify-between h-14 border-b-2 px-2 font-bold'>
        Фильтры
        <UiButton onClick={collapseSlider} icon={<LeftOutlined className='text-sky-700' />}/>
    </div>
  );
}
