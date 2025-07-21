import { useLogin } from '@api';
import { useLocalization } from '@localization';
import { RootNavigationProp } from '@navigation/RootStackParamList';
import { ROUTE_NAMES } from '@navigation/RouteNames';
import { useNavigation } from '@react-navigation/native';
import { makeStyles } from '@rneui/themed';
import { Button, Text, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';

export const HomeScreen = () => {
  const { translations, setAppLanguage, appLanguage } = useLocalization();
  const navigation = useNavigation<RootNavigationProp>();
  const toast = useToast();
  const styles = useStyles();
  const { mutate: login, isPending } = useLogin({
    onSuccess: data => {
      console.log(data);
    },
    onError: error => {
      console.log(error);
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HOME</Text>
      <Button
        title="Show Notification"
        onPress={() => {
          toast.show('Hello', {
            type: 'custom',
            data: {
              message: 'Hello',
              title: 'Hello',
            },
          });
        }}
      />
      {isPending ? (
        <Text>Loading...</Text>
      ) : (
        <Button
          title={translations.getString('login')}
          onPress={() => {
            login({
              username: 'test',
              password: 'test',
            });
          }}
        />
      )}

      <Button
        title={appLanguage === 'vi' ? 'Vi' : 'En'}
        onPress={() => {
          setAppLanguage(appLanguage === 'vi' ? 'en' : 'vi');
        }}
      />
      <Button
        title="Go to Detail"
        onPress={() => {
          navigation.push(ROUTE_NAMES.HOME_DETAIL_SCREEN);
        }}
      />
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
