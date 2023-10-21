import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import LinkButton from '../components/LinkButton';
import UpdateList from '../components/UpdateList';

const REQUESTS = [
  {
    header: 'Prayer for my grandpa',
    timestamp: 'Today',
    content: 'This is a prayer request.',
    id: '123958603',
  },
  {
    header: 'Prayer for campus',
    timestamp: 'Yesterday',
    content:
      'This is a long piece of text to test the wrapping of the content around to the next line. Hopefully this works.',
    id: '123694032',
  },
  {
    header: 'I need help',
    timestamp: '2d ago',
    content: 'I do not know what to do.',
    id: '123860301',
  },
  {
    header: 'I need help',
    timestamp: '3d ago',
    content: 'I do not know what to do.',
    id: '123865301',
  },
];

const Prayer = () => {
  return (
    // <ScrollView style={styles.wrapper}>
    //   <View style={styles.contentContainer}>
    //     <View style={styles.prayerTimerContainer}>
    //       <LinkButton
    //         to={'/PrayerTimer'}
    //         containerStyles={styles.prayerTimerButtonContainer}
    //         textStyles={styles.prayerTimerButtonText}
    //       >
    //         Start Prayer
    //       </LinkButton>
    //     </View>
    //     <UpdateList
    //       updates={REQUESTS}
    //       title={'Requests'}
    //       containerStyles={styles.requestListContainer}
    //     />
    //   </View>
    // </ScrollView>
    <SafeAreaView style={styles.contentContainer}>
      <View style={styles.prayerTimerContainer}>
        <LinkButton
          to={'/PrayerTimer'}
          containerStyles={styles.prayerTimerButtonContainer}
          textStyles={styles.prayerTimerButtonText}
        >
          Start Prayer
        </LinkButton>
      </View>
      <ScrollView>
        <UpdateList
          updates={REQUESTS}
          title={'Requests'}
          containerStyles={styles.requestListContainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  contentContainer: {
    flex: 1,
  },
  prayerTimerContainer: {
    minWidth: 350,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 25,
    borderRadius: 6,
  },
  prayerTimerButtonContainer: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prayerTimerButtonText: {
    fontSize: 35,
    textAlign: 'center',
    color: '#337AB7',
  },
  requestListContainer: {
    marginHorizontal: 10,
  },
});

export default Prayer;
