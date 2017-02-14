/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SingleTaskButton from './lib/SingleTaskButton'

const DEMO_HOST = 'http://www.apple.com'

export default class singleTaskButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      resultText: 'you can keep click the button to test',
    }
    this._handleClick = this._handleClick.bind(this)
  }

  _handleClick() {
    fetch(DEMO_HOST)
      .then(() => {
        this.setState({resultText: 'Request finished'})
      })
      .catch((e) => {
        this.setState({resultText: 'ERROR'})
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Single Task Button Demo!
        </Text>
       <View style={{marginHorizontal: 20, marginVertical: 10,}}>
         <SingleTaskButton onPress={this._handleClick} style={styles.button}>
           <Text style={styles.instructions}>
             click to try
           </Text>
         </SingleTaskButton>
       </View>
       <Text style={styles.instructions}>
         {this.state.resultText}
       </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    // marginBottom: 5,
  },
  button: {
    borderWidth: 1,
    borderColor: '#333333', 
    paddingHorizontal: 15, 
    paddingVertical: 5, 
    borderRadius: 5,
  },
});

AppRegistry.registerComponent('singleTaskButton', () => singleTaskButton);
