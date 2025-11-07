import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Beenhere from './assets/icons/beenhere.svg';
import CalendarMonth from './assets/icons/calendar_month.svg';
import FamilyStar from './assets/icons/family_star.svg';
import IdCard from './assets/icons/id_card.svg';
import PartnerExchange from './assets/icons/partner_exchange.svg';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
// reactnative mein svg component ki tarah treat hori yaar F debug final boss ^
import Home from './pages/Home';
import Events from './pages/Events';
import Settings from './pages/Settings';
import Timetable from './pages/Timetable';
import Tasks from './pages/Tasks';
// abhi homescreen, timetable and sab kuch import karna uske bina error dega sirf


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { // mere hisab se ye best config hai nav ki 
            // marginTop: 10, 
            paddingTop: 10,    
            height: 90, 
            paddingBottom: 6,  
            // height: 70,        
            borderTopWidth: 0,  
            // backgroundColor: 'white',
            position: 'absolute',
          },

          tabBarIcon: ({ focused }) => {
            switch (route.name) {
              case 'Home':
                return <FamilyStar width={28} height={28} color={focused ? '#007AFF' : 'gray'} />;
              case 'Timetable':
                return <CalendarMonth width={28} height={28} color={focused ? '#007AFF' : 'gray'} />;
              case 'Tasks':
                return <Beenhere width={28} height={28} color={focused ? '#007AFF' : 'gray'} />;
              case 'Events':
                return <PartnerExchange width={28} height={28} color={focused ? '#007AFF' : 'gray'} />;
              case 'Profile':
                return <IdCard width={28} height={28} color={focused ? '#007AFF' : 'gray'} />; // FILL NHI KAAM KAR RAHA CAUSE SVG SUPPORTED NHI TOH USING COLOR MORE BLUNT WAY BUT SAME
            }
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Timetable" component={Timetable} />
        <Tab.Screen name="Tasks" component={Tasks} />
        <Tab.Screen name="Events" component={Events} />
        <Tab.Screen name="Profile" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
