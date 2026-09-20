import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#D0BCFF",
        headerShown: false,
        tabBarInactiveTintColor: "#FFF",
        tabBarStyle: {
          backgroundColor: "#2D2343",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "HOME",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="fv-tvsp"
        options={{
          title: "FV / TVSP",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="heart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="aesp-assistolia"
        options={{
          title: "AESP",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="bolt" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sobre"
        options={{
          title: "SOBRE",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="info" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
