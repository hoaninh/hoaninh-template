import { ToastCustomView, ToastErrorView, ToastSuccessView, ToastWarningView } from '@components/toast/Toast';
import { LocalizationProvider } from '@localization';
import { MainStack } from '@navigation/MainStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { AppTheme } from '@theme';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications';

export interface InitialAppProps {}
const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

const queryClient = new QueryClient();

export const InitialApp = ({}: InitialAppProps) => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: asyncStoragePersister }}
    >
      <LocalizationProvider>
        <SafeAreaProvider>
          <ThemeProvider theme={AppTheme}>
            <NavigationContainer>
              <ToastProvider
                placement="top"
                renderType={{   
                  success: ToastSuccessView,
                  error: ToastErrorView,
                  warning: ToastWarningView,
                  custom: ToastCustomView,
                }}
              >
                <MainStack />
              </ToastProvider>
            </NavigationContainer>
          </ThemeProvider>
        </SafeAreaProvider>
      </LocalizationProvider>
    </PersistQueryClientProvider>
  );
};
