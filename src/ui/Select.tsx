import { Select } from 'antd';
import { useCallback } from 'react';
import { ChangeFieldPayload, ISliderFieldsKeys } from 'src/redux/reducers/sliderReduser';

import './index.css';

interface OptionType {
  value: string;
  label: string;    
}
interface SelectProps {
  label: string;
  onChange: (newValue: ChangeFieldPayload) => void;
  fieldKey: ISliderFieldsKeys;
  value?: string;
  options?: OptionType[];
  testId?: string;
}

const mockOptions = [
  {
    value: '1',
    label: 'test1',
  },
  {
    value: '2',
    label: 'test2',
  },
];

export const UiSelect = ({ label, onChange, fieldKey, value, options, testId }: SelectProps) => {
  const SelectChange = useCallback((value: string) => {
    onChange({ key: fieldKey, value });
  }, [fieldKey, onChange]);
  return (
    <div className='ui-select-container'>
      <p className='text-left text-neutral-400 pb-1'>{label}</p>
      <Select virtual={false} data-testid={testId} options={options ?? mockOptions} value={value} size='large' className='text-left w-full rounded-3xl' onChange={SelectChange} />
    </div>
  );
};
