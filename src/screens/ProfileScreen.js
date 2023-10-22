import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import LinkButton from '../components/LinkButton';

const LINKS = [
  {
    screen: 'Settings',
    text: 'Settings',
  },
  {
    screen: 'Redirect',
    text: 'Scan Into Chapel',
  },
  {
    screen: 'TermsOfUse',
    text: 'Terms of Use',
  },
  {
    screen: 'PrivacyPolicy',
    text: 'Privacy Policy',
  },
  {
    screen: 'ContactSupport',
    text: 'Contact Support',
  },
];

const ProfileScreen = () => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.loginStatsContainer}>
        <Text style={styles.loginStatsStreak}>Streak: 128</Text>
        <Text style={styles.loginStatsWeek}>This week: 6</Text>
      </View>
      <View style={styles.settingsContainer}>
        {/* 
        // This is in case we switch back to a 2-column layout with smaller button option
        <FlatList
          data={LINKS.filter((e) => e.size === 'small')}
          renderItem={({ item }) => (
            <LinkButton
              to={{ screen: `${item.screen}` }}
              containerStyles={[
                styles.settingsButton,
                styles.settingsButtonSmall,
              ]}
              textStyles={[
                styles.settingsButtonText,
                styles.settingsButtonSmallText,
              ]}
            >
              {item.text}
            </LinkButton>
          )}
          keyExtractor={(item) => `${item.screen}`}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          scrollEnabled={false}
          style={[styles.settingsGroupContainer]}
        /> */}
        <FlatList
          data={LINKS}
          renderItem={({ item }) => (
            <LinkButton
              to={{ screen: `${item.screen}` }}
              containerStyles={styles.settingsButton}
              textStyles={styles.settingsButtonText}
            >
              {item.text}
            </LinkButton>
          )}
          keyExtractor={(item) => item.screen}
          scrollEnabled={false}
          style={styles.settingsGroupContainer}
        />
      </View>
      <Text style={styles.deviceInfo}>
        Device ID: 123456789, Release Version v0.0.1a
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    height: '100%',
  },
  loginStatsContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 25,
  },
  loginStatsStreak: {
    color: '#002857',
    fontSize: 20,
    marginRight: 10,
  },
  loginStatsWeek: {
    color: '#337AB7',
    fontSize: 20,
  },
  settingsContainer: {
    marginTop: 20,
  },
  settingsGroupContainer: {
    marginHorizontal: 10,
  },
  settingsButton: {
    backgroundColor: '#E8E8E8',
    borderRadius: 100,
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 15,
  },
  settingsButtonText: {
    color: '#337AB7',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // See comment above about smaller button option
  // settingsButtonSmall: {
  //   flex: 0.5,
  //   width: '50%',
  //   marginHorizontal: 10,
  // },
  // settingsButtonSmallText: {
  //   textAlign: 'center',
  // },
  deviceInfo: {
    color: '#E8E8E8',
    textAlign: 'center',
  },
});

export default ProfileScreen;
