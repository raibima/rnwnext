import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  text: {
    alignItems: 'center',
    fontSize: 24
  },
  box: {
    width: 300,
    height: 150,
    borderWidth: 1
  }
})

export default props => (
  <View style={styles.container}>
    <View style={[styles.box, { backgroundColor: 'blue' }]}></View>
    <Text style={styles.text}>Welcome to Next.js!</Text>
  </View>
)
