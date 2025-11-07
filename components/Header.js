import { Text, View, TouchableOpacity } from 'react-native';
import Iosmic from '../assets/icons/ios_mic.svg';
import Magnify from '../assets/icons/magnify.svg';

export default function Header({ title, onPress }) {
  return (
    <View style={{backgroundColor:'#f7f7f7', paddingVertical:10, paddingHorizontal:16, borderRadius:5, alignItems:'center', width:'100%', borderBottomColor:'#ddd', borderBottomWidth:1, gap:10}}>
      <Text style={{fontSize:18, fontWeight:'600', padding: 10, color:'#000', textAlign:'center'}}>{title}</Text>
      <TouchableOpacity onPress={onPress} style={{flexDirection:'row', alignItems:'center', backgroundColor:'#e7e7e7', borderRadius:10, paddingHorizontal:12, height:40, width:'100%'}}>
        <Magnify width={24} height={24} color="grey" />
        <Text style={{fontSize:16, fontWeight:'400', color:'grey', marginLeft:8, flex:1}}>Search</Text>
        <Iosmic width={24} height={24} color="grey" />
      </TouchableOpacity>
      
    </View>
  );
}
