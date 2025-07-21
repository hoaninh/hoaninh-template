import { BottomTabs } from '@components/bottomtabs';
import { HomeScreen } from '@home/HomeScreen';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { makeStyles, Text, useTheme, useThemeMode } from '@rneui/themed';
import { SearchScreen } from '@search/SearchScreen';
import { SettingScreen } from '@setting/SettingScreen';
import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { ROUTE_NAMES } from './RouteNames';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const { mode, setMode } = useThemeMode();
  const { theme } = useTheme();
  const styles = useStyles();

  const renderTabBar = useCallback((props: BottomTabBarProps) => {
    return <BottomTabs {...props} />;
  }, []);

  return (
    <>
      <Tab.Navigator
        initialRouteName={ROUTE_NAMES.HOME_SCREEN}
        screenOptions={() => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.border,
            borderBottomWidth: 0.5,
          },
          headerTitleStyle: {
            color: theme.colors.text,
          },
        })}
        tabBar={renderTabBar}
      >
        <Tab.Screen 
          name={ROUTE_NAMES.HOME_SCREEN} 
          options={{
            title: 'Home',
            headerRight: () => {
              return (
                <TouchableOpacity 
                  style={styles.container}
                  onPress={() => {
                    setMode(mode === 'light' ? 'dark' : 'light');
                  }} 
                >
                  <Text>{mode === 'light' ? 'Dark' : 'Light'}</Text>
                </TouchableOpacity>
              )
            }
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

const useStyles = makeStyles(theme => ({
  container:{
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.text,
    borderWidth: 1,
    marginRight: 16,
    padding: 4,
  }
}));
