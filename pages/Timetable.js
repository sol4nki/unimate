import { Alert, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Adde from '../components/Adde';
import Monmenu from '../components/Monmenu';
import Times from '../components/Times';

export default function Timetable() {
  return (
    <View style={{ flex: 1, marginTop: 30, backgroundColor: '#f7f7f7' }}>
      <Header title="Timetable"/>
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
      
      
      {/* <Monmenu active={1} /> */}
      <Times/>
    </SafeAreaView>

    <Adde onPress={() => {Alert.alert("Verify First", "Only verified people with access to database can edit timetables.")}} />
    </View>
  );
}
