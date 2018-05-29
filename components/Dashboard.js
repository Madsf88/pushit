import React, { Component } from 'react';
import { Text, FlatList, View, StyleSheet, ScrollView } from 'react-native';
import Dimensions from 'Dimensions';

class Sets extends Component {
	render() {

		return (
			<View>
				<FlatList
					data={this.props.data.sets}
					renderItem={({item}) => 
						<View>
							<Text>Pushups: {item}</Text>
							<Text>Rest: {this.props.data.rest}</Text>
						</View>
					}
				/>
			</View> 
		);
	}
}

class Days extends Component {
	render() {

		return (
			<View>
				<FlatList
					data={this.props.data.days.reverse()}
					renderItem={({item,index}) => 
						<View style={[styles.day]}>	
							<Text> </Text>
							<Text>Day {this.props.data.days.length-index}</Text>
							<Sets data={item}  />
						</View>
					}
				/>
			</View> 
		);
	}
}

class Plan extends Component {
	
	render() {
		
		return (
			<FlatList
				data={this.props.data.reverse()}
				renderItem={({item, index}) => 
					<View>
						<Text> </Text>
						<Text>Week {this.props.data.length-index}</Text>
						<Days data={item} />
					</View>
				}
			/>
			
		);
	}
}

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			progressionWeek: 3,
			progressionDay: 1,
			renderedPlan: []
        };
	}
	componentWillMount(){ 
		var customPlan = [];
		var customPlanWeek = [];
		for(i = 0; i < this.state.progressionWeek; i++){
			if(i != this.state.progressionWeek-1){
				customPlan = customPlan.concat(this.props.TrainingPlan[i].difficulties[this.props.difficulty])
			}else{
				for(u = 0; u < this.state.progressionDay; u++){
					customPlanWeek = customPlanWeek.concat(this.props.TrainingPlan[i].difficulties[this.props.difficulty].days[u])
				}
				customPlan = customPlan.concat({days:customPlanWeek})
			}
		}
		this.setState({ 
            renderedPlan: customPlan
        })
	}
	render() {
		
		return ( 
			<ScrollView styles={styles.container}>
				<Plan data={this.state.renderedPlan} difficulty={this.props.difficulty}/>
			</ScrollView>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		//flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		width: Dimensions.get('window').width,
	},
	day: {
		borderWidth: 1,
		borderColor: 'black',
		width: Dimensions.get('window').width-40,
		margin:20,
		opacity: 0.5
	}
  });
  