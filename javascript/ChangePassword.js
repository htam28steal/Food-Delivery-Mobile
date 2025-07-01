import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

const PasswordField = ({ label }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.fieldContent}>
        <TextInput
          secureTextEntry
          style={styles.fieldInput}
          placeholder="******"
          placeholderTextColor="#010f07"
        />
        <Image
          source={require('../images/hide.png')}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const ChangePasswordButton = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Screen_PaymentMethod')}}>
      <Text style={styles.buttonText}>CHANGE PASSWORD</Text>
    </TouchableOpacity>
  );
};

const ChangePassword = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
      <Text style={styles.title}>Profile Settings</Text>
      <PasswordField label="Password" />
      <PasswordField label="New Password" />
      <PasswordField label="Confirm Password" />
      <ChangePasswordButton navigation={navigation} />
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
  fieldInput: {
    fontSize: 16,
    color: 'black',
    fontWeight:500,
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#868686',
  },
  button: {
    backgroundColor: '#f8b64c',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop:350
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default ChangePassword;