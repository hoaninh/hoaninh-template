import { LocalStorage } from '@storage';
import { create } from 'zustand';
import { createJSONStorage, persist, StateStorage } from 'zustand/middleware';
import { AuthenticationStore } from './types';

const storage: StateStorage = {
  getItem: (name: string): string | null => {
    return LocalStorage.getString(name) ?? null;
  },
  setItem: (name: string, value: string): void => {
    return LocalStorage.set(name, value);
  },
  removeItem: (name: string): void => {
    return LocalStorage.delete(name);
  },
};

interface User {
  id: string;
  name: string;
  email: string;
}

interface Store {
  user: User | null;
  setUser: (user: User) => void;
}

export const useStore = create<Store>()(
  persist(
    set => ({
      user: null,
      setUser: (user: User) => set({ user }),
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => storage),
    },
  ),
);

export const useAuthenticationStore = create<AuthenticationStore>()(
  persist(
    set => ({
      accessToken: undefined,
      user: undefined,
      setUser: user => {
        set({ user: user });
      },
      setAccessToken: newToken => {
        set({ accessToken: newToken });
      },
      clear: () => {
        set({
          accessToken: undefined,
          user: undefined,
        });
      },
    }),
    {
      name: 'AuthenticationStore',
      storage: createJSONStorage(() => storage),
    },
  ),
);
