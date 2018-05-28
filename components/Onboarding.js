import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Slider, Image } from 'react-native';
import Carousel from 'react-native-carousel-view';
import Dimensions from 'Dimensions';


var currentlevel = 0;
export default class Onboarding extends Component {
	constructor(props) {
		super(props);
		this.state = {
            pushups: 4
        };
    }
    closeOnboarding(){
        this.props.show();
    }
    SliderValueChange(val){
        var roundedvalue = Math.round(val);
        this.setState({ 
            pushups: roundedvalue
        })
        var level
        if(roundedvalue < 5){
            level = 0
        }else if(roundedvalue > 10 ){
            level = 2
        }else{
            level = 1
        }
        if(level !== currentlevel){ // Don't update component if difficulty doesn't change.
            currentlevel = level
            this.props.difficulty(level);    
        }
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
                    indicatorColor='rgba(0,0,0,0.7)'
                    indicatorSize={10}
                    inactiveIndicatorColor='rgba(0,0,0,0.3)'
                    indicatorAtBottom={true}
                    indicatorOffset={20}
                    >
                    <View style={styles.contentContainer}>
                        <Image style={styles.welcomeIcon} source={require('../assets/strong.png')} />
                        <Text style={styles.heading}>Welcome</Text>
                        <Text style={styles.bodytext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lectus quis sem lacinia nonummy.</Text>
                    </View>
                    
                    <View style={styles.contentContainer}>
                        <Text style={styles.heading}>How many push ups can you do?</Text>
                        <Text style={styles.bodytext}>Yes, drop and give me as many as you can!</Text>
                        <Text style={styles.keytext}>{this.state.pushups}{this.state.pushups == 20 && "+"}</Text>
                        <Slider
                            style={styles.slider}
                            minimumValue={1}
                            maximumValue={20}
                            value={this.state.pushups}
                            onValueChange={val => this.SliderValueChange(val)}
                        />
                        
                        <View style={styles.buttonButtom}>
                            <Button 
                                color="white" buttonStyle={styles.buttonButtom}
                                title="Create workout plan"
                                onPress={() => this.closeOnboarding()}
                            />
                        </View>
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
        backgroundColor: "white",
    },
    contentContainer: {
      flex: 1,
      height: "100%",
      padding: 30,
      marginTop: 40
      
    },
    heading: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 30,
    },
    bodytext: {
        fontSize: 20,
        color: '#949494',
        textAlign: 'center',
    },
    welcomeIcon: {
        width: 250,
        height: 250,
        marginBottom: 30,
    },
    keytext: {
        fontSize: 90,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    slider: {
        marginTop: 20
    },
    buttonButtom: {
        marginTop:50,
        backgroundColor: '#4286f4',
        borderRadius: 4,
        alignItems: 'center'


    }
  });