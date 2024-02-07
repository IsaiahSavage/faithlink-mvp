import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import NavIconLabeled from '../components/NavIconLabeled';
import UpdateList from '../components/UpdateList';

const UPDATES = [
  {
    header: 'Isaiah Savage',
    timestamp: 'Today',
    content: 'This is an update',
    id: '123958603',
  },
  {
    header: 'Isaiah Savage',
    timestamp: 'Yesterday',
    content:
      'This is a long piece of text to test the wrapping of the content around to the next line. Hopefully this works.',
    id: '123694032',
  },
  {
    header: 'Isaiah Savage',
    timestamp: '2d ago',
    content: 'Hello, world!',
    id: '123860301',
  },
];

const GroupScreen = ({ route, navigation }) => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.contentContainer}>
        <View style={styles.groupSummaryContainer}>
          <Text style={styles.groupName}>Mental Health in the Church</Text>
          <View style={styles.meetingInfoContainer}>
            <Text style={[styles.meetingInfoText, styles.meetingInfoHeader]}>
              Next Meeting
            </Text>
            <Text style={styles.meetingInfoText}>{'Wed. May 5'}</Text>
            <Text style={styles.meetingInfoText}>{'10:20am'}</Text>
            <Text style={styles.meetingInfoText}>{'Jetter 133'}</Text>
          </View>
        </View>
        <View style={styles.groupActionContainer}>
          <NavIconLabeled
            name={'book'}
            color={'#002857'}
            text={'Resources'}
            navScreenName={'ViewSearchResultsScreen'}
            navScreenArgs={{
              search: 'Mental Health in the Church',
              type: 'group',
            }}
          />
          <NavIconLabeled
            name={'life-buoy'}
            color={'#002857'}
            text={'Prayer'}
          />
          <NavIconLabeled name={'user'} color={'#002857'} text={'Contact'} />
        </View>
        <UpdateList
          updates={UPDATES}
          title={'Updates'}
          containerStyles={{ marginHorizontal: 25, marginVertical: 40 }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  groupSummaryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 40,
    paddingVertical: 10,
    minWidth: 350,
  },
  groupName: {
    fontSize: 30,
    color: '#002857',
    alignSelf: 'flex-start',
    maxWidth: 150,
    marginRight: 10,
  },
  meetingInfoContainer: {
    alignItems: 'flex-end',
    marginLeft: 15,
  },
  meetingInfoText: {
    fontSize: 16,
    color: '#337AB7',
  },
  meetingInfoHeader: {
    color: '#002857',
    marginBottom: 10,
  },
  groupActionContainer: {
    flexDirection: 'row',
  },
});

export default GroupScreen;
