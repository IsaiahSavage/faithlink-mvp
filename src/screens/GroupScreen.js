import React, { useEffect, useState, useCallback } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  RefreshControl,
} from 'react-native';
import NavIconLabeled from '../components/NavIconLabeled';
import UpdateList from '../components/UpdateList';
import { useUserContext } from '../contexts/UserContext';
import {
  Button,
  TextInput,
  Portal,
  Provider,
  Modal,
  FAB,
} from 'react-native-paper';
import { FIRESTORE_DB } from '../../firebase/firebaseConfig';
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import GroupContactModal from '../components/GroupContactModal';
import { useNavigation } from '@react-navigation/native';

const GroupScreen = ({ route }) => {
  const { state, dispatch } = useUserContext();
  const [groupID, setGroupID] = useState(
    state.userData.hasOwnProperty('groupID') ? state.userData.groupID : '',
  );
  const [groupInfo, setGroupInfo] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [isGroupContactModalVisible, setIsGroupContactModalVisible] =
    useState(false);

  const navigation = useNavigation();

  const showGroupContactModal = () => setIsGroupContactModalVisible(true);
  const hideGroupContactModal = () => setIsGroupContactModalVisible(false);

  const updateGroupID = async (isJoining) => {
    try {
      const userDocRef = doc(FIRESTORE_DB, `/users/${state.userID}`);
      if (groupID !== '') {
        const groupDocRef = doc(FIRESTORE_DB, `/groups/${groupID}`);
        await updateDoc(groupDocRef, {
          members: isJoining ? arrayUnion(userDocRef) : arrayRemove(userDocRef),
        });
      }
      await updateDoc(userDocRef, {
        groupID: groupID,
        roleType: isJoining ? 'member' : 'user',
      });

      dispatch({ type: 'SET_GROUP_ID', payload: groupID });
    } catch (error) {
      if (error.code === 'not-found') {
        throw new Error(
          'Group does not exist. Please enter a valid group ID.',
          {
            code: 'group-not-found',
          },
        );
      }
    }
  };

  const getGroupInfo = async (groupID) => {
    try {
      const docRef = doc(FIRESTORE_DB, `groups/${groupID}`);
      getDoc(docRef)
        .then((docSnap) => {
          setGroupInfo(docSnap.data());
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getGroupInfo(state.userData.groupID).finally(() => setRefreshing(false));
  }, [state.userData.groupID, refreshing, groupInfo]);

  useEffect(() => {
    getGroupInfo(state.userData.groupID);
  }, [state.userData.groupID]);

  if (
    !state.userData.hasOwnProperty('groupID') ||
    state.userData.groupID === ''
  ) {
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
              ? updateGroupID(true).catch((error) =>
                  error.code === 'group-not-found'
                    ? alert(error.message)
                    : alert(`${error}`),
                )
              : alert('Error: please enter group ID');
          }}
        >
          Join Group
        </Button>
      </View>
    );
  }

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
              {groupInfo ? groupInfo.name : 'Loading...'}
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
                  : ''}
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
                  : ''}
              </Text>
              <Text style={styles.meetingInfoText}>
                {groupInfo ? groupInfo.nextMeetingLocation : ''}
              </Text>
            </View>
          </View>
          <View style={styles.groupActionContainer}>
            <NavIconLabeled
              name={'book'}
              color={'#002857'}
              text={'Resources'}
              navScreenName={'Resources'}
              navScreenArgs={{
                screen: 'ViewSearchResultsScreen',
                params: {
                  search: groupInfo ? groupInfo.name : 'unknown',
                  type: 'group',
                  initial: false,
                },
              }}
            />
            <NavIconLabeled
              name={'life-buoy'}
              color={'#002857'}
              text={'Prayer'}
              onPress={() => alert('Prayer functionality coming soon!')}
              navScreenName={'PrayerScreen'}
            />
            <NavIconLabeled
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
        <Button
          style={styles.leaveGroupButton}
          onPress={() => {
            setGroupID((groupID) => '');
            updateGroupID(false)
              .catch((error) => alert(`Error: ${error}`))
              .finally(() => dispatch({ type: 'SET_GROUP_ID', payload: '' }));
            alert('You have left the group.');
          }}
        >
          Leave Group
        </Button>
      </ScrollView>
      {state.userData.groupID &&
      (state.userData.roleType === 'admin' ||
        state.userData.roleType === 'leader') ? (
        <FAB
          icon={'plus'}
          style={styles.fab}
          customSize={75}
          onPress={() => {
            navigation.navigate('AddUpdateScreen');
          }}
        />
      ) : (
        <></>
      )}
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
    marginVertical: 10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    borderRadius: 60,
    color: '#002857',
    backgroundColor: '#E8E8E8',
  },
});

export default GroupScreen;
