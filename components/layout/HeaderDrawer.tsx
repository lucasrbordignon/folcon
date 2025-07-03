import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Header from './Header';

export default function HeaderDrawer() {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <Header />
      <TouchableOpacity 
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        className="absolute left-2 pt-6" 
        style={{ position: "absolute", left: 10, zIndex: 20, }}
      >
        <Ionicons name="menu" size={32} color="#0d9488" />
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