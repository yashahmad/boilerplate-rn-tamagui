import { AlertDialog, Button, TamaguiProvider, Text, View } from 'tamagui';
import config from './tamagui.config';
import { Alert } from 'react-native';

export default function App() {
  const alert = () => {
    Alert.alert("hello world");
  }

  return (
    <TamaguiProvider config={config}>
      <View flex={1} height="100%" justifyContent='center'>
        <Button backgroundColor="$primary" onPress={alert}>Test</Button>
      </View>
    </TamaguiProvider>
  )
}
