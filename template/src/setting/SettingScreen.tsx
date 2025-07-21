import { makeStyles } from '@rneui/themed';
import { Text, View } from 'react-native';

export interface SettingScreenProps {}

export const SettingScreen = ({}: SettingScreenProps) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setting</Text>
    </View>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  text: {
    color: theme.colors.text,
  }
}));