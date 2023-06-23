import { Input } from 'antd';
import { ChangeEvent, useCallback } from 'react';
import { ChangeFieldPayload, ISliderFieldsKeys } from 'src/redux/reducers/sliderReduser';

interface InputProps {
  label: string;
  onChange: (newValue: ChangeFieldPayload) => void;
  fieldKey: ISliderFieldsKeys;
  value?: string;
  testId?: string;
}

export const UiInput = ({ label, onChange, fieldKey, value, testId }: InputProps) => {
    
  const inputChange = useCallback((value: ChangeEvent<HTMLInputElement>) => {
    onChange({ key: fieldKey, value: value.target.value });
  }, [fieldKey, onChange]);

  return (
    <div>
      <p className='text-left text-neutral-400 pb-1'>{label}</p>
      <Input data-testid={testId} value={value} className='h-10 rounded-2xl' onChange={inputChange} />
    </div>
  );
};
