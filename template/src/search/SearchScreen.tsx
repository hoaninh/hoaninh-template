import { makeStyles } from '@rneui/themed';
import { Text, View } from 'react-native';

export interface SearchScreenProps {}

export const SearchScreen = ({}: SearchScreenProps) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
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