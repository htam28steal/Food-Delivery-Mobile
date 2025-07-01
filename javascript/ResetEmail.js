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

const ResetEmail = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TextContent />
      <SendButton navigation={navigation} />
      <Img />
    </SafeAreaView>
  );
};

const TextContent = () => {
  return (
    <View style={textContentStyles.container}>
      <Text style={textContentStyles.welcomeText}>Reset email sent</Text>
      <Text style={textContentStyles.descriptionText}>
        We have sent a instructions email to sajin tamang@figma.com.
        <TouchableOpacity>
          <Text style={textContentStyles.problem}>Having problem?</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const SendButton = ({navigation}) => {
  return (
    <TouchableOpacity style={buttonStyles.signInButton} onPress={()=>{navigation.navigate('SignUp')}}>
      <Text style={buttonStyles.buttonText}>SEND AGAIN</Text>
    </TouchableOpacity>
  );
};

const Img = () => {
  return (
    <View style={imgStyles.imgContainer}>
      <Image
        source={require('../images/ResetEmailOpenDoodles.png')}
        style={imgStyles.img}
      />
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
    lineHeight: 22,
  },
  problem: {
    fontSize: 16,
    color: '#EEA734',
    textAlign: 'left',
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

const imgStyles = StyleSheet.create({
  imgContainer: {justifyContent: 'center', alignItems: 'center', flex: 1},
  img: {
    height: 237,
    width: 307,
  },
});

export default ResetEmail;
