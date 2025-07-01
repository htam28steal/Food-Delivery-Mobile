import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const WalkThrough01 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderText />
      <Illustrations />
      <DescriptionText />
      <Indicator activeIndex={1} total={3} />
      <CTAButton navigation={navigation}/>
    </SafeAreaView>
  );
};

const HeaderText = () => {
  return (
    <View style={headerTextStyles.container}>
      <Image
        source={require('../images/logo.png')}
        style={headerTextStyles.image}
      />
      <Text style={headerTextStyles.text}>{'Tamang\nFoodService'}</Text>
    </View>
  );
};

const Illustrations = () => {
  return (
    <View style={illustrationStyles.container}>
      <Image
        source={require('../images/ScreenWalkThrough01_Illustrations.png')}
        style={illustrationStyles.image}
      />
    </View>
  );
};

const DescriptionText = () => {
  return (
    <View style={descriptionTextStyles.container}>
      <Text style={descriptionTextStyles.header}>All your favorites</Text>
      <Text style={descriptionTextStyles.description}>
        Order from the best local restaurants with easy, on-demand delivery.
      </Text>
    </View>
  );
};

const Indicator = ({ activeIndex = 0, total = 3 }) => {
  return (
    <View style={indicatorStyles.container}>
      {[...Array(total)].map((_, index) => (
        <View
          key={index}
          style={
            index === activeIndex
              ? indicatorStyles.activeDot
              : indicatorStyles.inactiveDot
          }
        />
      ))}
    </View>
  );
};

const CTAButton = ({navigation}) => {
  return (
    <TouchableOpacity style={ctaButtonStyles.button} onPress={()=>{navigation.navigate('WalkThrough02')}}>
      <Text style={ctaButtonStyles.buttonText}>GET STARTED</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
});

const headerTextStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    columnGap: 20,
  },
  image: {
    width: 65,
    height: 65,
    marginBottom: 10,
  },
  text: {
    fontSize: 37,
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: '#000000',
    lineHeight: 40,
    textAlign: 'center',
  },
});

const illustrationStyles = StyleSheet.create({
  container: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

const descriptionTextStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    marginBottom: 20,
  },
  header: {
    fontSize: 30,
    fontFamily: 'Font Awesome 5 Brands',
    fontWeight: '400',
    textAlign: 'center',
    color: '#010f07',
    lineHeight: 38,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Yu Gothic UI',
    fontWeight: '400',
    color: '#868686',
    textAlign: 'center',
    lineHeight: 24,
  },
});

const indicatorStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  activeDot: {
    width: 10,
    height: 5,
    backgroundColor: 'green',
    marginHorizontal: 4,
    borderRadius: 2.5,
  },
  inactiveDot: {
    width: 10,
    height: 5,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 4,
    borderRadius: 2.5,
  },
});

const ctaButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: '#F5A623',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth * 0.9,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.8,
    textAlign: 'center',
  },
});

export default WalkThrough01;
