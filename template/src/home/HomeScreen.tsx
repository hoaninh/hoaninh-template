import { useLogin } from '@api';
import { FacebookIcon } from '@assets/icons';
import { Images } from '@assets/images';
import { useLocalization } from '@localization';
import { RootNavigationProp } from '@navigation/RootStackParamList';
import { ROUTE_NAMES } from '@navigation/RouteNames';
import { useNavigation } from '@react-navigation/native';
import { Typography } from '@theme/Typography';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';

export const HomeScreen = () => {
  const { translations, setAppLanguage, appLanguage } = useLocalization();
  const navigation = useNavigation<RootNavigationProp>();
  const toast = useToast();
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
      <Text>Home</Text>
      <Text style={{ fontFamily: Typography.fontFamilies.regular }}>
        Font normal
      </Text>
      <Text style={{ fontFamily: Typography.fontFamilies.semibold }}>
        Font semibold
      </Text>
      <Image source={Images.logo} style={styles.logo} />
      <FacebookIcon width={100} height={100} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
});
