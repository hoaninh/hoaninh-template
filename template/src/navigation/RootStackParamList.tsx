import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ROUTE_NAMES } from "./RouteNames";

export type RootStackParamList = {
    [ROUTE_NAMES.HOME_SCREEN]: undefined;
    [ROUTE_NAMES.HOME_DETAIL_SCREEN]: undefined;
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList> &
  BottomTabNavigationProp<RootStackParamList>