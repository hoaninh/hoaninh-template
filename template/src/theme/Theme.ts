import { createTheme } from '@rneui/themed';
import { Spacing } from './Spacing';
import { FontFamilies, FontSizes, Typography } from './Typography';

export const AppTheme = createTheme({
  lightColors: {
    primary: '#AD0AE6',
    secondary: '#E60A17',
    tertiary: '#666666',
    success: '#05B01B',
    error: '#E30000',
    warning: '#FFC110',
    gradientPrimary: '#AD0AE6',
    gradientSecondary: '#AD0AE6',
    background: '#EDEDED',
    backgroundSecondary: '#FFFFFF',
    backgroundTertiary: '#F8EEF9',
    text: '#333333',
    textSecondary: '#999999',
    textTertiary: '#FFFFFF',
    textQuaternary: '#AD0AE6',
    border: '#CCCCCC',
    borderSecondary: '#AD0AE6',
    divider: '#F6F5F5',
  },
  darkColors: {
    primary: '#AD0AE6',
    secondary: '#E60A17',
    tertiary: '#666666',
    success: '#05B01B',
    error: '#E30000',
    warning: '#FFC110',
    gradientPrimary: '#AD0AE6',
    gradientSecondary: '#AD0AE6',
    background: '#EDEDED',
    backgroundSecondary: '#FFFFFF',
    backgroundTertiary: '#F8EEF9',
    text: '#333333',
    textSecondary: '#999999',
    textTertiary: '#FFFFFF',
    textQuaternary: '#AD0AE6',
    border: '#CCCCCC',
    borderSecondary: '#AD0AE6',
    divider: '#F6F5F5',
  },
  components: {
    Input: (props, theme) => ({
      inputStyle: {
        fontFamily: FontFamilies.regular,
        color: theme.colors.text,
        fontSize: 14,
        paddingHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
      labelStyle: {
        fontFamily: FontFamilies.regular,
        color: theme.colors.text,
        fontSize: FontSizes.small,
        paddingBottom: Spacing.xs,
        fontWeight: 'regular',
        textTransform: 'uppercase',
        letterSpacing: 1,
      },
      inputContainerStyle: {
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.colors.border,
        paddingHorizontal: Spacing.sm,
        justifyContent: 'center',
      },
      disabledInputStyle: {},
      placeholderTextColor: theme.colors.textSecondary,
      containerStyle: {
        paddingHorizontal: 0,
      },
      rightIconContainerStyle: {
        paddingRight: 0,
        marginVertical: 0,
        minHeight: 40,
      },
      errorStyle: { display: 'none' },
    }),
    Text: (_, theme) => ({
      style: {
        fontFamily: FontFamilies.regular,
        fontSize: FontSizes.body,
        color: theme.colors.text,
      },
    }),
    SearchBar: (props, theme) => {
      return {
        containerStyle: {
          flex: 1,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          padding: 0,
          backgroundColor: 'transparent',
        },
        inputContainerStyle: {
          width: '100%',
          padding: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: 30,
          height: 36,
          paddingLeft: 4,
        },
        leftIconContainerStyle: {
          backgroundColor: 'transparent',
          margin: 0,
        },
        inputStyle: {
          backgroundColor: 'transparent',
          color: theme.colors.textTertiary,
          margin: 0,
          padding: 0,
        },
        style: {
          backgroundColor: 'transparent',
          margin: 0,
          padding: 0,
          marginLeft: 4,
          fontSize: Typography.fontSizes.body,
          fontFamily: Typography.fontFamilies.regular,
          color: theme.colors.textTertiary,
        },
        placeholderTextColor: theme.colors.white,
        placeholder: 'Search',
      };
    },
    CheckBox: (props, theme) => ({
      iconRight: true,
      fontFamily: Typography.fontFamilies.regular,
      textStyle: {
        flex: 1,
        margin: 0,
        padding: 0,
        color: theme.colors.text,
        fontSize: Typography.fontSizes.body,
        fontFamily: Typography.fontFamilies.semibold,
      },
      wrapperStyle: {
        marginLeft: -4,
      },
      containerStyle: {
        paddingHorizontal: 0,
        backgroundColor: theme.colors.backgroundSecondary,
        paddingVertical: 0,
      },
    }),
    Button: () => ({
      titleStyle: {
        fontFamily: Typography.fontFamilies.regular,
        fontSize: Typography.fontSizes.body,
      },
    }),
  },
});
