import { Text, View } from 'react-native';

export default function Section({ title, onPress }) {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} onTouchStart={onPress}>
        <Text style={{ fontSize: 22, fontWeight: '600', marginTop: 10 }}>{title}</Text>
        <View style={{flex: 1}}/>
        <Text style={{ fontSize: 13, fontWeight: '600', color: '#007AFF', marginTop: 10 }} onTouchStart={onPress}>view all</Text>
    </View>
  );
}
