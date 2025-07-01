import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

const TextHeader = ({ title, subtitle }) => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.title}>{title}</Text>
      <Text style={headerStyles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#010f07',
    textAlign: 'center',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#868686',
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 10,
  },
});

const SearchBar = () => {
  const [text, setText] = useState('HayStreet, Perth');

  const clearText = () => {
    setText('');
  };

  return (
    <View style={searchBarStyles.container}>
      <Image
        source={require('../images/locationIcon.png')}
        style={searchBarStyles.markerIcon}
      />
      <TextInput
        style={searchBarStyles.input}
        onChangeText={setText}
        value={text}
        placeholder="Search"
        placeholderTextColor="rgba(1, 15, 7, 0.5)"
      />
      <TouchableOpacity onPress={clearText}>
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: '#D8D8D8',
            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../images/closeIcon.png')}
            style={searchBarStyles.closeIcon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const searchBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 335,
    height: 48,
    backgroundColor: '#FBFBFB',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  markerIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    fontFamily: 'Yu Gothic UI',
    letterSpacing: -0.4,
    color: '#010f07',
  },
  closeIcon: {
    width: 16,
    height: 16,
  },
});

const AddressItem = ({ addressName, state , navigation}) => {
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate('HomePage')}}>
      <View style={addressStyles.container}>
        <Image
          source={require('../images/location1Icon.png')}
          style={addressStyles.icon}
        />
        <View style={addressStyles.textContainer}>
          <Text style={addressStyles.addressName}>{addressName}</Text>
          <Text style={addressStyles.state}>{state}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const addressStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 21,
    backgroundColor: '#ffffff',
    width: 339,
    height: 66,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  addressName: {
    fontSize: 16,
    fontFamily: 'Yu Gothic UI',
    fontWeight: '400',
    color: '#010f07',
    lineHeight: 24,
  },
  state: {
    fontSize: 13,
    fontFamily: 'Yu Gothic UI',
    fontWeight: '400',
    color: '#868686',
    lineHeight: 20,
  },
});

const RestaurantFinder = ({navigation}) => {
  const DATA = [
    {
      key: '1',
      addressName: 'St Georges Terrace, Perth',
      state: 'Western Australia',
    },
    {
      key: '2',
      addressName: 'Murray street, Perth',
      state: 'Western Australia',
    },
    {
      key: '3',
      addressName: 'Kings Square, Perth',
      state: 'Western Australia',
    },
    { key: '4', addressName: 'San Francisco', state: 'California' },
    { key: '5', addressName: 'San Francisco', state: 'California' },
  ];

  return (
    <View style={mainStyles.container}>
      <TextHeader
        title="Find restaurants near you"
        subtitle="Please enter your location or allow access to your location to find restaurants near you."
      />
      <SearchBar />
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <AddressItem addressName={item.addressName} state={item.state} navigation={navigation} />
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
});

export default RestaurantFinder;
