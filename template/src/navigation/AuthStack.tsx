import { ForgotPasswordScreen, LoginScreen, SignupScreen } from '@auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTE_NAMES } from './RouteNames';

const Stack = createNativeStackNavigator();
export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTE_NAMES.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={ROUTE_NAMES.SIGNUP_SCREEN} component={SignupScreen} />
      <Stack.Screen
        name={ROUTE_NAMES.FORGOT_PASSWORD_SCREEN}
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
};
