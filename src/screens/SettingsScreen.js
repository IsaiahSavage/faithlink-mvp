import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const SettingsScreen = ({ route, navigation }) => {
  const SETTINGS = [];

  return (
    <View style={styles.contentContainer}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Settings coming soon!</Text>
      {/* <FlatList
        data={settings}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.title}
        style={styles.settingsContainer}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  settingsContainer: {},
  title: {
    fontSize: 25,
  },
});

export default SettingsScreen;
