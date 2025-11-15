import { Image, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Sqbutton({ name, img: Icon, onPress }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffffff', paddingTop: 10, paddingBottom: 10, width: 82, borderRadius: 10 }} onTouchStart={onPress}>
        <View style={{height: 50, width: 50, backgroundColor: '#007bff28', alignItems: 'center', justifyContent: 'center', borderRadius: 50}}>
        <Icon width={30} height={30} backgroundColor='#cb9393aa' color='#007AFF' />
        </View>
        <Text style={{ fontSize: 11, fontWeight: '600', marginTop: 5 }}>{name}</Text>
    </View>
  );
}
