import React, { useState, useEffect } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
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
    const showAlert = () => {
                Alert.alert(
                'Quick Reminder!',
                'You have alot of pending work check it out in the Tasks section.',
                );
            };
  return (
    <ScrollView marginBottom={80}>
    <SafeAreaView style={{ flex: 1, paddingLeft: 20, paddingRight: 20, marginTop: 10, gap: 20 }}>
        {showAlert()}
        <Text style={{ fontSize: 26, fontWeight: '600' }}>{topmsg("Pranjal")}</Text>
        <Text style={{ fontSize: 16, fontWeight: '400', color: '#555555', marginTop: -15 }}>{new Date().toLocaleString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Sqbutton name="Assignments" onPress={() => {}} />
            <Sqbutton name="Timetable" onPress={() => {}} />
            <Sqbutton name="Mess Menu" onPress={() => {}} />
            <Sqbutton name="Events" onPress={() => {}} />
        </View>
        <Quote />
        <Section title="Today's Classes" screen="Timetable" />
            <ClassButton name="IHCI" time="10:00AM - 12:00PM" room="C101" onPress={() => {}} />
            <ClassButton name="Linear Algebra" time="1:00PM - 3:00PM" room="C102" onPress={() => {}} />
            <ClassButton name="Introduction to Prog" time="3:00PM - 5:00PM" room="C103" onPress={() => {}} />
        <Section title="Upcoming Tasks" screen="Tasks" />
            <TaskButton name="Math Assignment" due="Oct 10, 2025" onPress={() => {}} />
            <TaskButton name="Physics Lab Report" due="Oct 10, 2025" onPress={() => {}} />
            <TaskButton name="Computer Science Project" due="Oct 10, 2025" onPress={() => {}} />

        {/* <Text style={{ fontSize: 22, fontWeight: '600' }}>Home Screen</Text> */}
    </SafeAreaView>
    </ScrollView>
  );
}
