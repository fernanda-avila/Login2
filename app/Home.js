import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";


export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    await signOut(auth);
    navigation.replace("Login");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bem-vindo, {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleLogout} style={{ marginTop: 20, padding: 10, backgroundColor: "#cc0000" }}>
        <Text style={{ color: "#fff" }}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
