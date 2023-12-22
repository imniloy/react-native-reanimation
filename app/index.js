import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Link } from "expo-router";

import cities from "../data/cities";

const Item = ({ item }) => {
  const { item: actualItem } = item;
  // console.log(actualItem);
  return (
    <Link href={`${actualItem.id}`} asChild>
      <Pressable style={styles.city}>
        <Image style={styles.image} source={{ uri: actualItem.image }} />
        <Text style={styles.name}>{actualItem.name}</Text>
      </Pressable>
    </Link>
  );
};

export default function Page() {
  const [data, setData] = useState(cities);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 50,
        }}
      >
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => <Item item={item} />}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  city: {
    flex: 1,
    aspectRatio: 1,
    marginHorizontal: 8,
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    elevation: 2,
    overflow: "hidden",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "70%",
    backgroundColor: "gainsboro",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },
});
