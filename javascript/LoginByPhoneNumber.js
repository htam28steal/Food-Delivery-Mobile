import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput, Modal, FlatList } from 'react-native';

const LoginByPhoneNumber = ({navigation}) => {
  return (
    <View style={styles.appContainer}>
      <TextContent />
      <PhoneNumberInput />
      <PrimaryButton navigation={navigation} />
    </View>
  );
};

const PhoneNumberInput = () => {
  const [selectedValue, setSelectedValue] = useState("australia");
  const [modalVisible, setModalVisible] = useState(false);

  const countries = [
    { label: "Australia", value: "australia", flag: require('../images/flag.png') },
  ];

  const renderCountry = ({ item }) => (
    <TouchableOpacity
      style={styles.countryItem}
      onPress={() => {
        setSelectedValue(item.value);
        setModalVisible(false);
      }}
    >
      <Image source={item.flag} style={styles.flag} />
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.phoneInputContainer}>
      <Text style={styles.phoneNumberLabel}>PHONE NUMBER</Text>
      <View style={styles.phoneNumberInputContainer}>
        <TouchableOpacity
          style={styles.flagContainer}
          onPress={() => setModalVisible(true)}
        >
          <Image source={countries.find(c => c.value === selectedValue).flag} style={styles.flag} />
        </TouchableOpacity>

        <Text style={styles.prefix}>+61</Text>
        <TextInput 
          style={styles.textInput}
          placeholder="0489632578"
          placeholderTextColor="#868686"
          keyboardType="phone-pad"
        />
      </View>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <FlatList
            data={countries}
            renderItem={renderCountry}
            keyExtractor={(item) => item.value}
          />
        </View>
      </Modal>
    </View>
  );
};

const PrimaryButton = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('ConfirmPhoneNumber')}}>
      <Text style={styles.buttonText}>SIGN UP</Text>
    </TouchableOpacity>
  );
};

const TextContent = () => {
  return (
    <View style={styles.textContentContainer}>
      <Text style={styles.heading}>Get started with Foodly</Text>
      <Text style={styles.subheading}>Enter your phone number to use foodly and enjoy your food :)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  phoneInputContainer: {
    width: 335,
    height: 64,
    backgroundColor: '#fff',
    padding: 10,
  },
  phoneNumberLabel: {
    fontSize: 12,
    color: '#868686',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  phoneNumberInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  flag: {
    width: 40,
    height: 25,
    marginRight: 5,
  },
  prefix: {
    fontSize: 16,
    color: '#010f07',
    marginRight: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    color: '#868686',
  },
  button: {
    backgroundColor: '#F5A623',
    borderRadius: 4,
    width: 335,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: 24,
  },
  textContentContainer: {
    width: 299,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 20
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 32,
    letterSpacing: 0.14,
    color: '#010f07',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 24,
    letterSpacing: -0.4,
    color: '#868686',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 4,
    width: 200,
  }
});

export default LoginByPhoneNumber;
