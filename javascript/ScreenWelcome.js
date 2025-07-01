import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.circleBackground}
          source={require('../images/ScreenWelcome_Circle_Background.png')}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            columnGap: 20,
            alignItems: 'center',
          }}>
          <Image
            style={styles.logoImage}
            source={require('../images/logo.png')}
          />
          <Text style={styles.brandText}>Tamang FoodService</Text>
        </View>
      </View>

      <Image
        style={styles.illustration}
        source={require('../images/ScreenWelcome_Illustration.png')}
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>
          It’s a pleasure to meet you. We are excited that you’re here so let’s
          get started!
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {
            navigation.navigate('WalkThrough01');
          }}>
        <Text
          style={styles.buttonText}>
          GET STARTED
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  circleBackground: {
    width: 437,
    height: 437,
    position: 'absolute',
    top: -30,
    left: -30,
  },
  logoImage: {
    width: 65,
    height: 65,
  },
  brandText: {
    fontSize: 37,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 40,
    marginTop: 8,
  },
  illustration: {
    width: 213.49,
    height: 243.09,
  },
  textContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 8,
    color: '#3a3a3a',
  },
  button: {
    backgroundColor: '#FBB040',
    width: 335,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
});

export default WelcomeScreen;
