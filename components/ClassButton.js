import { Text, View } from 'react-native';

export default function ClassButton({ name, time, room, onPress }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, backgroundColor: '#b9b9b9ff', padding: 15, borderRadius: 10, margin: -5 }} onTouchStart={onPress}>
        <View style={{height: 45, width: 45, backgroundColor: '#ffffffaa', alignItems: 'center', justifyContent: 'center', borderRadius: 10}}/>
        <View style={{ flexDirection: 'column', gap: 8 }}>
            <Text style={{ fontSize: 17, fontWeight: '600' }}>{name}</Text>
            <Text style={{ fontSize: 13, fontWeight: '400', color: '#555555' }}>{time} • {room}</Text>

        </View>
    </View>
  );
}
