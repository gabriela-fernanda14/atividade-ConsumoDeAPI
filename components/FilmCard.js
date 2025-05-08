import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

// Pegamos a largura da tela para ajustar a altura da imagem proporcionalmente
const screenWidth = Dimensions.get("window").width;

// O componente recebe um personagem (character) como propriedade
export default function FilmCard({ character }) {
  return (
    <View style={styles.card}>
      {/* Imagem do personagem */}
      <Image source={{ uri: character.image }} style={styles.image} />

      {/* Bloco com as informações do personagem */}
      <View style={styles.info}>
        {/* Nome principal */}
        <Text style={styles.title}>
          {character.name ?? "Name not available"}
        </Text>

        {/* Nomes alternativos */}
        <Text style={styles.subtitle}>
          {character.alternate_names[1] ?? "Alternate name not available"}
        </Text>

        {/* Casa */}
        <Text style={styles.text}>
          🏠 House: {character.house ?? "House not available"}
        </Text>

        {/* Data de nascimento */}
        <Text style={styles.text}>
          📅 Date of Birth: {character.dateOfBirth ?? "Not available"}
        </Text>

        {/* É mago */}
        <Text style={styles.text}>
          🧙‍♂️ Wizard: {character.wizard ? "Yes" : "No"}
        </Text>

        {/* Ancestralidade */}
        <Text style={styles.text}></Text>
        {/* Cor dos olhos e cabelo */}
        <Text style={styles.text}>
          👁️ Eye color: {character.eyeColour ?? "Not informed"}
        </Text>
        <Text style={styles.text}>
          💇 Hair color: {character.hairColour ?? "Not informed"}
        </Text>

        <Text style={styles.text}></Text>

        {/* Patrono */}
        <Text style={styles.text}>
          🦌 Patronus: {character.patronus ?? "Not informed"}
        </Text>

        {/* Ator */}
        <Text style={styles.text}>
          🎭 Actor: {character.actor ?? "Not informed"}
        </Text>

        <View style={styles.subtitleContainer}>
          {/* Espécie */}
          <Text style={styles.subtitleSpecies}>
            {character.species?.toUpperCase() ?? "Species not available"}
          </Text>

          <Text style={styles.and}>and</Text>

          <Text style={styles.subtitleGender}>
            {/* Gênero */}
            {character.gender?.toUpperCase() ?? "Gender not available"}

            {/* Estudante ou funcionário de Hogwarts */}
            <Text style={styles.text}>
              🎓 Hogwarts Student: {character.hogwartsStudent ? "Yes" : "No"}
            </Text>
            <Text style={styles.text}>
              🧑‍🏫 Hogwarts Staff: {character.hogwartsStaff ? "Yes" : "No"}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

// Estilo visual do card e seus elementos
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#222", // Fundo escuro do card
    borderRadius: 16, // Cantos arredondados
    overflow: "hidden", // Garante que a imagem respeite o card
    marginBottom: 20, // Espaço entre os cards

    // Sombra para profundidade
    shadowColor: "#3C7B9D",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4, // Android
  },
  image: {
    width: "100%",
    height: screenWidth * 0.6, // Altura proporcional à largura da tela
    resizeMode: "cover", // Redimensiona para cobrir a área
  },
  info: {
    padding: 16,
    gap: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 16,
    color: "#bbb",
    fontStyle: "italic",
  },
  subtitleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  subtitleSpecies: {
    color: "#fff",
  },
  subtitleGender: {
    color: "#fff",
  },
  and: {
    color: "#fff",
  },
  text: {
    fontSize: 14,
    color: "#e0e0e0",
    textAlign: "justify",
  },
  subtitleSmall: {
    fontSize: 14,
    color: "#bbbbbb",
    fontStyle: "italic",
  },
});
