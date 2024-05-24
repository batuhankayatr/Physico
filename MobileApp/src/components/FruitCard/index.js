import React, { memo, useEffect, useCallback } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchFruit } from "../../redux/features/fetchFruit";
import styles from "./styles.js";

const FruitsCard = () => {
  const fruitsData = useSelector((state) => state.fetchFruit.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFruit());
  }, [dispatch]);

  const renderItem = useCallback(({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={{flexDirection: 'column', paddingBottom: 10}}>
        <Text style={styles.itemNutrition}>Calories: {item.nutritions.calories}</Text>
        <Text style={styles.itemNutrition}>Fat: {item.nutritions.fat}</Text>
        <Text style={styles.itemNutrition}>Sugar: {item.nutritions.sugar}</Text>
        <Text style={styles.itemNutrition}>Carbohydrates: {item.nutritions.carbohydrates}</Text>
        <Text style={styles.itemNutrition}>Protein: {item.nutritions.protein}</Text>
      </View>
    </View>
  ), []);

  return (
    <View style={styles.container}>
      <FlatList
        data={fruitsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal={true}
      />
    </View>
  );
};

export default memo(FruitsCard);
