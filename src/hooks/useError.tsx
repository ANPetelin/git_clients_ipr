import { Modal } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFetchError } from 'src/redux/selectors';

export function useError() {
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
}
