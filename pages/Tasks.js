import { Alert, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskButton from '../components/TaskButton';
import Header from '../components/Header';
import Adde from '../components/Adde';
import Taskmenu from '../components/Taskmenu';
import React, { useState } from 'react';

export default function Tasks() {

  const [tasks, setTasks] = useState([
    { id: 1, name: "Math Assignment", due: "Oct 10, 2025", tag1: "MA101", color1: "#FF6B6B", tag2: "High", color2: "#FF3B3B", completed: false },
    { id: 2, name: "Physics Lab Report", due: "Oct 12, 2025", tag1: "PH102", color1: "#4ECDC4", tag2: "Medium", color2: "#FFA500", completed: false },
    { id: 3, name: "Computer Science Project", due: "Oct 15, 2025", tag1: "CS103", color1: "#556270", tag2: "High", color2: "#FF3B3B", completed: false },
    { id: 4, name: "Chemistry Homework", due: "Oct 11, 2025", tag1: "CH104", color1: "#C7F464", tag2: "Low", color2: "#9E9E9E", completed: false },
    { id: 5, name: "Data Structures Assignment", due: "Oct 18, 2025", tag1: "CS105", color1: "#FF6B6B", tag2: "High", color2: "#FF3B3B", completed: false },
    { id: 6, name: "English Essay", due: "Oct 20, 2025", tag1: "HU101", color1: "#4ECDC4", tag2: "Medium", color2: "#FFA500", completed: false },
    { id: 7, name: "Electronics Lab Report", due: "Oct 22, 2025", tag1: "EE102", color1: "#556270", tag2: "Low", color2: "#9E9E9E", completed: false },
    { id: 8, name: "AI Mini Project", due: "Oct 25, 2025", tag1: "CS106", color1: "#C7F464", tag2: "High", color2: "#FF3B3B", completed: false },
  ]);

  const [filter, setFilter] = useState(1);

  const filteredTasks =
    filter === 1
      ? tasks
      : filter === 2
      ? tasks.filter(t => !t.completed)
      : tasks.filter(t => t.completed);

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f7f7f7', marginTop: 30 }}>
          <Header title="Tasks"/>
    <ScrollView style={{marginBottom:80, backgroundColor: '#f7f7f7'}}>

    <SafeAreaView style={{ flex: 1, paddingLeft: 20, paddingRight: 20, gap: 20 }}>
        <View style={{ marginTop: -30 }}>
        <Taskmenu onChange={(val) => setFilter(val)} />
        </View>

        {filteredTasks.map(task => (
          <TaskButton
            key={task.id}
            name={task.name}
            due={task.due}
            tag1={task.tag1}
            color1={task.color1}
            tag2={task.tag2}
            color2={task.color2}
            completed={task.completed}
            onToggle={() => toggleTask(task.id)}
          />
        ))}

    </SafeAreaView>
    </ScrollView>
    <Adde onPress={() => {Alert.alert("GC Tasks Added", "Syncing might take a little longer please wait a moment before retrying.")}} />
    </View>
    
  );
}
