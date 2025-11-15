import { Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Section({ title, screen }) {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(screen)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: '600' }}>{title}</Text>
      {/* <Text style={{ fontSize: 13, fontWeight: '600', color: '#007AFF'}}>View all</Text> */}
      <Text style={{ fontSize: 13, fontWeight: '600', color: '#8398afff'}}>View all</Text>

    </Pressable>
  );
}
