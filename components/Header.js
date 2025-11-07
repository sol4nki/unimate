import { Text, View } from 'react-native';

export default function Header({ title, onPress }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#b9b9b9ff', paddingTop: 10, paddingBottom: 10, width: 82, borderRadius: 10 }} onTouchStart={onPress}>
        <View style={{height: 40, width: 40, backgroundColor: '#ffffffaa', alignItems: 'center', justifyContent: 'center', borderRadius: 50}}/>
        <Text style={{ fontSize: 11, fontWeight: '600', marginTop: 10 }}>{title}</Text>
    </View>
  );
}
