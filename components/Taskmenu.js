import { Text, ScrollView, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
// import { ScrollView } from 'react-native/types_generated/index';

export default function Taskmenu({ active, onChange }) {
    const [day, setDay] = useState(1)
    const press = (num) => {
        setDay(num);
        if (onChange) onChange(num);
    }

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{display: 'flex', flexDirection: 'row', height: 34, gap: 12}}>

        <Pressable onPress={() => press(1)} style={{backgroundColor: day === 1 ? '#007bff' : 'grey', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8}}><Text style={{color: "white", fontSize: 16, paddingTop: 1}}>All</Text></Pressable>
        <Pressable onPress={() => press(2)} style={{backgroundColor: day === 2 ? '#007bff' : 'grey', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8}}><Text style={{color: "white", fontSize: 16, paddingTop: 1}}>Pending</Text></Pressable>
        <Pressable onPress={() => press(3)} style={{backgroundColor: day === 3 ? '#007bff' : 'grey', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8}}><Text style={{color: "white", fontSize: 16, paddingTop: 1}}>Completed</Text></Pressable>

        </ScrollView>
    );
}
