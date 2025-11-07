import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsPage() {
  return (
    <ScrollView marginBottom={80}>
    <SafeAreaView style={{ flex: 1, paddingLeft: 20, paddingRight: 20, marginTop: 20, gap: 20 }}>
      
      <View style={{position: 'absolute', top: -50, left: 0, backgroundColor: 'lightgrey', height: 210, width: '120%'}}/>
      <View style={{height: 100, width: 100, backgroundColor: 'gray', borderRadius: 500, alignSelf: 'center', zIndex: 900, marginTop: 60}}/>
      <Text style={{ fontSize: 22, fontWeight: '600', alignSelf: 'center' }}>Pranjal Solanki</Text>
      <Text style={{ fontSize: 16, fontWeight: '500', color: '#555555', alignSelf: 'center', marginTop: -15 }}>2025999</Text>
      <Text style={{ fontSize: 16, fontWeight: '500', color: '#555555', alignSelf: 'center', marginTop: -15 }}>pranjal2599@iiitd.ac.in</Text>
      <View style={styles.section}>
        
      </View>

      <View style={styles.item} />
      <View style={styles.item} />
      <View style={styles.item} />
      <View style={styles.logout}>
        <Text style={{ color: 'white', fontWeight: '800', fontSize: 16 }}>←  Logout</Text>
      </View>

    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12,
  },
  section: {
    height: 180,
    backgroundColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
  },
  item: {
    height: 60,
    backgroundColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
  },
  logout: {
    height: 50,
    borderRadius: 10,
    // borderWidth: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  }
});

