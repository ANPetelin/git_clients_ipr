import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { DispatchType } from 'src/redux/store';
import { ChangeFieldPayload, changeFieldValues } from 'src/redux/reducers/sliderReduser';
import { getSliderFields } from 'src/redux/selectors';

import { UiInput, UiSelect } from 'src/ui';

export const MainContentSlider = memo(() => {
  const fields = useSelector(getSliderFields);
  const dispatch = useDispatch<DispatchType>();

  console.log({
    fields,
  });

  const changeField = useCallback(
    (newValue: ChangeFieldPayload) => {
      dispatch(changeFieldValues(newValue));
    },
    [dispatch],
  );

  return (
    <div className="grow pt-6 px-4 flex flex-col gap-8">
      <UiSelect label="Статус" fieldKey="type" value={fields.type} onChange={changeField} />
      <UiInput label="Код" fieldKey="node_id" value={fields.node_id} onChange={changeField} />
      <UiInput label="Наименование" fieldKey="login" value={fields.login} onChange={changeField} />
      <UiSelect label="Тип роли" fieldKey="score" value={fields.score} onChange={changeField} />
      <UiInput label="Описание" fieldKey="id" value={fields.id} onChange={changeField} />
    </div>
  );
});

MainContentSlider.displayName = 'MainContentSlider';
