import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FiltersScreen = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState('Burgers');
  const [selectedDiet, setSelectedDiet] = useState('Any');
  const [selectedPrice, setSelectedPrice] = useState('$$');

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <TouchableOpacity style={styles.clearAll} onPress={() => setSelectedCategory(null)}>
        <Text style={styles.clearText}>Clear all</Text>
      </TouchableOpacity>
      <View style={styles.optionsRow}>
        {['All', 'Brunch', 'Dinner', 'Burgers', 'Chinese', 'Pizza', 'Salads', 'Soups', 'Breakfast'].map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.optionButton, selectedCategory === category && styles.selectedButton]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[styles.optionText, selectedCategory === category && styles.selectedText]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Dietary</Text>
      <TouchableOpacity style={styles.clearAll} onPress={() => setSelectedDiet(null)}>
        <Text style={styles.clearText}>Clear all</Text>
      </TouchableOpacity>
      <View style={styles.optionsRow}>
        {['Any', 'Vegetarian', 'Vegan', 'Gluten-Free'].map((diet, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.optionButton, selectedDiet === diet && styles.selectedButton]}
            onPress={() => setSelectedDiet(diet)}
          >
            <Text style={[styles.optionText, selectedDiet === diet && styles.selectedText]}>
              {diet}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Price Range</Text>
      <TouchableOpacity style={styles.clearAll} onPress={() => setSelectedPrice(null)}>
        <Text style={styles.clearText}>Clear all</Text>
      </TouchableOpacity>
      <View style={styles.optionsRow}>
        {['$', '$$', '$$$', '$$$$', '$$$$$'].map((price, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.priceButton, selectedPrice === price && styles.selectedButton]}
            onPress={() => setSelectedPrice(price)}
          >
            <Text style={[styles.priceText, selectedPrice === price && styles.selectedText]}>
              {price}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.applyButton} onPress={()=>{navigation.navigate('Screen_SearchRes')}}>
        <Text style={styles.applyButtonText}>APPLY FILTERS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '300',
    marginTop: 20,
    marginBottom: 10,
  },
  clearAll: {
    position: 'absolute',
    right: 30,
    top: 40,
  },
  clearText: {
    fontSize: 12,
    color: '#010f07',
    opacity: 0.64,
    textTransform: 'uppercase',
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#efefef',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
  },
  selectedButton: {
    backgroundColor: '#f8b64c',
  },
  optionText: {
    fontSize: 12,
    color: '#010f07',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  selectedText: {
    color: '#ffffff',
  },
  priceButton: {
    backgroundColor: '#efefef',
    borderRadius: 40,
    padding: 15,
    margin: 5,
  },
  priceText: {
    fontSize: 16,
    color: '#010f07',
  },
  applyButton: {
    backgroundColor: '#f8b64c',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  applyButtonText: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.8,
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default FiltersScreen;