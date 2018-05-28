import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Carousel from 'react-native-carousel-view';
import Dimensions from 'Dimensions';

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
                <Carousel
                    width={375}
                    height={Dimensions.get('window').height}
                    delay={2000}
                    animate={false}
                    indicatorAtBottom={true}
                    indicatorColor='rgba(255,255,255,0.7)'
                    indicatorSize={10}
                    inactiveIndicatorColor='rgba(255,255,255,0.3)'
                    indicatorAtBottom={true}
                    indicatorOffset={20}
                    >
                    <View style={styles.contentContainer}>
                        <Text>Onboarding 1!</Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text>Onboarding 2!</Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text>Onboarding 3!</Text>
                        <Button title="Let's go!"  onPress={() => this.closeOnboarding()}/>
                    </View>
                </Carousel>
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
    },
    contentContainer: {
      flex: 1,
      height: "100%",
      padding: 30,
      
    },
  });