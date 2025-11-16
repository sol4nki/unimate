import { Text, View, Pressable } from 'react-native';

export default function Sqbutton({ name, img: Icon, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => ({ alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffffff', paddingTop: 10, paddingBottom: 10, width: 82, borderRadius: 10, transform: [{ scale: pressed ? 0.93 : 1 }], opacity: pressed ? 0.85 : 1 })}
      onPress={onPress}
    >
      <View style={{ height: 50, width: 50, backgroundColor: '#007bff28', alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
        <Icon width={30} height={30} color='#007AFF' />
      </View>

      <Text style={{ fontSize: 11, fontWeight: '600', marginTop: 5 }}>{name}</Text>
    </Pressable>
  );
}
