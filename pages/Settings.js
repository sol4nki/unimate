import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function SettingsPage() {
  return (
    <ScrollView marginBottom={80}>
    <SafeAreaView style={{ flex: 1, paddingLeft: 20, paddingRight: 20, marginTop: 20, gap: 20 }}>
      {/* <Text style={styles.header}>Settings</Text> */}

      <View style={styles.section}>
        
      </View>

      <View style={styles.item} />
      <View style={styles.item} />
      <View style={styles.item} />
      <View style={styles.item} />
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
});
