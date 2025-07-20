import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { NavigationRoute, ParamListBase } from '@react-navigation/native';
import { makeStyles } from '@rneui/themed';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabItem } from './BottomTabItem';

export interface BottomTabsProps extends BottomTabBarProps {
  onItemPress?: () => void;
}

export const BottomTabs = ({ state, navigation }: BottomTabsProps) => {
  const insets = useSafeAreaInsets();
  const styles = useStyles();

  const onTabPress = useCallback(
    (route: NavigationRoute<ParamListBase, string>, isFocused: boolean) => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <View style={[styles.tabBar, { paddingBottom: insets.bottom }]}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          return (
            <BottomTabItem
              key={index}
              onItemPress={onTabPress}
              isFocused={isFocused}
              route={route}
            />
          );
        })}
      </View>
    </View>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.colors.background,
    zIndex: 100,
  },
  tabBar: {
    flexDirection: 'row',
    height: 76,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: theme.colors.background,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
  },
  mt5: { marginTop: 5 },
}));
