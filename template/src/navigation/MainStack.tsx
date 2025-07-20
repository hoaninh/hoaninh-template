import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LaunchScreen } from '@splash/LaunchScreen';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { ROUTE_NAMES } from './RouteNames';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTE_NAMES.LAUNCH_SCREEN}
    >
      <Stack.Screen name={ROUTE_NAMES.LAUNCH_SCREEN} component={LaunchScreen} />
      <Stack.Screen name={ROUTE_NAMES.AUTH_STACK} component={AuthStack} />
      <Stack.Screen name={ROUTE_NAMES.APP_STACK} component={AppStack} />
    </Stack.Navigator>
  );
};
