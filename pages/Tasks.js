import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Tasks() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: '600' }}>Tasks Screen</Text>
    </SafeAreaView>
  );
}
