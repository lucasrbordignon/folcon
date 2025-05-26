import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Header from "./Header";

interface ScreenHeaderProps {
  onBackPress: () => void; // Função para o botão de voltar
  topInset: number; // Valor do insets.top passado como prop
}

export default function ScreenHeader({ onBackPress, topInset }: ScreenHeaderProps) {
  return (
    <View style={[styles.container]}>
      <Header />
      <TouchableOpacity 
        onPress={onBackPress}
        className="absolute left-2 z-10" 
        style={{ position: "absolute", left: 10, top: topInset + 14, zIndex: 20, }}
      >
        <Ionicons name="chevron-back" size={48} color="#0d9488" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: "white",
    paddingBottom: 10,
  },
});