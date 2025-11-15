import { Alert, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Adde from '../components/Adde';
import Monmenu from '../components/Monmenu';
import Times from '../components/Times';

export default function Timetable() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f7f7f7', marginTop: 30 }}>
          <Header title="Timetable"/>
    {/* <ScrollView style={{marginBottom:80, backgroundColor: '#f7f7f7'}}> */}
      
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f7f7'}}>
      
      {/* <Header title="Timetable"/> */}
      {/* <Monmenu active={1} /> */}
      <View style={{ marginTop: -45, height: '100%', paddingBottom: 30 }}>
        <Times/>
      </View>
    </SafeAreaView>

    <Adde onPress={() => {Alert.alert("Verify First", "Only verified people with access to database can edit timetables.")}} />
    {/* </ScrollView> */}
    </View>
  );
}
