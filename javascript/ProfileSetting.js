import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileField = ({ label, value, isPassword, navigation }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.fieldContent}>
        <Text style={styles.fieldValue}>{value}</Text>
        {isPassword && ( 
          <Text
            style={styles.changeText}
            onPress={()=>{navigation.navigate('Screen_ChangePassword')}}>
            Change
          </Text>
        )}
      </View>
    </View>
  );
};

const ChangeSettingsButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>CHANGE SETTINGS</Text>
    </TouchableOpacity>
  );
};

const ProfileSettings = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
      <Text style={styles.title}>Profile Settings</Text>
      <ProfileField label="Full Name" value="Sajin Tamang" />
      <ProfileField label="Email Address" value="Sajin Tamang @ Figma .com" />
      <ProfileField label="Phone Number" value="+61 04133398285" />
      <ProfileField
        label="Password"
        value="****************                                     "
        isPassword
        navigation={navigation}
      />
      <ChangeSettingsButton />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#010f07',
    alignSelf: 'center',
    marginBottom: 20,
    textAlign: 'center',
  },
  fieldContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#868686',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  fieldContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fieldValue: {
    fontSize: 16,
    color: '#010f07',
  },
  changeText: {
    fontSize: 14,
    color: '#f8b64c',
  },
  button: {
    backgroundColor: '#f8b64c',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 300,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default ProfileSettings;
