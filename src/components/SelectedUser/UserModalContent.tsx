import { useEffect, useState } from 'react';
import { IUsers } from 'src/redux/reducers/usersReduser';

interface UserModalContentProps {
  selectedUser: IUsers | null;
}

interface UserData {
  avatar_url: string;
  bio: string;
  blog: string;
  company: null;
  created_at: string;
  email: null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: null;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: boolean;
  received_events_url: string;
  repos_url: string;
  site_admin: false;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: null;
  type: string;
  updated_at: string;
  url: string;
}

export const UserModalContent = ({ selectedUser }: UserModalContentProps) => {
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
