import { AccessToken, User } from '@model';

export interface IStore {
  clear: () => void;
}

export interface AuthenticationStore extends IStore {
  accessToken?: AccessToken;
  setAccessToken: (token: AccessToken) => void;
  user?: User;
  setUser: (user: User) => void;
}
