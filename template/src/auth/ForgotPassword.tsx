import { StyleSheet, Text, View } from 'react-native';

export interface ForgotPasswordScreenProps {}
export const ForgotPasswordScreen = ({}: ForgotPasswordScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ForgotPassword</Text>
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
