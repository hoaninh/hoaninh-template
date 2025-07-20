import { makeStyles, Text } from "@rneui/themed";
import { View } from "react-native";
import { ToastProps } from "react-native-toast-notifications/lib/typescript/toast";

export interface ToastSuccessViewProps extends ToastProps {
   
}
export const ToastSuccessView = ({ data }: ToastSuccessViewProps) => {
    const styles = useStyles();
    
  return (
    <View style={styles.container}>
      <Text>Toast Success</Text>
      <Text>{data?.message}</Text>
    </View>
  );
};

export interface ToastErrorViewProps extends ToastProps {
   
}
export const ToastErrorView = ({ data }: ToastErrorViewProps) => {
    const styles = useStyles();

  return (
    <View style={styles.container}>
        <Text>Toast Error</Text>
      <Text>{data?.message}</Text>
    </View>
  );
};

export interface ToastWarningViewProps extends ToastProps {

}
export const ToastWarningView = ({ data }: ToastWarningViewProps) => {
    const styles = useStyles();

  return (
    <View style={styles.container}>
        <Text>Toast Warning</Text>
        <Text>{data?.message}</Text>
    </View>
  );
};

export interface ToastCustomViewProps extends ToastProps {
}
export const ToastCustomView = ({ data }: ToastCustomViewProps) => {
    const styles = useStyles();

  return (
    <View style={styles.container}>
        <Text>Toast Custom</Text>
      <Text>{data?.message}</Text>
    </View>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.colors.background,
    padding: 10,
    borderRadius: 5,
    width: '90%',
  },
}));
