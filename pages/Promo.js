import React, { Component } from 'react';

import { StyleSheet, View, Text, Platform, Alert } from 'react-native';

import CountDown from 'react-native-countdown-component';

export default class App extends Component {

  onDoneCountdown = () => {

    Alert.alert("หมดช่วงโปรโมชั่น!!!!.");

  }

  onPressCountdown = () => {

    Alert.alert("Countdown Component Press.");

  }

  render() {
    return (
      <View style={styles.MainContainer}>

<CountDown
        until={60+5 }
        size={30}
        onFinish={() => alert('หมดช่วงโปรโมชั่น!!!!')}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: '#1CC625'}}
        timeToShow={['D', 'H', 'M','S']}
        timeLabels={{  d:'Day',h: 'Hour', m: 'minute', s: 'second'}}
        />

      </View>
    );
  }
}
const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  }

});