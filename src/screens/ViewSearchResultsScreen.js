import React, { useState, useCallback, useEffect } from 'react';
import {
  RefreshControl,
  ScrollView,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../firebase/firebaseConfig';
import ResourceList from '../components/ResourceList';

const ViewSearchResultsScreen = ({ route, navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [results, setResults] = useState([]);
  const [type, setType] = useState(route.params.type);
  const [search, setSearch] = useState(
    type !== 'media' ? route.params.search : '',
  );

  // TODO: do we actually need refresh here?
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    executeQuery();
    setRefreshing(false);
  }, [results]);

  const constructQuery = () => {
    switch (type) {
      case 'search':
      // TODO: implement search
      case 'tag':
        return query(
          collection(FIRESTORE_DB, 'resources'),
          where('tags', 'array-contains', search.toLowerCase().trim()),
        );
      case 'media':
        return query(
          collection(FIRESTORE_DB, 'resources'),
          where('mediaType', '==', route.params.search.toLowerCase().trim()),
        );
      case 'group':
        return query(
          collection(FIRESTORE_DB, 'resources'),
          where('group', '==', route.params.search.toLowerCase().trim()),
        );
      default:
        break;
    }
  };

  const executeQuery = () => {
    setIsBusy((isBusy) => true);

    const searchQuery = constructQuery();

    getDocs(searchQuery)
      .then((querySnapshot) => {
        setResults((results) => []);
        querySnapshot.forEach((doc) => {
          setResults((results) => [...results, doc.data()]);
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsBusy((isBusy) => false);
      });
  };

  return isBusy && !refreshing ? (
    <ActivityIndicator animating={true} style={{ height: '100%' }} />
  ) : (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={styles.wrapper}
    >
      <Searchbar
        placeholder="Search for a resource"
        onChangeText={setSearch}
        value={search}
        style={styles.searchBarContainer}
        inputStyle={styles.searchBar}
        // TODO: implement search
        onIconPress={() => {
          navigation.navigate('ViewSearchResultsScreen', {
            search: search,
            type: 'search',
          });
        }}
        onSubmitEditing={() => {
          navigation.navigate('ViewSearchResultsScreen', {
            search: search,
            type: 'search',
          });
        }}
        // TODO: implement theme prop
      />
      <View style={styles.contentContainer}>
        <ResourceList
          resources={results}
          title={
            type === 'search'
              ? `Search Results for "${search}"`
              : type === 'tag'
              ? `Resources tagged "${route.params.search}"`
              : type === 'media'
              ? `Resources of type "${route.params.search}"`
              : `Resources for "${route.params.search}"`
          }
          containerStyles={styles.resourceListContainer}
        />
        {results.length === 0 && <Text>No results found.</Text>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  contentContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  resourceListContainer: {
    marginTop: 10,
  },
  searchBar: {
    backgroundColor: '#E8E8E8',
  },
  searchBarContainer: {
    margin: 10,
    width: '95%',
    borderRadius: 6,
    backgroundColor: '#E8E8E8',
  },
});

export default ViewSearchResultsScreen;
