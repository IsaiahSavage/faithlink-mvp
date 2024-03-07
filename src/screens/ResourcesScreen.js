import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Searchbar, FAB } from 'react-native-paper';
import { useUserContext } from '../contexts/UserContext';

const ResourcesScreen = ({ route, navigation }) => {
  const [search, setSearch] = useState('');
  const { state } = useUserContext();
  // const navigation = useNavigation();

  const handleSearchPressed = (search) => {
    navigation.navigate('ViewSearchResultsScreen', {
      search: search,
      type: 'search',
    });
  };

  const handleSearchFilterPressed = (filterName) => {
    navigation.navigate('ViewSearchResultsScreen', {
      search: filterName,
      type: 'tag',
    });
  };

  const handleMediaFilterPressed = (filterName) => {
    navigation.navigate('ViewSearchResultsScreen', {
      search: filterName,
      type: 'media',
    });
  };

  return (
    <>
      <ScrollView style={styles.wrapper}>
        <View style={styles.container}>
          <Searchbar
            placeholder="Search for a resource"
            onChangeText={setSearch}
            value={search}
            style={styles.searchBarContainer}
            inputStyle={styles.searchBar}
            onIconPress={() => {
              handleSearchPressed(search);
              setSearch((search) => '');
            }}
            onSubmitEditing={() => {
              handleSearchPressed(search);
              setSearch((search) => '');
            }}
            // TODO: add theme prop
          />
          <ScrollView horizontal style={styles.searchFilterContainer}>
            {/* TODO: refactor into SearchFilter component once functionality is added */}
            <TouchableOpacity
              style={styles.searchFilter}
              onPress={() => handleSearchFilterPressed('Prayer')}
            >
              <Text style={styles.searchFilterText}>Prayer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.searchFilter}
              onPress={() => handleSearchFilterPressed('Anxiety')}
            >
              <Text style={styles.searchFilterText}>Anxiety</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.searchFilter}
              onPress={() => handleSearchFilterPressed('Faith')}
            >
              <Text style={styles.searchFilterText}>Faith</Text>
            </TouchableOpacity>
          </ScrollView>
          {/* TODO: refactor into CardLarge component? */}
          <View style={styles.featuredResource}>
            <Pressable
              onPress={() =>
                navigation.navigate('ViewResourceScreen', {
                  resourceID: 'evWeQo5anF2AK2yPF99J',
                })
              }
            >
              <Image style={styles.featuredResourceImage} />
              <Text style={styles.featuredResourceText}>
                Conquering Your Fears
              </Text>
            </Pressable>
          </View>
          {/* TODO: refactor into Gallery and GalleryItem components? */}
          <View style={styles.resourceGallery}>
            <TouchableOpacity
              style={styles.resourceGalleryItemContainer}
              onPress={() => handleMediaFilterPressed('article')}
            >
              <LinearGradient
                colors={['#FDBB2D', '#3A1C71']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.resourceGalleryItemBackground}
              >
                <Text style={styles.resourceGalleryItemText}>Articles</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.resourceGalleryItemContainer}
              onPress={() => handleMediaFilterPressed('video')}
            >
              <LinearGradient
                colors={['#22c1c3', '#fdbb2d']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.resourceGalleryItemBackground}
              >
                <Text style={styles.resourceGalleryItemText}>Videos</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.resourceGalleryItemContainer}
              onPress={() => handleMediaFilterPressed('image')}
            >
              <LinearGradient
                colors={['#FC466B', '#3F5EFB']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.resourceGalleryItemBackground}
              >
                <Text style={styles.resourceGalleryItemText}>Images</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.resourceGalleryItemContainer}
              onPress={() => handleMediaFilterPressed('audio')}
            >
              <LinearGradient
                colors={['#f8ff00', '#3ad59f']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.resourceGalleryItemBackground}
              >
                <Text style={styles.resourceGalleryItemText}>Audio</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {state.userData.groupID &&
      (state.userData.roleType === 'admin' ||
        state.userData.roleType === 'leader') ? (
        <FAB
          icon={'plus'}
          style={styles.fab}
          customSize={75}
          onPress={() => navigation.navigate('CreateResourceScreen')}
        />
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
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
  searchFilterContainer: {
    marginHorizontal: 10,
    alignSelf: 'flex-start',
    marginBottom: 20,
    minWidth: 350,
  },
  searchFilter: {
    borderRadius: 6,
    backgroundColor: '#E8E8E8',
    marginRight: 10,
  },
  searchFilterText: {
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 4,
    color: '#002857',
  },
  featuredResource: {
    backgroundColor: '#E8E8E8',
    borderRadius: 6,
    marginHorizontal: 10,
  },
  featuredResourceImage: {
    height: 150,
    width: 350,
  },
  featuredResourceText: {
    fontSize: 20,
    marginVertical: 10,
    marginLeft: 6,
  },
  resourceGallery: {
    marginVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    minWidth: 350,
    marginHorizontal: 10,
  },
  resourceGalleryItemContainer: {
    borderRadius: 6,
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  resourceGalleryItemBackground: {
    height: 150,
    width: 150,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resourceGalleryItemText: {
    color: 'white',
    fontSize: 20,
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

export default ResourcesScreen;
