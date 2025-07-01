import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SocialButton = ({ icon, text, backgroundColor, navigation }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={()=>{navigation.navigate('Screen_RefertoFirends')}}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const AddSocialAccounts = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add social accounts</Text>
      <Text style={styles.message}>
        Add your social accounts for more security. You will go directly to their site.
      </Text>
      <SocialButton
        icon={require('../images/facebook.png')}
        text="CONNECT WITH FACEBOOK"
        backgroundColor="#3b5998"
        navigation={navigation}
      />
      <SocialButton
        icon={require('../images/google.png')}
        text="CONNECT WITH GOOGLE"
        backgroundColor="#4285f4"
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,

  },
  title: {
    marginTop:100,
    fontSize: 24,
    fontWeight: '600',
    color: '#010f07',
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    fontWeight: '400',
    color: '#868686',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  button: {
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    width: 335,
    height: 44,
    marginVertical: 10,
    paddingLeft:20
  },
  icon: {
    width: 28,
    height: 28,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
    textTransform: 'uppercase',
    marginLeft:50
  },
});

export default AddSocialAccounts;