import { Alert, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EventButton from '../components/EventButton';
import Header from '../components/Header';
import Adde from '../components/Adde';
// import { ScrollView } from 'react-native/types_generated/index';

export default function Events() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
    <ScrollView style={{marginBottom:80, marginTop: 30, backgroundColor: '#f7f7f7'}}>
    <Header title="Events"/>
    <SafeAreaView style={{ flex: 1, paddingLeft: 20, paddingRight: 20 , gap: 20, alignItems: 'center' }}>
      
      {/* <Text style={{ fontSize: 22, fontWeight: '600' }}>Events Screenss</Text> 
        yes i couldnt figure out why "flex:1 view box isnt working."
      */}
      {/* dupe this for hifi design */}
      {/* <EventButton name="Tech Talk on AI" club="d4rkc0de" date="Oct 15, 2025" tag="Tech" time="10:00 AM" room="C102" people="250 attending" color="#4287f5" />
      <EventButton name="Music Concert" club="Cultural Club" date="Oct 20, 2025" tag="Music" time="7:00 PM" room="C102" people="150 attending" color="#f54291" />
      <EventButton name="Art Exhibition" club="Exhibitclub" date="Oct 25, 2025" tag="Art" time="5:00 PM" room="C102" people="150 attending" color="#42f554" /> */}
      <EventButton name="Tech Talk on AI" club="d4rkc0de" date="Oct 15, 2025" tag="Tech" time="10:00 AM" room="C102" people="250 attending" color="#7f94aaff" />
      <EventButton name="Music Concert" club="Cultural Club" date="Oct 20, 2025" tag="Music" time="7:00 PM" room="C102" people="150 attending" color="#7f94aaff" />
      <EventButton name="Art Exhibition" club="Exhibitclub" date="Oct 25, 2025" tag="Art" time="5:00 PM" room="C102" people="150 attending" color="#7f94aaff" />
      
    </SafeAreaView>
    </ScrollView>
    <Adde onPress={() => {Alert.alert("Verify First", "Only verified people with access to database can post events.")}} />
    </View>
  );
}
