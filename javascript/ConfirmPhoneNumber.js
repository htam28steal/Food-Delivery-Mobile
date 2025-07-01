import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const TextHeader = ({ mainText, subText }) => (
  <View style={headerStyles.container}>
    <Text style={headerStyles.mainText}>{mainText}</Text>
    <Text style={headerStyles.subText}>{subText}</Text>
  </View>
);

const headerStyles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#010f07ff',
    lineHeight: 32,
  },
  subText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#010f07ff',
    lineHeight: 24,
    opacity: 0.74,
    marginTop: 10,
    textAlign: 'center',
  },
});

const CodeInput = () => (
  <View style={codeInputStyles.container}>
    <TextInput style={codeInputStyles.inputFilled} value="4" editable={false} />
    <TextInput style={codeInputStyles.input} editable={false} />
    <TextInput style={codeInputStyles.input} editable={false} />
    <TextInput style={codeInputStyles.input} editable={false} />
  </View>
);

const codeInputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    columnGap: 10,
  },
  input: {
    width: 50,
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#868686',
    textAlign: 'center',
    fontSize: 24,
  },
  inputFilled: {
    width: 50,
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#868686',
    textAlign: 'center',
    fontSize: 24,
    color: '#010f07ff',
  },
});

const ContinueButton = ({ navigation }) => (
  <TouchableOpacity
    style={buttonStyles.container}
    onPress={() => {
      navigation.navigate('EnterAddress');
    }}>
    <Text style={buttonStyles.text}>CONTINUE</Text>
  </TouchableOpacity>
);

const buttonStyles = StyleSheet.create({
  container: {
    backgroundColor: '#eea734ff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 335,
    height: 48,
    marginVertical: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: 0.8,
  },
});

const ResendLink = () => (
  <View style={resendStyles.container}>
    <Text style={resendStyles.text}>Didn’t receive code?</Text>
    <TouchableOpacity>
      <Text style={resendStyles.link}> Resend Again.</Text>
    </TouchableOpacity>
  </View>
);

const resendStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 12,
    color: '#010f07ff',
    opacity: 0.64,
  },
  link: {
    fontSize: 12,
    color: '#eea734ff',
  },
});

const TermsText = () => (
  <Text style={termsStyles.text}>
    By Signing up you agree to our Terms Conditions & Privacy Policy.
  </Text>
);

const termsStyles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: '#868686ff',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
});

const VerifyPhoneNumber = ({ navigation }) => (
  <ScrollView contentContainerStyle={mainStyles.container}>
    <TextHeader
      mainText="Verify phone number"
      subText="Enter the 4-Digit code sent to you at +610489632578"
    />
    <CodeInput />
    <ContinueButton navigation={navigation} />
    <ResendLink />
    <TermsText />
  </ScrollView>
);

const mainStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
});

export default VerifyPhoneNumber;
