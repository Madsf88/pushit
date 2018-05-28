import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './components/Dashboard';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Dashboard/>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
