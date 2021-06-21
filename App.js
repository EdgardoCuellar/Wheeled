import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';

import WheelOfFortune from 'react-native-wheel-of-fortune';

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
      knobSize: 30,
      borderWidth: -1,

      borderColor: '#fff',
      innerRadius: 500,
      duration: 6000,
      backgroundColor: 'transparent',
      textAngle: 'horizontal',
      knobSource: require('./knob.png'),
      onRef: ref => (this.child = ref),
    };
    return (
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
        {!this.state.started && (
          <View style={styles.startButtonView}>
            <TouchableOpacity
              onPress={() => this.buttonPress()}
              style={styles.startButton}>
              <Text style={styles.startButtonText}>Spin to win!</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFADAD'
  },
  wheel: {
    position: 'absolute',
    bottom: -60,
  },
  startButtonView: {
    position: 'absolute',
  },
  startButton: {
    backgroundColor: 'rgba(0,0,0,.5)',
    marginTop: 0,
    padding: 5,
  },
  startButtonText: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
  tryAgainButton: {
    padding: 10,
  },
  tryAgainButton: {
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  tryAgainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});