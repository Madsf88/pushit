import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './components/Dashboard';
import Onboarding from './components/Onboarding';

export default class App extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      displayOnboarding: true
    };
    this.toggleOnboarding = this.toggleOnboarding.bind(this);
  }
  toggleOnboarding(){    
    this.setState({
      displayOnboarding: !this.state.displayOnboarding
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Dashboard />
        {this.state.displayOnboarding && <Onboarding show={this.toggleOnboarding} /> }
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
