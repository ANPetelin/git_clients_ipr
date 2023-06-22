import { Modal } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedUser } from 'src/redux/selectors';

import { CardUserContent } from './CardUserContent';

export function CardUser() {
  const selectedUser = useSelector(getSelectedUser);
  const [open, setOpen] = useState(false);

  const info = useCallback(() => {
    Modal.info({
      title: "Данные Юсера",
      content: <CardUserContent selectedUser={selectedUser}/>,
      open,
      onOk() {
        setOpen(false);          
      },
      okType: 'default',
    });
  }, [open, selectedUser]);

  useEffect(() => {
    selectedUser && info();
  }, [selectedUser, info]);

  return null;
}
