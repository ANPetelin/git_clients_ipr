import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { DispatchType } from 'src/redux/store';
import { clearFieldValues } from 'src/redux/reducers/sliderReduser';
import { getSliderFields } from 'src/redux/selectors';

import { UiButton } from 'src/ui';

export function FooterSlider() {
  const fields = useSelector(getSliderFields);
  const dispatch = useDispatch<DispatchType>();

  console.log({
    fields,
  });

  const handleClickClearButton = useCallback(() => dispatch(clearFieldValues()), [dispatch]);

  return (
    <div className='border-t-2 h-24 flex items-center justify-around'>
        <UiButton className='bg-[#1C6FDC] w-32 h-10 rounded-2xl' onClick={() => console.log('ClickSubmitButton')} type='primary' label='Применить'/>
        <UiButton className='w-32 h-10 rounded-2xl' onClick={handleClickClearButton} label='Сбросить'/>
    </div>
  );
}
