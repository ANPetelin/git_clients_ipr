import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { DispatchType } from 'src/redux/store';
import { switchSlider } from 'src/redux/reducers/sliderReduser';
import { MenuOutlined } from '@ant-design/icons';
import { UiButton } from 'src/ui';
import { getIsVisibleSlider } from 'src/redux/selectors';

export function ExpandSliderButton() {
    const isVisibleSlider = useSelector(getIsVisibleSlider);
    const dispatch = useDispatch<DispatchType>();
  
    const expandSlider = useCallback(() => {
      dispatch(switchSlider());
    }, [dispatch]);

  return isVisibleSlider ? null : (
    <UiButton typeId="expand-slider-button" onClick={expandSlider} icon={<MenuOutlined className="text-sky-700" />} className="absolute top-2 left-3" />
  );
}
