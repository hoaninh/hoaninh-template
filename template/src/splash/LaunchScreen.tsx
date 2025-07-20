import { ROUTE_NAMES } from '@navigation/RouteNames';
import { StackActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const LaunchScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.dispatch(StackActions.replace(ROUTE_NAMES.APP_STACK));
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>LaunchScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
