import { getFetchError } from 'src/redux/selectors';

import { Modal } from 'antd';
import { useSelector } from 'react-redux';

import './index.css';
import { useCallback, useEffect, useState } from 'react';

export function ErrorContainer() {
  const fetchError = useSelector(getFetchError);
  const [open, setOpen] = useState(false);

  const info = useCallback(() => {
    Modal.info({
      title: "Ошибка",
      content: fetchError?.message,
      open,
      onOk() {
        setOpen(false);          
      },
      okType: 'default',
    });
  }, [fetchError, open]);

  useEffect(() => {
    fetchError?.message && info();
  }, [fetchError, info]);

  return null;
}
