import { Modal } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedUser } from 'src/redux/selectors';

import { UserModalContent } from './UserModalContent';

export function UserModal() {
  const selectedUser = useSelector(getSelectedUser);
  const [open, setOpen] = useState(false);

  const info = useCallback(() => {
    Modal.info({
      title: "Данные Юсера",
      content: <UserModalContent selectedUser={selectedUser}/>,
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
