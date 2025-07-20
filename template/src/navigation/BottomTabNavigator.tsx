import { BottomTabs } from '@components/bottomtabs';
import { HomeScreen } from '@home/HomeScreen';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { SearchScreen } from '@search/SearchScreen';
import { SettingScreen } from '@setting/SettingScreen';
import React, { useCallback } from 'react';
import { ROUTE_NAMES } from './RouteNames';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const renderTabBar = useCallback((props: BottomTabBarProps) => {
    return <BottomTabs {...props} />;
  }, []);

  return (
    <>
      <Tab.Navigator
        initialRouteName={ROUTE_NAMES.HOME_SCREEN}
        screenOptions={() => ({
          headerShown: true,
        })}
        tabBar={renderTabBar}
      >
        <Tab.Screen 
          name={ROUTE_NAMES.HOME_SCREEN} 
          options={{
            title: 'Home',
          }} 
          component={HomeScreen}
        />
        <Tab.Screen 
          options={{
            title: 'Search',
          }} 
          name={ROUTE_NAMES.SEARCH_SCREEN} 
          component={SearchScreen} 
        />
        <Tab.Screen
          options={{
            title: 'Settings',
          }}
          name={ROUTE_NAMES.SETTING_SCREEN}
          component={SettingScreen}
        />
      </Tab.Navigator>
    </>
  );
};
