import { StyleSheet, Text, View } from 'react-native';

export interface SettingScreenProps {}

export const SettingScreen = ({}: SettingScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
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
