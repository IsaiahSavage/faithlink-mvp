import React, { useState, useCallback } from 'react';
import { RefreshControl, ScrollView, View, StyleSheet } from 'react-native';
import UpdateList from '../components/UpdateList';

const ACTIVITY = [
  {
    header: 'Isaiah shared an update',
    createdOn: '11/30/23',
    content: 'This is an update as displayed in the activity section',
    id: '123456789',
  },
  {
    header: 'Isaiah shared an update',
    createdOn: '11/30/23',
    content: 'This is an update as displayed in the activity section',
    id: '987654321',
  },
  {
    header: 'Isaiah shared an update',
    createdOn: '11/30/23',
    content: 'This is an update as displayed in the activity section',
    id: '975312468',
  },
  {
    header: 'Isaiah shared an update',
    createdOn: '11/30/23',
    content: 'This is an update as displayed in the activity section',
    id: '000000001',
  },
];

const ActivityScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={styles.wrapper}
    >
      <View style={styles.contentContainer}>
        <UpdateList updates={ACTIVITY} title={''} containerStyles={{}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  contentContainer: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default ActivityScreen;
