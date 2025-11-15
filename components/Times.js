import React from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-big-calendar';
// very very cool component saved me hours of work
export default function Times() {
    // this data is ai generated just for the viewer's reference and better prototyping experience
    const events = [
    // === Week -2 (Oct 20–24, 2025) ===
    { title: 'HCI', start: new Date(2025, 9, 20, 9, 0), end: new Date(2025, 9, 20, 10, 30) },
    { title: 'Lin Alg', start: new Date(2025, 9, 21, 11, 0), end: new Date(2025, 9, 21, 12, 0) },
    { title: 'OS', start: new Date(2025, 9, 22, 14, 0), end: new Date(2025, 9, 22, 15, 30) },
    { title: 'DB', start: new Date(2025, 9, 23, 10, 0), end: new Date(2025, 9, 23, 11, 30) },
    { title: 'DLD', start: new Date(2025, 9, 24, 13, 0), end: new Date(2025, 9, 24, 14, 0) },

    // === Week -1 (Oct 27–31, 2025) ===
    { title: 'AI', start: new Date(2025, 9, 27, 8, 30), end: new Date(2025, 9, 27, 10, 0) },
    { title: 'Networks', start: new Date(2025, 9, 28, 10, 30), end: new Date(2025, 9, 28, 12, 0) },
    { title: 'Ethics', start: new Date(2025, 9, 29, 13, 0), end: new Date(2025, 9, 29, 14, 30) },
    { title: 'Soft Eng', start: new Date(2025, 9, 30, 9, 30), end: new Date(2025, 9, 30, 11, 0) },
    { title: 'Discrete Math', start: new Date(2025, 9, 31, 15, 0), end: new Date(2025, 9, 31, 16, 30) },

    // === Week 0 (Nov 3–7, 2025) ===
    { title: 'ML', start: new Date(2025, 10, 3, 9, 0), end: new Date(2025, 10, 3, 10, 30) },
    { title: 'DS', start: new Date(2025, 10, 4, 11, 0), end: new Date(2025, 10, 4, 12, 0) },
    { title: 'Prob & Stats', start: new Date(2025, 10, 5, 13, 0), end: new Date(2025, 10, 5, 14, 0) },
    { title: 'Cyber Sec', start: new Date(2025, 10, 6, 14, 30), end: new Date(2025, 10, 6, 16, 0) },
    { title: 'Cloud', start: new Date(2025, 10, 7, 10, 0), end: new Date(2025, 10, 7, 11, 30) },

    // === Week +1 (Nov 10–14, 2025) ===
    { title: 'CG', start: new Date(2025, 10, 10, 8, 30), end: new Date(2025, 10, 10, 10, 0) },
    { title: 'IR', start: new Date(2025, 10, 11, 10, 30), end: new Date(2025, 10, 11, 12, 0) },
    { title: 'Soft Test', start: new Date(2025, 10, 12, 13, 0), end: new Date(2025, 10, 12, 14, 30) },
    { title: 'Data Viz', start: new Date(2025, 10, 13, 9, 30), end: new Date(2025, 10, 13, 11, 0) },
    { title: 'Compiler', start: new Date(2025, 10, 14, 15, 0), end: new Date(2025, 10, 14, 16, 30) },

    // === Week +2 (Nov 17–21, 2025) ===
    { title: 'Deep Learning', start: new Date(2025, 10, 17, 9, 0), end: new Date(2025, 10, 17, 10, 30) },
    { title: 'Parallel Comp', start: new Date(2025, 10, 18, 11, 0), end: new Date(2025, 10, 18, 12, 30) },
    { title: 'Quantum Comp', start: new Date(2025, 10, 19, 14, 0), end: new Date(2025, 10, 19, 15, 30) },
    { title: 'NLP', start: new Date(2025, 10, 20, 10, 0), end: new Date(2025, 10, 20, 11, 30) },
    { title: 'Soft Arch', start: new Date(2025, 10, 21, 13, 0), end: new Date(2025, 10, 21, 14, 30) },
    ];




    const today = new Date();

    return (
    <View style={{ flex: 1 }}>
        <Calendar
        events={events}
        height={600}
        mode="week"
        date={today}
        weekStartsOn={1}
        swipeEnabled={true}
        showTime={false} 
        scrollOffsetMinutes={360}
        eventCellStyle={{
            // backgroundColor: '#007AFF',
            backgroundColor: '#536170ff',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 6,
        }}
        // renderEvent={(event) => (
        //     <View
        //     style={{
        //         flex: 1,
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //         paddingHorizontal: 4,
        //     }}
        //     >
        //     <Text
        //         style={{
        //         color: '#fff',
        //         fontWeight: '600',
        //         textAlign: 'center',
        //         fontSize: 12,
        //         }}
        //         numberOfLines={2}
        //         ellipsizeMode="tail"
        //     >
        //         {event.title}
        //     </Text>
        //     </View>
        // )}
        headerContainerStyle={{
            backgroundColor: '#fff',
        }}
        />
    </View>
    );
}