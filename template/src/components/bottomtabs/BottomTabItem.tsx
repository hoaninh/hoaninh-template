import { ROUTE_NAMES } from '@navigation/RouteNames';
import { NavigationRoute, ParamListBase } from '@react-navigation/native';
import { Icon, makeStyles } from '@rneui/themed';
import { useMemo } from 'react';
import { Pressable } from 'react-native';

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

  const tabIcon = useMemo(() => {
    switch (route.name) {
      case ROUTE_NAMES.HOME_SCREEN:
        return (
          <Icon name="home" type='feather' size={24} color={isFocused ? 'blue' : 'black'} />
        );
      case ROUTE_NAMES.SEARCH_SCREEN:
        return (
          <Icon name="search" type='feather' size={24} color={isFocused ? 'blue' : 'black'} />
        );
      case ROUTE_NAMES.SETTING_SCREEN:
        return (
          <Icon name="settings" type='feather' size={24} color={isFocused ? 'blue' : 'black'} />
        );
      default:
        return null;
    }
  }, [route, isFocused]);

  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => {
        requestAnimationFrame(() => {
          onItemPress(route, isFocused);
        });
      }}
      style={styles.tab}
    >
      {tabIcon}
    </Pressable>
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
}));
