import React, { useState } from 'react';
import { Alert, Button, Text, View, Pressable } from 'react-native';


export default function ClassButton({ name, tag, club, time, room, date, people, color }) {

    const showAlert = () => {
        Alert.alert(
        'Added To calendar!',
        'Successfully added the event to your google calendar.',
        );
    };


    return (

            <View style={{ flexDirection: 'row', backgroundColor: '#b9b9b9ff', padding: 15, borderRadius: 10, gap: 15, width: "100%"}}>
                <View style={{height: 80, width: 80, backgroundColor: '#636363aa', alignItems: 'center', justifyContent: 'flex-start', borderRadius: 10}}/>

                <View style={{display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 4}}>
                <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                    <Text style={{ fontSize: 17, fontWeight: '600'}}>{name}</Text>
                    <View style={{flex: 1, backgroundColor: 'red', alignItems: 'center'}}><Text>...HII</Text></View>
                    <Text style={{ fontSize: 13, fontWeight: '400', backgroundColor: color, padding: 2, paddingBottom: 4, paddingLeft: 10, paddingRight: 10, borderRadius: 100 }}>{tag}</Text>
                </View>
                <Text style={{ fontSize: 13, fontWeight: '400', color: '#555555', marginTop: 4 }}>{club}</Text>
                <Text style={{ fontSize: 13, fontWeight: '400', color: '#555555', marginTop: 4 }}>{date}</Text>
                <Text style={{ fontSize: 13, fontWeight: '400', color: '#555555', marginTop: 4 }}>{time} • {room}</Text>
                <Text style={{ fontSize: 13, fontWeight: '400', color: '#555555', marginTop: 4 }}>{people}</Text>
                <Pressable
                onPress={showAlert}
                style={{
                    backgroundColor: '#007bff',
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderRadius: 8,
                    marginTop: 8
                }}
                >
                <Text style={{ color: 'white', fontWeight: '600', textAlign: 'center' }}>
                    Add to Calendar
                </Text>
                </Pressable>
                </View>
            </View>

    );
}
