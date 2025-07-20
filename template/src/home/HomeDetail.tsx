import { RootNavigationProp } from '@navigation/RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';

export interface HomeDetailScreenProps {}

export const HomeDetailScreen = ({}: HomeDetailScreenProps) => {
  const navigation = useNavigation<RootNavigationProp>();
  return (
    <View style={styles.container}>
      <Text>HomeDetail</Text>
      <Button title="Go Back" onPress={() => {
        navigation.goBack();
      }} />
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
