import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const ProductHeader = () => {
  return (
    <View style={headerStyles.container}>
      <Image
        source={require('../images/Header-image.png')}
        style={headerStyles.productImage}
      />
    </View>
  );
};

const ProductDescription = () => {
  return (
    <View style={descriptionStyles.container}>
      <Text style={descriptionStyles.productName}>Cookie Sandwich</Text>
      <Text style={descriptionStyles.productDetails}>
        Shortbread, chocolate turtle cookies, and red velvet. 8 ounces cream
        cheese, softened.
      </Text>
      <View style={descriptionStyles.categoryContainer}>
        <Text style={descriptionStyles.category}>$$</Text>
        <Text style={descriptionStyles.dot}>•</Text>
        <Text style={descriptionStyles.category}>Chinese</Text>
        <Text style={descriptionStyles.dot}>•</Text>
        <Text style={descriptionStyles.category}>American</Text>
        <Text style={descriptionStyles.dot}>•</Text>
        <Text style={descriptionStyles.category}>Deshi food</Text>
      </View>
    </View>
  );
};

const CookieTopChoiceList = () => {
  const [selectedCookie, setSelectedCookie] = useState(null);
  const cookies = [
    'Chocolate Chip',
    'Cookies and Cream',
    'Funfetti',
    'M and M',
    'Red Velvet',
    'Peanut Butter',
    'Snickerdoodle',
    'White Chocolate Macadamia',
  ];

  const handleSelection = (cookie) => {
    setSelectedCookie(cookie);
  };

  return (
    <View style={choiceStyles.container}>
      <View style={choiceStyles.header}>
        <Text style={choiceStyles.title}>Choice of top Cookie</Text>
        <Text style={choiceStyles.required}>REQUIRED</Text>
      </View>
      {cookies.map((cookie, index) => (
        <TouchableOpacity
          key={index}
          style={choiceStyles.cookieOption}
          onPress={() => handleSelection(cookie)}>
          {selectedCookie === cookie ? (
            <Image
              style={choiceStyles.radioIcon}
              source={require('../images/OvalSelectedIcon.png')}
            />
          ) : (
            <Image
              style={choiceStyles.radioIcon}
              source={require('../images/OvalIcon.png')}
            />
          )}
          <Text style={choiceStyles.cookieText}>{cookie}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};


const CookieBottomChoiceList = () => {
  const [selectedCookie, setSelectedCookie] = useState(null);
  const cookies = [
    'Chocolate Chip',
    'Sugar Chip',
  ];

  const handleSelection = (cookie) => {
    setSelectedCookie(cookie);
  };

  return (
    <View style={choiceStyles.container}>
      <View style={choiceStyles.header}>
        <Text style={choiceStyles.title}>Choice of top Cookie</Text>
        <Text style={choiceStyles.required}>REQUIRED</Text>
      </View>
      {cookies.map((cookie, index) => (
        <TouchableOpacity
          key={index}
          style={choiceStyles.cookieOption}
          onPress={() => handleSelection(cookie)}>
          {selectedCookie === cookie ? (
            <Image
              style={choiceStyles.radioIcon}
              source={require('../images/OvalSelectedIcon.png')}
            />
          ) : (
            <Image
              style={choiceStyles.radioIcon}
              source={require('../images/OvalIcon.png')}
            />
          )}
          <Text style={choiceStyles.cookieText}>{cookie}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const SpecialInstructions = () => {
  return (
    <TouchableOpacity style={instructionsStyles.container}>
      <Text style={instructionsStyles.text}>Add Special Instructions</Text>
      <Image
        style={instructionsStyles.icon}
        source={require('../images/forwardIcon.png')}
      />
    </TouchableOpacity>
  );
};

const OrderQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <View style={quantityStyles.container}>
      <TouchableOpacity
        style={quantityStyles.button}
        onPress={decreaseQuantity}>
        <Image
          style={quantityStyles.icon}
          source={require('../images/Minus.png')}
        />
      </TouchableOpacity>

      <Text style={quantityStyles.quantityText}>
        {quantity < 10 ? `0${quantity}` : quantity}
      </Text>

      <TouchableOpacity
        style={quantityStyles.button}
        onPress={increaseQuantity}>
        <Image
          style={quantityStyles.icon}
          source={require('../images/Plus.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const AddToOrderButton = ({navigation}) => {
  return (
    <TouchableOpacity style={orderStyles.button} onPress={()=>{navigation.navigate('YourOrder')}}>
      <Text style={orderStyles.text}>ADD TO ORDER ($11.98)</Text>
    </TouchableOpacity>
  );
};

const ProductScreen = ({navigation}) => {
  return (
    <ScrollView style={screenStyles.container}>
      <ProductHeader />
      <ProductDescription />
      <CookieTopChoiceList />
      <CookieBottomChoiceList />
      <SpecialInstructions />
      <OrderQuantity />
      <AddToOrderButton navigation={navigation} />
    </ScrollView>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 280,
  },
  productImage: {
    width: '100%',
    height: 280,
    resizeMode: 'cover',
  },
});

const descriptionStyles = StyleSheet.create({
  container: {
    padding: 20,
    width: 328,
  },
  productName: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 0.14,
    color: '#010f07',
    marginBottom: 10,
  },
  productDetails: {
    fontFamily: 'Yu Gothic UI',
    fontWeight: '400',
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    color: '#010f07',
    opacity: 0.64,
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    fontFamily: 'Yu Gothic UI',
    fontWeight: '400',
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    color: '#868686',
  },
  dot: {
    color: '#868686',
    marginHorizontal: 5,
    fontSize: 16,
  },
});

const choiceStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '300',
    color: '#010f07',
  },
  required: {
    backgroundColor: '#FFF8E1',
    color: '#F8B64C',
    fontSize: 12,
    fontWeight: '300',
    borderRadius: 10,
    textTransform: 'uppercase',
    width: 100,
    height: 35,
    lineHeight: 35,
    textAlign: 'center',
    verticalAlign: 'center',
  },
  cookieOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
  },
  radioIcon: {
    width: 18,
    height: 18,
    marginRight: 15,
  },
  cookieText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#010f07',
    opacity: 0.84,
  },
});

const instructionsStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 37,
    backgroundColor: 'rgba(255, 255, 255, 0.74)',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
    color: '#010f07',
    letterSpacing: -0.4,
    lineHeight: 24,
    fontFamily: 'Yu Gothic UI',
    fontWeight: '400',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

const quantityStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 35,
    width: '100%',
    height: 54,
    backgroundColor: '#fff',
  },
  button: {
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 54,
    height: 54,
  },
  quantityText: {
    fontFamily: 'Yu Gothic UI',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 26.6,
    textAlign: 'center',
    color: '#010f07',
    width: 28,
    height: 27,
  },
});

const orderStyles = StyleSheet.create({
  button: {
    width: 335,
    height: 48,
    backgroundColor: '#F5A623',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    alignSelf: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Yu Gothic UI',
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 0.8,
    textAlign: 'center',
    lineHeight: 24,
  },
});

const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ProductScreen;
