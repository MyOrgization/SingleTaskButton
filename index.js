import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

export default class SingleTaskButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity>
        <Text>Example</Text>
      </TouchableOpacity>
    )
  }
}