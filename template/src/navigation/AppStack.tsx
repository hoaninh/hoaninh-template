import { BackButton } from '@components/nav';
import { HomeDetailScreen } from '@home/HomeDetail';
import { BottomTabNavigator } from '@navigation/BottomTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTE_NAMES } from './RouteNames';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,

};
export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTE_NAMES.BOTTOM_TAB} screenOptions={screenOptions}>
      <Stack.Screen
        name={ROUTE_NAMES.BOTTOM_TAB}
        component={BottomTabNavigator}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: 'Home Detail',
          headerBackTitle: 'Back',
          headerLeft: () => (
            <BackButton />
          )
        })}
        name={ROUTE_NAMES.HOME_DETAIL_SCREEN}
        component={HomeDetailScreen}
      />
    </Stack.Navigator>
  );
};
