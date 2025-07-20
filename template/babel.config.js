module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@app': './src/app',
          '@utils': './src/utils',
          '@api': './src/api',
          '@assets': './src/assets',
          '@hooks': './src/hooks',
          '@network': './src/network',
          '@store': './src/store',
          '@navigation': './src/navigation',
          '@theme': './src/theme',
          '@model': './src/model',
          '@storage': './src/storage',
          '@splash': './src/splash',
          '@auth': './src/auth',
          '@home': './src/home',
          '@search': './src/search',
          '@setting': './src/setting',
          '@localization': './src/localization',
        },
      },
    ],
  ],
};
