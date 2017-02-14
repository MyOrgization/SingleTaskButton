/** 
 * Created by Uncle Charlie, 2017/02/
*/

import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import singleTaskKeeper from './lib/singleTaskKeeper'

const THRESHOLD_WAIT = 300

export default class SingleTaskButton extends React.Component {
  constructor(props) {
    super(props)

    this._startTask = singleTaskKeeper(this._startTask, THRESHOLD_WAIT, this)
  }

  _startTask() {
    this.props.onPress()
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={1} style={this.props.style} onPress={this._startTask}>
        {this.props.children}
      </TouchableOpacity>
    )
  }
}

