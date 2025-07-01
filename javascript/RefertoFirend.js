import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ReferToFriend = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/IconCreditcard.png')}
        style={styles.cardImage}
      />
      <Text style={styles.title}>Refer a Friend, Get $10</Text>
      <Text style={styles.message}>
        Get $10 in credits when someone sign up using your refer link
      </Text>
      <TouchableOpacity style={styles.linkContainer} onPress={()=>{navigation.navigate('Screen_BrowserFoods')}}>
        <Image
          source={require('../images/next.png')}
          style={styles.linkIcon}
        />
        <Text style={styles.linkText}>https://ui8.net/76738b</Text>
      </TouchableOpacity>
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
  cardImage: {
    marginTop:50,
    width: 125,
    height: 122,
    marginBottom: 30,
  },
  title: {
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
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    width: 245,
    height: 44,
  },
  linkIcon: {
    width: 16,
    height: 14,
    marginRight: 10,
  },
  linkText: {
    fontSize: 16,
    color: '#010f07',
  },
});

export default ReferToFriend;