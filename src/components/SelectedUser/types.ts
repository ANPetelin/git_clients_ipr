
import { IUsers } from 'src/redux/reducers/usersReduser';

export interface CardUserContentProps {
  selectedUser: IUsers | null;
}

export interface UserData {
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