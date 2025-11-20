import { Image, Text, View } from 'react-native';

export default function EmailThreadButton({ subject, sender, content }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, backgroundColor: '#ffffffff', padding: 15, borderRadius: 10, margin: -5 }}>
        {/* <View style={{height: 45, width: 45, backgroundColor: '#a4a4a4aa', alignItems: 'center', justifyContent: 'center', borderRadius: 10}}>
            <Image source={img} style={{ width: 45, height: 45, borderRadius: 10 }} />
        </View> */}
        <View style={{ flexDirection: 'column', gap: 8 }}>
            <Text style={{ fontSize: 16, fontWeight: '500' }}><Text style={{ fontSize: 15, fontWeight: '500', color: '#555555' }}>{sender}</Text> • {subject}</Text>
            <Text style={{ fontSize: 13, fontWeight: '400', color: '#555555' }}>{content}</Text>

        </View>
    </View>
  );
}
