import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import DefaultText from './DefaultText';

const MealItem = ({
  onSelectMeal,
  title,
  duration,
  complexity,
  affordability,
  image
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: image }} style={styles.bgImage}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <DefaultText>{duration}m</DefaultText>
            <DefaultText>{complexity.toUpperCase()}</DefaultText>
            <DefaultText>{affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center'
  }
});

export default MealItem;
