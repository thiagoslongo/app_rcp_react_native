import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
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
            <MaterialCommunityIcons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="fv-tvsp"
        options={{
          title: "FV / TVSP",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={28} name="heart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="aesp-assistolia"
        options={{
          title: "AESP",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              name="lightning-bolt"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="relatorios"
        options={{
          title: "RELATÓRIOS",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              name="file-document"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="sobre"
        options={{
          title: "SOBRE",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              size={28}
              name="information-variant"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
