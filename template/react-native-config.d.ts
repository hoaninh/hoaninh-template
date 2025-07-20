declare module 'react-native-config' {
  export interface NativeConfig {
    STORAGE_NAME?: string;
    STORAGE_ENCRYPTION_KEY?: string;
    API_BASE_URL?: string;
  }

    export const Config: NativeConfig
    export default Config
  }