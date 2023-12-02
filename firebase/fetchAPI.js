import { useState, useEffect } from 'react';
import { FIRESTORE_DB } from './firebaseConfig';
import { collection, doc, getDoc } from 'firebase/firestore';

/**
 * Fetches group information from Firestore database based on the provided group ID.
 * @param {string} groupID - The ID of the group to fetch information for.
 * @returns {Object|null} The group information retrieved from the database, or null if no information is found.
 */
export const useFetchGroupInfo = (groupID) => {
  const [groupInfo, setGroupInfo] = useState(null);

  useEffect(() => {
    const fetchGroupInfo = async () => {
      try {
        const docRef = doc(FIRESTORE_DB, 'groups', groupID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log('Document data:', docSnap.data());
          setGroupInfo((groupInfo) => docSnap.data());
          console.log(groupInfo);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchGroupInfo();
  }, [groupID]);

  return groupInfo;
};
