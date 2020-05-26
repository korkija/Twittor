
import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

export const Authorization = () => {
  return (
    <ScrollView>
      <View style={stylesMain.container}>
        <Text>Authorization</Text>
      </View>
    </ScrollView>
  );
};
const stylesMain = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 20,
  },
});
