import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EventButton from '../components/EventButton';
import Header from '../components/Header';
// import { ScrollView } from 'react-native/types_generated/index';

export default function Events() {
  return (
    <ScrollView style={{marginBottom:80}}>
    <SafeAreaView style={{ flex: 1, paddingLeft: 20, paddingRight: 20, marginTop: 20, gap: 20, alignItems: 'center' }}>
      <Header title="Events"/>
      {/* <Text style={{ fontSize: 22, fontWeight: '600' }}>Events Screenss</Text> 
        yes i couldnt figure out why "flex:1 view box isnt working."
      */}

      <EventButton name="Tech Talk on AI           " club="d4rkc0de" date="Oct 15, 2025" tag="Tech" time="10:00 AM" room="C102" people="250 attending" color="#4287f5" />
      <EventButton name="Music Concert           " club="Cultural Club" date="Oct 20, 2025" tag="Music" time="7:00 PM" room="C102" people="150 attending" color="#f54291" />
      <EventButton name="Art Exhibition                 " club="Exhibitclub" date="Oct 25, 2025" tag="Art" time="5:00 PM" room="C102" people="150 attending" color="#42f554" />
    </SafeAreaView>
    </ScrollView>
  );
}
