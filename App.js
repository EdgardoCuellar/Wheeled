import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import Popuped from './components/popup';
import WheelOfFortune from 'react-native-wheel-of-fortune';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const participants = [
  'Riz Curry',
  'Riz vegé',
  'Pates bolo',
  'Pates 4 fromages',
  'Pates champignons',
  'Vol au vent',
  'Boulette',
  'Riz vegé',
  'Pates bolo',
  'Pates 4 fromages',
  'Pates champignons',
  'Vol au vent',
  'Boulette',
  'Riz vegé',
  'Pates bolo',
  'Pates 4 fromages',
  'Pates champignons',
  'Vol au vent',
  'Boulette',
];
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winnerValue: null,
      winnerIndex: null,
      started: false,
    };
    this.child = null;
  }

  buttonPress = () => {
    this.setState({
      started: true,
    });
    this.child._onPress();
  };

  render() {
    const wheelOptions = {
      rewards: participants,
      knobSize: 35,
      borderWidth: -1,

      borderColor: '#fff',
      innerRadius: width*1.35,
      duration: 6000,
      backgroundColor: 'transparent',
      textAngle: 'horizontal',
      knobSource: require('./assets/images/knob.png'),
      onRef: ref => (this.child = ref),
    };
    return (
      <SafeAreaView style={styles.megaContainer}> 
          <TouchableOpacity
            onPress={() => {
              console.log("testo");
            }}>
            <Image
              source={require('./assets/images/points.png')}
              style={styles.ImagePoints}
            />
          </TouchableOpacity>       
        <View style={styles.container}>
          <StatusBar barStyle={'light-content'} />
          <View style={styles.wheel}>
            <WheelOfFortune
              options={wheelOptions}
              getWinner={(value, index) => {
                this.setState({winnerValue: value, winnerIndex: index});
              }}
            />
          </View>
          {
            <View style={styles.startButtonView}>
              <TouchableOpacity
                onPress={() => this.buttonPress()}
                style={styles.startButton}>
                  <Image
                    source={require('./assets/images/reload.png')}
                    style={styles.ImageReload}
                  />
              </TouchableOpacity>
            </View>
          }
          {this.state.winnerIndex != null && (
            <View style={styles.winnerView}>
              <Text style={styles.winnerText}>
                You win {participants[this.state.winnerIndex]}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.setState({winnerIndex: null});
                  this.child._tryAgain();
                }}
                style={styles.tryAgainButton}>
                <Text style={styles.tryAgainText}>TRY AGAIN</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}
export default App;

console.log(height);

const styles = StyleSheet.create({
  megaContainer: {
    flex: 1,
    backgroundColor: '#FFADAD',
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFADAD',
    
  },
  wheel: {
    position: 'absolute',
    bottom: 10 + (height-770),
    
  },
  startButtonView: {
    position: 'absolute',
    alignItems: 'center',
    
  },
  startButton: {
    
  },
  ImageReload: {
    top: -70,
    width: 65,
    height: 65,
  },
  ImagePoints: {
    position: 'relative',
    marginTop: 15,
    marginLeft: 5,
    width: 50,
    height: 50,
    
  },
  startButtonText: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
});