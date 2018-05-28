import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './components/Dashboard';
import Onboarding from './components/Onboarding';
import plan from './data/training-plan.json';

export default class App extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      displayOnboarding: true, // Set to true to test onboading
      difficultySetting: 0
    };
    this.toggleOnboarding = this.toggleOnboarding.bind(this);
  }
  toggleOnboarding(){    
    this.setState({
      displayOnboarding: !this.state.displayOnboarding
    });
  }
  difficultySetting(val){    
    this.setState({
      difficultySetting: val
    });    
  }
  render() {
    return (
      <View style={styles.container}>
        <Dashboard />
        <Text>Difficulty: {this.state.difficultySetting}</Text>
        {this.state.displayOnboarding && <Onboarding show={this.toggleOnboarding} difficulty={val => this.difficultySetting(val)} /> }
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
