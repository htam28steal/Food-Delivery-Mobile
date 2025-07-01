import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

const AddressItem = ({ icon, address, navigation }) => {
  return (
    <TouchableOpacity style={styles.addressItem} onPress={()=>{navigation.navigate('Screen_AddSocialAccount')}}>
      <Image source={typeof icon === 'string' ? { uri: icon } : icon} style={styles.addressIcon} />
      <Text style={styles.addressText}>{address}</Text>
    </TouchableOpacity>
  );
};

const Locations = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Methods</Text>
      <View style={styles.searchContainer}>
        <Image
          source={require('../images/location.png')}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search new address"
          style={styles.searchInput}
          placeholderTextColor="#868686"
        />
      </View>
      <View style={styles.recentContainer}>
        <Text style={styles.recentTitle}>Recent Address</Text>
        <TouchableOpacity>
          <Text style={styles.clearAll}>Clear all</Text>
        </TouchableOpacity>
      </View>
      <AddressItem
        icon={require('../images/location.png')}
        address="Hay Street, Perth"
        navigation={navigation}
      />
      <AddressItem
         icon={require('../images/location.png')}
        address="Zoo, Perth"
        navigation={navigation}
      />
      <AddressItem
         icon={require('../images/location.png')}
        address="Murray Street, Perth"
        navigation={navigation}
      />
      <AddressItem
        icon={require('../images/location.png')}
        address="St George Terrace, Perth"
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#010f07',
    alignSelf: 'center',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 48,
    marginBottom: 20,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#868686',
  },
  searchInput: {
    fontSize: 16,
    flex: 1,
    color: '#010f07',
  },
  recentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: '300',
    color: '#868686',
    textTransform: 'uppercase',
  },
  clearAll: {
    fontSize: 12,
    fontWeight: '300',
    color: '#000',
    textTransform: 'uppercase',
  },
  addressItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  addressIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#868686',
  },
  addressText: {
    fontSize: 16,
    color: '#010f07',
  },
});

export default Locations;
