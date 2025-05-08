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
          {character.name ?? "Nome não disponível"}
        </Text>

        {/* Nomes alternativos */}
        <Text style={styles.subtitle}>
          {character.alternate_names[1] ?? "Nome alternativo não disponível"}
        </Text>

        {/* Casa */}
        <Text style={styles.text}>
          🏠 Casa: {character.house ?? "Casa não disponível"}
        </Text>

        {/* Data de nascimento */}
        <Text style={styles.text}>
          📅 Data de Nascimento: {character.dateOfBirth ?? "Não disponível"}
        </Text>

        {/* É mago */}
        <Text style={styles.text}>
          🧙‍♂️ Mago: {character.wizard ? "Sim" : "Não"}
        </Text>

        {/* Ancestralidade */}
        <Text style={styles.text}></Text>
        {/* Cor dos olhos e cabelo */}
        <Text style={styles.text}>
          👁️ Cor dos olhos: {character.eyeColour ?? "Não informado"}
        </Text>
        <Text style={styles.text}>
          💇 Cor do cabelo: {character.hairColour ?? "Não informado"}
        </Text>

        <Text style={styles.text}></Text>

        {/* Patrono */}
        <Text style={styles.text}>
          🦌 Patrono: {character.patronus ?? "Não informado"}
        </Text>

        {/* Ator */}
        <Text style={styles.text}>
          🎭 Ator: {character.actor ?? "Não informado"}
        </Text>

        
            {/* Estudante ou funcionário de Hogwarts */}
            <Text style={styles.text}>
              🎓 Estudante de Hogwarts: {character.hogwartsStudent ? "Sim" : "Não"}
            </Text>
            <Text style={styles.text}>
              🧑‍🏫 Funcionário de Hogwarts: {character.hogwartsStaff ? "Sim" : "Não"}
            </Text>

        <View style={styles.subtitleContainer}>
          {/* Espécie */}
          <Text style={styles.subtitleSpecies}>
            {character.species?.toUpperCase() ?? "Espécie não disponível"}
          </Text>
          <Text style={styles.and}>e</Text>
          <Text style={styles.subtitleGender}>
            {/* Gênero */}
            {character.gender?.toUpperCase() ?? "Gênero não disponível"}
          </Text>{" "}
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
