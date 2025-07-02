import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Header from "./Header";

interface ScreenHeaderProps {
  topInset: number; // Valor do insets.top passado como prop
}

export default function HeaderDrawer({ topInset }: ScreenHeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <Header />
      <TouchableOpacity 
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        className="absolute left-2 z-10" 
        style={{ position: "absolute", left: 10, top: topInset + 14, zIndex: 20, }}
      >
        <Ionicons name="menu" size={48} color="#0d9488" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingBottom: 4,
  },
});