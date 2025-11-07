import { Alert, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskButton from '../components/TaskButton';
import Header from '../components/Header';
import Adde from '../components/Adde';

export default function Tasks() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
    <ScrollView marginBottom={80} marginTop={30} backgroundColor="#f7f7f7">
      <Header title="Tasks"/>
    <SafeAreaView style={{ flex: 1, paddingLeft: 20, paddingRight: 20, gap: 20 }}>
        
        <TaskButton name="Math Assignment" due="Oct 10, 2025" tag1="MA101" color1="#FF6B6B" tag2="High" color2="#FF3B3B" onPress={() => {}} />
        <TaskButton name="Physics Lab Report" due="Oct 12, 2025" tag1="PH102" color1="#4ECDC4" tag2="Medium" color2="#FFA500" onPress={() => {}} />
        <TaskButton name="Computer Science Project" due="Oct 15, 2025" tag1="CS103" color1="#556270" tag2="High" color2="#FF3B3B" onPress={() => {}} />
        <TaskButton name="Chemistry Homework" due="Oct 11, 2025" tag1="CH104" color1="#C7F464" tag2="Low" color2="#9E9E9E" onPress={() => {}} />
        <TaskButton name="Data Structures Assignment" due="Oct 18, 2025" tag1="CS105" color1="#FF6B6B" tag2="High" color2="#FF3B3B" onPress={() => {}} />
        <TaskButton name="English Essay" due="Oct 20, 2025" tag1="HU101" color1="#4ECDC4" tag2="Medium" color2="#FFA500" onPress={() => {}} />
        <TaskButton name="Electronics Lab Report" due="Oct 22, 2025" tag1="EE102" color1="#556270" tag2="Low" color2="#9E9E9E" onPress={() => {}} />
        <TaskButton name="AI Mini Project" due="Oct 25, 2025" tag1="CS106" color1="#C7F464" tag2="High" color2="#FF3B3B" onPress={() => {}} />
        <Adde onPress={() => {}} />

        {/* <Text style={{ fontSize: 22, fontWeight: '600' }}>Home Screen</Text> */}
    </SafeAreaView>
    </ScrollView>
    <Adde onPress={() => {Alert.alert("GC Tasks Added", "Syncing might take a little longer please wait a moment before retrying.")}} />
    </View>
    
  );
}
