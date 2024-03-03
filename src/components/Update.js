import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MAX_TITLE_LENGTH = 25;

const Update = ({ header, timestamp, content }) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={[styles.text, styles.header]}>
          {header.length > MAX_TITLE_LENGTH
            ? header.slice(0, MAX_TITLE_LENGTH) + '...'
            : header}
        </Text>
        <Text style={[styles.text, styles.timestamp]}>{timestamp}</Text>
      </View>
      <Text style={[styles.text, styles.content]}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    minHeight: 75,
    width: '100%',
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  timestamp: {
    marginHorizontal: 10,
    color: 'gray',
    alignSelf: 'flex-end',
  },
  content: {
    marginHorizontal: 10,
  },
});

export default Update;
