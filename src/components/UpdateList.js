import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Update from './Update';

const UpdateList = ({ updates, title, containerStyles }) => {
  return (
    <View style={[styles.container, containerStyles]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.updateList}>
        {updates.map(({ header, createdOn, content, id }) => (
          <Update
            header={header}
            timestamp={new Date(createdOn.seconds * 1000).toLocaleDateString()}
            content={content}
            key={id}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
    color: '#002857',
  },
  updateList: {
    marginVertical: 10,
  },
});

export default UpdateList;
