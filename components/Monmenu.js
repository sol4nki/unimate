import { Text, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
// import { ScrollView } from 'react-native/types_generated/index';

export default function Monmenu({ active }) {
    const [day, setDay] = useState(1)

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{display: 'flex', flexDirection: 'row', height: 34, gap: 12}}>
            
        <Text style={{color: "white", fontSize: 18, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 5, backgroundColor: day === 1 ? '#007bff' : 'grey'}} onPress={() => setDay(1)}>MON</Text>
        <Text style={{color: "white", fontSize: 18, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 5, backgroundColor: day === 2 ? '#007bff' : 'grey'}} onPress={() => setDay(2)}>TUE</Text>
        <Text style={{color: "white", fontSize: 18, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 5, backgroundColor: day === 3 ? '#007bff' : 'grey'}} onPress={() => setDay(3)}>WED</Text>
        <Text style={{color: "white", fontSize: 18, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 5, backgroundColor: day === 4 ? '#007bff' : 'grey'}} onPress={() => setDay(4)}>THU</Text>
        <Text style={{color: "white", fontSize: 18, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 5, backgroundColor: day === 5 ? '#007bff' : 'grey'}} onPress={() => setDay(5)}>FRI</Text>
        <Text style={{color: "white", fontSize: 18, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 5, backgroundColor: day === 6 ? '#007bff' : 'grey'}} onPress={() => setDay(6)}>SAT</Text>

        </ScrollView>
    );
}
