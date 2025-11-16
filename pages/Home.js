import React, { useState, useEffect } from 'react';
import { Pressable, Modal, Alert, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Quote from '../components/Quote';
import Sqbutton from '../components/Sqbutton';
import Section from '../components/Section';
import ClassButton from '../components/ClassButton';
import TaskButton from '../components/TaskButton';

import Beenhere from '../assets/icons/beenhere.svg';
import CalendarMonth from '../assets/icons/calendar_month.svg';
import PartnerExchange from '../assets/icons/partner_exchange.svg';
import Food from '../assets/icons/food.svg';

import Meth from '../assets/classes/2nd.png';
import Ip from '../assets/classes/ip.png';
import Ihci from '../assets/classes/idk.jpeg';

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

export default function Home({navigation}) {
    const [tasks, setTasks] = useState([
        { id: 1, name: "Math Assignment", due: "Oct 10, 2025", completed: false },
        { id: 2, name: "Physics Lab Report", due: "Oct 10, 2025", completed: false },
        { id: 3, name: "Computer Science Project", due: "Oct 10, 2025", completed: false },
    ]);
    const [modalVisible, setModalVisible] = useState(false);

    const toggleTask = (id) => {
        setTasks(prev =>
            prev.map(t =>
                t.id === id ? { ...t, completed: !t.completed } : t
            )
        );
    };

    const showAlert = () => {
                Alert.alert(
                'Quick Reminder!',
                'You have alot of pending work check it out in the Tasks section.',
                );
            };
    useEffect(() => {
        showAlert();
    }, []);

  return (
    <ScrollView marginBottom={80}>
    <SafeAreaView style={{ flex: 1, paddingLeft: 20, paddingRight: 20, marginTop: 10, gap: 20 }}>
        {/* {showAlert()} */}
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.4)",}}>
                <View style={{width: 320, backgroundColor: "#fff", borderRadius: 16, padding: 24, elevation: 10,}}>
                    <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}>  🍽️ Mess Menu</Text>

                    <View style={{ marginTop: 20, gap: 12 }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "600" }}>Breakfast</Text>
                            <Text style={{ color: "#555" }}>- Fried Rice</Text>
                            <Text style={{ color: "#555" }}>- Omelette</Text>
                            <Text style={{ color: "#555" }}>- Fruit Salad</Text>
                        </View>

                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "600" }}>Lunch</Text>
                            <Text style={{ color: "#555" }}>- Chole Bhature</Text>
                            <Text style={{ color: "#555" }}>- Rajma Rice</Text>
                            <Text style={{ color: "#555" }}>- Mixed Salad</Text>
                            <Text style={{ color: "#555" }}>- Raita</Text>
                        </View>

                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "600" }}>Dinner</Text>
                            <Text style={{ color: "#555" }}>- Paneer Butter Masala</Text>
                            <Text style={{ color: "#555" }}>- Naan</Text>
                            <Text style={{ color: "#555" }}>- Raita</Text>
                            <Text style={{ color: "#555" }}>- Vanilla Ice Cream</Text>
                        </View>
                        <Text style={{ color: "#555" }}>* with the usual extra items like salad, papad, and pickles.</Text>
                    </View>

                    <Pressable
                        onPress={() => setModalVisible(false)}
                        style={{
                            backgroundColor: "#007bff",
                            paddingVertical: 10,
                            marginTop: 20,
                            borderRadius: 10,
                        }}
                    >
                        <Text style={{ textAlign: "center", color: "#fff", fontWeight: "600" }}>
                            Close
                        </Text>
                    </Pressable>
                </View>
            </View>
        </Modal>



        <Text style={{ fontSize: 26, fontWeight: '600' }}>{topmsg("Pranjal")}</Text>
        <Text style={{ fontSize: 16, fontWeight: '400', color: '#555555', marginTop: -15 }}>{new Date().toLocaleString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Sqbutton name="Assignments" img={Beenhere} onPress={() => navigation.navigate('Tasks')} />
            <Sqbutton name="Timetable" img={CalendarMonth} onPress={() => navigation.navigate('Timetable')} />
            <Sqbutton name="Mess Menu" img={Food} onPress={() => setModalVisible(true)} />
            <Sqbutton name="Events" img={PartnerExchange} onPress={() => navigation.navigate('Events')} />
        </View>
        <Quote />
        <Section title="Today's Classes" screen="Timetable" />
            <ClassButton name="IHCI" time="10:00AM - 12:00PM" room="C101" onPress={() => {}} img={Ihci} />
            <ClassButton name="Linear Algebra" time="1:00PM - 3:00PM" room="C102" onPress={() => {}} img={Meth} />
            <ClassButton name="Introduction to Prog" time="3:00PM - 5:00PM" room="C103" onPress={() => {}} img={Ip} />
        <Section title="Upcoming Tasks" screen="Tasks" />
            {/* <TaskButton name="Math Assignment" due="Oct 10, 2025" onPress={() => {}} />
            <TaskButton name="Physics Lab Report" due="Oct 10, 2025" onPress={() => {}} />
            <TaskButton name="Computer Science Project" due="Oct 10, 2025" onPress={() => {}} /> */}
            {tasks.map(task => (
                <TaskButton
                    key={task.id}
                    name={task.name}
                    due={task.due}
                    completed={task.completed}
                    onToggle={() => toggleTask(task.id)}
                    onPress={() => {}}
                />
            ))}

        {/* <Text style={{ fontSize: 22, fontWeight: '600' }}>Home Screen</Text> */}
    </SafeAreaView>
    </ScrollView>
  );
}
