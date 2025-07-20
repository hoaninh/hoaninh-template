import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import React, { useCallback } from 'react';
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export interface BackButtonProps {
  onPress?: () => void;
}
export const BackButton = (props: BackButtonProps) => {
  const navigation = useNavigation();

  const handleOnBackButton = useCallback(() => {
    if (props?.onPress) {
      props?.onPress();
    } else {
      navigation.goBack();
    }
  }, [props, navigation]);

  return (
    <TouchableOpacity hitSlop={40} onPress={handleOnBackButton}>
     <Icon name="chevron-left" type='feather' size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {width: 24, height: 24},
});
