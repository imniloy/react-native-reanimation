import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Item = ({ item }) => {
  return (
    <View style={styles.itemView}>
      <Image source={{ uri: item.image }} style={styles.productImg} />

      <View style={styles.productDetails}>
        <Text>
          {item.title.length > 30 ? item.title.substring(0, 30) : item.title}
        </Text>
        <Text>
          {item.description.length > 30
            ? item.description.substring(0, 30)
            : item.description}
        </Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
};

export default function Page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setData(data);
    })();
  }, []);


  console.log(data);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View
          style={{
            marginHorizontal: 12,
          }}
        >
          <FlatList
            horizontal={true}
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, i }) => <Item item={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  itemView: {
    width: 175,
    backgroundColor: "#fff",
    marginLeft: 12,
    elevation: 5,
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },

  productImg: {
    height: 100,
    width: "100%",
  },
  productDetails: {
    // marginLeft: 12,
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
    color: "green",
    marginTop: 10,
  },
});
