import { ROUTE_NAMES } from '@navigation/RouteNames';
import { NavigationRoute, ParamListBase } from '@react-navigation/native';
import { Icon, makeStyles, useTheme } from '@rneui/themed';
import { useMemo } from 'react';
import { Pressable, View } from 'react-native';

export interface BottomTabItemProps {
  onItemPress: (
    route: NavigationRoute<ParamListBase, string>,
    isFocused: boolean,
  ) => void;
  isFocused: boolean;
  route: NavigationRoute<ParamListBase, string>;
}

export const BottomTabItem = ({
  onItemPress,
  isFocused,
  route,
}: BottomTabItemProps) => {
  const styles = useStyles(isFocused);
  const { theme } = useTheme();
  const tabIcon = useMemo(() => {
    switch (route.name) {
      case ROUTE_NAMES.HOME_SCREEN:
        return (
          <Icon name="chrome" type='font-awesome' size={24} color={isFocused ? 'blue': 'black'} />
        );
      case ROUTE_NAMES.SEARCH_SCREEN:
        return (
          <Icon name="safari" type='font-awesome' size={24} color={isFocused ? 'blue' : 'black'} />
        );
      case ROUTE_NAMES.SETTING_SCREEN:
        return (
          <Icon name="firefox" type='font-awesome' size={24} color={isFocused ? 'blue' : 'black'} />
        );
      default:
        return null;
    }
  }, [route, isFocused, theme]);

  return (
    <View style={styles.tab}>
      <Pressable
      hitSlop={20}
      accessibilityRole="button"
      onPress={() => {
        requestAnimationFrame(() => {
          onItemPress(route, isFocused);
        });
      }}
      style={styles.button}
    >
      {tabIcon}
    </Pressable>
    </View>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.colors.background,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
}));
