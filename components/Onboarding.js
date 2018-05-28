import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default class Onboarding extends Component {
	constructor(props) {
		super(props);
		this.state = {

        };
    }
    closeOnboarding(){
        this.props.show();
    }

	render() {

		return (
            <View style={styles.container}>
			    <Text>Onboarding!</Text>
                <Button title="Close onboarding"  onPress={() => this.closeOnboarding()}/>
            </View>
		);
    }
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: "absolute",
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "red",
      alignItems: 'center',
      justifyContent: 'center',
    }
  });