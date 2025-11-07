import { Text, View } from 'react-native';

export default function Adde({onPress}) {
  return (
    <View style={{ height: 60, width: 60, backgroundColor: '#007bff', alignItems: 'center', justifyContent: 'center', borderRadius: 10, position: 'absolute', bottom: 120, right: 20, zIndex: 1000 }} onTouchStart={onPress}>
      <Text style={{color: "white", fontSize: 48, marginTop: -7}}>+</Text>
    </View>
  );
}
