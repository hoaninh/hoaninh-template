import { StyleSheet, Text, View } from 'react-native';

export interface LoginScreenProps {}

export const LoginScreen = ({}: LoginScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
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
