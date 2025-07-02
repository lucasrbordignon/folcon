import ClientsScreen from "@/app/screens/ClientsScreen";
import { MainTabs } from "@/components/layout/MainTabs";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, backgroundColor: "#f1f5f9" }}>
      <View className="flex-1 justify-between">      

        <View>   
          <View className="flex-row items-center py-4">                   
            <Ionicons name="person-circle-outline" size={48} color="#0d9488" /> 
            <View className="mt-2">
              <Text className="text-teal-900 text-lg font-semibold">Usuário</Text>
              <Text className="text-gray-600 text-sm">lucas.r.bordignon@gmail.com</Text>
            </View>
          </View>
          <DrawerItemList {...props} />
        </View>
        
        
        <View className="mb-4">
          <DrawerItem
            label="Sair"
            labelStyle={{ color: "#dc2626", fontWeight: "bold" }}
            icon={({ color, size }) => <Ionicons name="exit-outline" size={size} color="#dc2626" />}
            onPress={() => alert("Logout")}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="MainTabs"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#0d9488",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#334155",
        drawerLabelStyle: { fontSize: 16, fontWeight: "600" },
        drawerStyle: { backgroundColor: "#f1f5f9", width: 260 },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="MainTabs"
        component={MainTabs}
        options={{
          drawerLabel: "Início",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Clientes"
        component={ClientsScreen}
        options={{
          drawerLabel: "Clientes",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}