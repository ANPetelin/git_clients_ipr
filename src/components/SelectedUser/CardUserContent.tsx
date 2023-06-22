import { useEffect, useState } from 'react';

import { CardUserContentProps, UserData } from './types';

export const CardUserContent = ({ selectedUser }: CardUserContentProps) => {
  const [userData, setUserData] = useState<UserData | null>();

  useEffect(() => {
    (async () => {
      const resultJson = selectedUser?.url ? await fetch(selectedUser.url) : null;
      const result = resultJson ? await resultJson.json() : undefined;
      setUserData(result);
    })();
  }, [selectedUser]);

  return (
    <div>
      <img className="w-36 pb-4" src={selectedUser?.avatar_url} alt="userPhoto" />
      <p className="pb-4">{userData?.site_admin ? 'Чувак уважаемый админ' : 'Челик обычный юсер'}</p>
      <p className="pb-4">Товарищ создан: {new Date(userData?.created_at ?? '').toLocaleString()}</p>
      <p className="pb-4">Откуда: {userData?.location ?? 'от верблюда'}</p>
      <p className="pb-4">Количество репозиториев: {userData?.public_repos}</p>
    </div>
  );
};
