import React, { createContext, PropsWithChildren, useContext } from 'react';
import Config from 'react-native-config';
import { MMKV } from 'react-native-mmkv';

const STORAGE_NAME = Config.STORAGE_NAME;
const STORAGE_ENCRYPTION_KEY = Config.STORAGE_ENCRYPTION_KEY;

export const storage = new MMKV({
  id: STORAGE_NAME ?? '',
  encryptionKey: STORAGE_ENCRYPTION_KEY ?? '',
});

export const LocalStorageContext = createContext<LocalStorageContextProps>({});

export interface LocalStorageContextProps {
  set?: (key: string, value: string | number | boolean) => void;
  getString?: (key: string) => void;
  remove?: (key: string) => void;
  removeAll?: () => void;
}

export const LocalStorageProvider = ({children}: PropsWithChildren) => {
  const set = (key: string, value: string | number | boolean) => {
    storage.set(key, value);
  };

  const getString = (key: string) => {
    return storage.getString(key);
  };
  const remove = (key: string) => {
    storage.delete(key);
  };

  const removeAll = () => {
    storage.clearAll();
  };

  return (
    <LocalStorageContext.Provider
      value={{
        set,
        getString,
        remove,
        removeAll,
      }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export const useLocalStorage = () => useContext(LocalStorageContext);

