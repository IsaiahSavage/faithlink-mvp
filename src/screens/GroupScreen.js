import React, { useEffect, useState, useCallback } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  RefreshControl,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ActionIconLabeled from '../components/ActionIconLabeled';
import UpdateList from '../components/UpdateList';
import { useUserContext } from '../contexts/UserContext';
import { Button, TextInput, Portal, Provider, Modal } from 'react-native-paper';
import { useFetchGroupInfo } from '../../firebase/fetchAPI';
import { FIRESTORE_DB } from '../../firebase/firebaseConfig';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import GroupContactModal from '../components/GroupContactModal';

const GroupScreen = () => {
  const { state, dispatch } = useUserContext();
  const [groupID, setGroupID] = useState(
    state.userData.hasOwnProperty('groupID') ? state.userData.groupID : '',
  );
  const [groupInfo, setGroupInfo] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [isGroupContactModalVisible, setIsGroupContactModalVisible] =
    useState(false);

  const showGroupContactModal = () => setIsGroupContactModalVisible(true);

  const hideGroupContactModal = () => setIsGroupContactModalVisible(false);

  const navigation = useNavigation();
  const group = async () => await useFetchGroupInfo(groupID);

  useEffect(() => {
    getGroupInfo();
  }, []);

  const updateGroupID = async () => {
    try {
      if (group) {
        // TODO: abstract into separate post request file
        const docRef = doc(FIRESTORE_DB, 'users', state.userID);
        await setDoc(docRef, { groupID: groupID }, { merge: true });
        dispatch({ type: 'SET_GROUP_ID', payload: groupID });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getGroupInfo().finally(() => setRefreshing(false));
  }, []);

  const getGroupInfo = async () => {
    try {
      const docRef = doc(FIRESTORE_DB, 'groups', groupID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setGroupInfo((groupInfo) => docSnap.data());
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!state.userData.groupID)
    return (
      <View style={[styles.contentContainer, { justifyContent: 'center' }]}>
        <Text>You are not in a group.</Text>
        <Text>Join a group to get started.</Text>
        <TextInput
          label="Group ID"
          value={groupID}
          onChangeText={(text) => setGroupID(text)}
          style={{ marginVertical: 10, width: 200 }}
        />
        <Button
          mode="contained"
          style={{}}
          onPress={() => {
            groupID !== '' && groupID !== null
              ? updateGroupID()
              : alert('Error: please enter group ID');
          }}
        >
          Join Group
        </Button>
      </View>
    );

  return (
    <Provider>
      <ScrollView
        style={styles.wrapper}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.contentContainer}>
          <View style={styles.groupSummaryContainer}>
            <Text style={styles.groupName}>
              {groupInfo ? groupInfo.name : 'Error'}
            </Text>
            <View style={styles.meetingInfoContainer}>
              <Text style={[styles.meetingInfoText, styles.meetingInfoHeader]}>
                Next Meeting
              </Text>
              <Text style={styles.meetingInfoText}>
                {groupInfo
                  ? new Date(
                      groupInfo.nextMeetingTime.seconds * 1000,
                    ).toLocaleDateString('en-us', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                    })
                  : 'Error'}
              </Text>
              <Text style={styles.meetingInfoText}>
                {groupInfo
                  ? new Date(
                      groupInfo.nextMeetingTime.seconds * 1000,
                    ).toLocaleTimeString('en-us', {
                      hour: 'numeric',
                      minute: '2-digit',
                      hour12: true,
                    })
                  : 'Error'}
              </Text>
              <Text style={styles.meetingInfoText}>
                {groupInfo ? groupInfo.nextMeetingLocation : 'Error'}
              </Text>
            </View>
          </View>
          <View style={styles.groupActionContainer}>
            <ActionIconLabeled
              name={'book'}
              color={'#002857'}
              text={'Resources'}
              onPress={() => navigation.navigate('Resources')}
            />
            <ActionIconLabeled
              name={'life-buoy'}
              color={'#002857'}
              text={'Prayer'}
              onPress={() => navigation.navigate('Prayer')}
            />
            <ActionIconLabeled
              name={'user'}
              color={'#002857'}
              text={'Contact'}
              onPress={showGroupContactModal}
            />
            <Portal>
              <GroupContactModal
                visible={isGroupContactModalVisible}
                hideModal={hideGroupContactModal}
              />
            </Portal>
          </View>
          {groupInfo && groupInfo.updates.length > 0 ? (
            <UpdateList
              updates={groupInfo.updates}
              title={'Updates'}
              containerStyles={{ marginHorizontal: 25, marginVertical: 40 }}
            />
          ) : (
            <Text style={{ alignSelf: 'center', marginTop: 40 }}>
              No updates yet.
            </Text>
          )}
        </View>
        {/* TODO: Add leave group functionality */}
        <Button
          style={styles.leaveGroupButton}
          onPress={() => {
            alert('Leave group functionality coming soon!');
          }}
        >
          Leave Group
        </Button>
      </ScrollView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    minHeight: '90%',
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
  leaveGroupButton: {
    width: '35%',
    alignSelf: 'center',
  },
});

export default GroupScreen;
