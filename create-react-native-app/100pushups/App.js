import React from 'react';
import {NavigatorIOS, TabBarIOS, TextInput, Image, FlatList,DatePickerIOS,ActivityIndicator,Vibration, ScrollView, StyleSheet, Text, View, Alert, Button, Slider, WebView } from 'react-native';
import SortableList from 'react-native-sortable-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  componentDidMount() {
    const PATTERN = [1000, 2000, 3000]
    Vibration.vibrate(PATTERN)
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    );
  }
  
  render() {
    const data = {
      0: {
        image: 'https://placekitten.com/200/240',
        text: 'Chloe',
      },
      1: { 
        image: 'https://placekitten.com/200/201',
        text: 'Jasper',
      },
      2: {
        image: 'https://placekitten.com/200/202',
        text: 'Pepper',
      },
      3: {
        image: 'https://placekitten.com/200/203',
        text: 'Oscar',
      },
      4: {
        image: 'https://placekitten.com/200/204',
        text: 'Dusty',
      },
      5: {
        image: 'https://placekitten.com/200/205',
        text: 'Spooky',
      },
      6: {
        image: 'https://placekitten.com/200/210',
        text: 'Kiki',
      },
      7: {
        image: 'https://placekitten.com/200/215',
        text: 'Smokey',
      },
      8: {
        image: 'https://placekitten.com/200/220',
        text: 'Gizmo',
      },
      9: {
        image: 'https://placekitten.com/220/239',
        text: 'Kitty',
      },
    };
    return (
      <View style={styles.container}>
        <SortableList data={data} >
        </SortableList>
       <TabBarIOS.Item title="React Native" systemIcon="contacts" selected={true}>
        <Text>1.</Text>
      </TabBarIOS.Item>
      <TabBarIOS.Item title="React Native" systemIcon="contacts" selected={true}>
        <Text>2.</Text>
      </TabBarIOS.Item>
      <ScrollView>
        <Image
          style={{width: 66, height: 58}}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        //onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
        
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />

          <DatePickerIOS
            date={this.state.chosenDate}
            onDateChange={this.setDate}
          />
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Button
            //onPress={onPressLearnMore}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Slider maximumValue={10} minimumValue={1} step={10} value={4} style={styles.slider}/>
          <WebView
          source={{uri: 'https://madsf.dk/'}}
          style={{marginTop: 20}}
        />
      </ScrollView>
      </View>
    );
    _renderRow = ({data}) => {
      return <Row data={data} />
    }
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120
  },
  slider: {
    width: 100,
  }
});
