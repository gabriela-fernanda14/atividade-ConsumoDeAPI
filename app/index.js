import { useEffect, useState } from "react";
import { View, FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import axios from "axios";
import FilmCard from "../components/FilmCard";
import SkeletonCard from "../components/SkeletonCard";

export default function Home() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios.get("https://hp-api.onrender.com/api/characters")
        .then((res) => setFilms(res.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }, 2000); // 2 segundos pra mostrar o Skeleton
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>API Harry Potter</Text>
      {loading ? (
        <FlatList
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(item) => item.toString()}
          renderItem={() => <SkeletonCard />}
          contentContainerStyle={styles.list}
        />
      ) : (
        <FlatList
          data={films}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FilmCard character={item} />}
          contentContainerStyle={styles.list}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginVertical: 16,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});