import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
import { View, Text } from "react-native";
const Tab = createBottomTabNavigator();
import Dashboard from "../components/dashboard/dashboad";
// import HomeScreen from "../../Home";

import moreScreen from "./moreScreen";
function CentresScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Dasboard" //route default
      //   labeled={true} // show label+icon
      activeColor="#ff6600" //color of active tab
      style={{ backgroundColor: "red" }}
      shifting={false} // show all label
      barStyle={{
        backgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarLabel: "Dasboard",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Centres"
        component={CentresScreen}
        options={{
          tabBarLabel: "Centres",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="storefront-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={moreScreen}
        options={{
          headerShown: false,
          tabBarLabel: "More",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="dots-horizontal"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
