import { Alert, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Adde from '../components/Adde';
export default function Timetable() {
  return (
    <View style={{ flex: 1 }}>
    <SafeAreaView style={{ flex: 1, paddingLeft: 20, paddingRight: 20, marginTop: 20, gap: 20 }}>
      <Adde onPress={() => {}} />
      <Header title="Timetable"/>
      
    </SafeAreaView>

    <Adde onPress={() => {Alert.alert("Verify First", "Only verified people with access to database can edit timetables.")}} />
    </View>
  );
}
