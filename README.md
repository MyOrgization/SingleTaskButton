## SingleTaskButton

If you keep click a react-native button as quick as possible, it will execute the `onPress` method multiple times.
This `SingleTaskButton` is to resolve this problem, by waiting **300** milliseconds. So keep in mind this button can not keep things execute only once forever.
You have to get things done in 300 milliseconds.

### Install
```
npm install single-task-button --save
```
or 
```
yarn add single-task-button
```

### How to use
```javascript
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
```

### Custom button style
you can just set the style in this component like this:
```javascript
<SingleTaskButton onPress={this._handleClick} style={styles.button}>
  <Text style={styles.instructions}>
    click to try
  </Text>
</SingleTaskButton>
```
And the style is:
```javascript
const styles = StyleSheet.create({
  //...no need to know...
  button: {
    borderWidth: 1,
    borderColor: '#333333', 
    paddingHorizontal: 15, 
    paddingVertical: 5, 
    borderRadius: 5,
  },
});
```