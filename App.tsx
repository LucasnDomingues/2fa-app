import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TolkenDisplay from './src/components/TolkenDisplay';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Token</Text>
      <TolkenDisplay/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 25
  }


});
