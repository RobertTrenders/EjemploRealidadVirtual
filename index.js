import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default class Hello360 extends React.Component {

  state = {
    show: false,
  };

  // This method increments our count, triggering a re-render
_showText = () => {
  this.setState({show: true});
};

  render() {
    return (
      <View style={styles.panel}>
        <View >
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>
              Trenders en 360 papa!!
            </Text>
          </View>
        </View>
        <VrButton
          onClick={this._showText}
          style={styles.greetingBox}>
          <Text style={styles.greeting}>
            No tocar este Boton!
          </Text>
      </VrButton>
      { this.state.show &&
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Puto el que lee.
          </Text>
        </View>
      }
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    margin:20,
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
