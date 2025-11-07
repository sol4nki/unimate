import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskButton from '../components/TaskButton';

export default function Tasks() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: '600' }}>Tasks Screen</Text>
      <TaskButton name="Math Assignment" due="Oct 10, 2025" tag1="yo" color1="#FF0000" tag2="yo" color2="#FF0000" onPress={() => {}} />
      <TaskButton name="Physics Lab Report" due="Oct 10, 2025" tag1="yo" color1="#FF0000" tag2="yo" color2="#FF0000" onPress={() => {}} />
      <TaskButton name="Computer Science Project" due="Oct 10, 2025" tag1="yo" color1="#FF0000" tag2="yo" color2="#FF0000" onPress={() => {}} />
    </SafeAreaView>
  );
}
