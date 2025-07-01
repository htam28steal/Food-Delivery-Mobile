import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
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
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#010f07ff',
    textAlign: 'center',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#868686ff',
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 10,
  },
});

const CurrentLocationButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={locationButtonStyles.container}
      onPress={() => {
        navigation.navigate('TypeLocation');
      }}>
      <Image
        source={require('../images/location2Icon.png')}
        style={locationButtonStyles.icon}
      />
      <Text style={locationButtonStyles.text}>Use current location</Text>
    </TouchableOpacity>
  );
};

const locationButtonStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eea734ff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    width: 335,
    height: 48,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#eea734ff',
  },
});

const NewAddressInput = () => {
  return (
    <View style={addressInputStyles.container}>
      <Image
        source={require('../images/locationIcon.png')}
        style={addressInputStyles.icon}
      />
      <TextInput
        style={addressInputStyles.input}
        placeholder="Enter a new address"
        placeholderTextColor="#868686ff"
      />
    </View>
  );
};

const addressInputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    width: 335,
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    fontSize: 16,
    fontWeight: '400',
    flex: 1,
    color: '#010f07ff',
  },
});

const RestaurantFinder = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={mainStyles.container}>
      <TextHeader
        title="Find restaurants near you"
        subtitle="Please enter your location or allow access to your location to find restaurants near you."
      />
      <CurrentLocationButton navigation={navigation} />
      <NewAddressInput />
    </ScrollView>
  );
};

const mainStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
});

export default RestaurantFinder;
