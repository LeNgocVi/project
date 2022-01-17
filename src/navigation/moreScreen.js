import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import More from "../components/more/more";
import MoreDetail from "../components/more/moreDetail";
const moreScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="More"
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "700",
          fontSize: 16,
        },
      }}
    >
      <Stack.Screen name="More" component={More} />
      <Stack.Screen
        options={{ title: "More" }}
        name="MoreDetail"
        component={MoreDetail}
      />
    </Stack.Navigator>
  );
};

export default moreScreen;

const styles = StyleSheet.create({});
