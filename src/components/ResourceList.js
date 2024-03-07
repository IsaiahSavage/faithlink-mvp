import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Update from './Update';

const ResourceList = ({ resources, title, containerStyles }) => {
  const navigation = useNavigation();

  // TODO: handle group-exclusive content
  return (
    <View style={[styles.container, containerStyles]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.resourceList}>
        {resources.map((resource) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ViewResourceScreen', {
                resourceID: resource.id,
              })
            }
            key={resource.id}
          >
            <Update
              header={resource.data.title.join(' ')}
              timestamp={new Date(
                resource.data.createdOn.seconds * 1000,
              ).toLocaleDateString('en-us', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
              })}
              content={resource.data.group ? 'Group-exclusive Content' : ''}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'flex-start',
    width: '100%',
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
    color: '#002857',
  },
  resourceList: {
    marginVertical: 10,
  },
});

export default ResourceList;
