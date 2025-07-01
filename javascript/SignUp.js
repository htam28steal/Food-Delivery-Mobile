import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TextContent />
      <Form />
      <SignUpButton navigation={navigation} />
      <Policy />
      <SocialButtons />
    </SafeAreaView>
  );
};

const TextContent = () => {
  return (
    <View style={textContentStyles.container}>
      <Text style={textContentStyles.welcomeText}>Create Account</Text>
      <Text style={textContentStyles.descriptionText}>
        Enter your Name, Email and Password for sign up.
        <TouchableOpacity>
          <Text style={textContentStyles.question}>Already have account?</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const Form = () => {
  return (
    <View style={formStyles.container}>
      <Text style={formStyles.label}>FULL NAME</Text>
      <TextInput style={formStyles.input} placeholder="Sajin Tamang" />
      <Text style={formStyles.label}>EMAIL ADDRESS</Text>
      <TextInput
        style={formStyles.input}
        placeholder="sajin tamang figma @.com"
        secureTextEntry
      />
      <Text style={formStyles.label}>PASSWORD</Text>
      <TextInput
        style={formStyles.input}
        placeholder="******"
        secureTextEntry
      />
    </View>
  );
};

const SignUpButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={buttonStyles.signInButton}
      onPress={() => {
        navigation.navigate('LoginByPhoneNumber');
      }}>
      <Text style={buttonStyles.buttonText}>SIGN UP</Text>
    </TouchableOpacity>
  );
};

const Policy = () => {
  return (
    <View style={policyStyles.container}>
      <Text style={policyStyles.text}>
        {'By Signing up you agree to our Terms\nConditions & Privacy Policy.'}
      </Text>
    </View>
  );
};

const SocialButtons = () => {
  return (
    <View style={socialButtonsStyles.container}>
      <Text style={socialButtonsStyles.orText}>Or</Text>
      <TouchableOpacity style={socialButtonsStyles.facebookButton}>
        <Image
          source={require('../images/facebook.png')}
          style={socialButtonsStyles.icon}
        />
        <Text style={socialButtonsStyles.buttonText}>
          CONNECT WITH FACEBOOK
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={socialButtonsStyles.googleButton}>
        <Image
          source={require('../images/google.png')}
          style={socialButtonsStyles.icon}
        />
        <Text style={socialButtonsStyles.buttonText}>CONNECT WITH GOOGLE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
});

const textContentStyles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    width: screenWidth * 0.9,
  },
  welcomeText: {
    fontSize: 33,
    fontWeight: '300',
    color: '#010F07',
    textAlign: 'left',
  },
  descriptionText: {
    fontSize: 16,
    color: '#868686',
    textAlign: 'left',
    marginTop: 10,
  },
  question: {
    fontSize: 16,
    color: '#EEA734',
    textAlign: 'left',
    marginTop: 10,
  },
});

const formStyles = StyleSheet.create({
  container: {
    width: screenWidth * 0.9,
    marginVertical: 20,
  },
  label: {
    fontSize: 12,
    color: '#868686',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginBottom: 20,
    fontSize: 16,
    color: '#010F07',
  },
});

const buttonStyles = StyleSheet.create({
  signInButton: {
    width: screenWidth * 0.9,
    backgroundColor: '#F5A623',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});

const policyStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  text: {
    fontSize: 12,
    color: '#010F07',
    opacity: 0.64,
    textAlign: 'center',
  },
});

const socialButtonsStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  orText: {
    fontSize: 16,
    color: '#010F07',
    opacity: 0.64,
    marginVertical: 10,
  },
  facebookButton: {
    flexDirection: 'row',
    width: screenWidth * 0.9,
    backgroundColor: '#3B5998',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    display: 'relative',
  },
  googleButton: {
    flexDirection: 'row',
    width: screenWidth * 0.9,
    backgroundColor: '#4285F4',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    display: 'relative',
  },
  icon: {
    width: 28,
    height: 28,
    display: 'absolute',
    left: -40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    width: 180,
  },
});

export default SignUp;
