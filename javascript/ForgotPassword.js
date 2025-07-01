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

const ForgotPassword = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TextContent />
      <Form />
      <ResetButton navigation={navigation} />
    </SafeAreaView>
  );
};

const TextContent = () => {
  return (
    <View style={textContentStyles.container}>
      <Text style={textContentStyles.welcomeText}>Forgot password</Text>
      <Text style={textContentStyles.descriptionText}>
        Enter your email address and we will send you a reset instructions.
      </Text>
    </View>
  );
};

const Form = () => {
  return (
    <View style={formStyles.container}>
      <Text style={formStyles.label}>EMAIL ADDRESS</Text>
      <TextInput
        style={formStyles.input}
        placeholder="sajin tamang figma @.com"
      />
    </View>
  );
};

const ResetButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={buttonStyles.signInButton}
      onPress={() => {
        navigation.navigate('ResetEmail');
      }}>
      <Text style={buttonStyles.buttonText}>RESET PASSWORD</Text>
    </TouchableOpacity>
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
    width: screenWidth * 0.9,
    marginVertical: 20,
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

export default ForgotPassword;
