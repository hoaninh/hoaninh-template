import { StyleSheet, Text, View } from 'react-native';

export interface SignupScreenProps {}

export const SignupScreen = ({}: SignupScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
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
