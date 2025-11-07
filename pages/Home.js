import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Quote from '../components/Quote';
import Sqbutton from '../components/Sqbutton';
import Section from '../components/Section';
import ClassButton from '../components/ClassButton';
import TaskButton from '../components/TaskButton';

function topmsg(user){
    let k = `Hello there, ${user}`
    if ( new Date().getHours() < 12 ){
        k = `Good Morning, ${user} 👋` //yes i added the wave not ai bruv
    }
    else if ( new Date().getHours() >= 12 && new Date().getHours() < 17 ){
        k = `Good Afternoon, ${user} 👋`
    }
    else{
        k = `Good Evening, ${user} 👋`
    }
    return k
}

export default function Home() {
  return (
    
    <SafeAreaView style={{ flex: 1, paddingLeft: 20, paddingRight: 20, marginTop: 20, gap: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: '600' }}>{topmsg("Pranjal")}</Text>
        <Text style={{ fontSize: 16, fontWeight: '400', color: '#555555', marginTop: -15 }}>{new Date().toLocaleString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Sqbutton name="Assignments" onPress={() => {}} />
            <Sqbutton name="Timetable" onPress={() => {}} />
            <Sqbutton name="Mess Menu" onPress={() => {}} />
            <Sqbutton name="Events" onPress={() => {}} />
        </View>
        <Quote />
        <Section title="Today's Classes" onPress={() => {}} />
            
        <Section title="Upcoming Tasks" onPress={() => {}} />
        {/* <Text style={{ fontSize: 22, fontWeight: '600' }}>Home Screen</Text> */}
    </SafeAreaView>
  );
}
