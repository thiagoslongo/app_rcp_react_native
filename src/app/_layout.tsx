import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="fv-tvsp" options={{ headerShown: false }} />
      <Stack.Screen name="aesp-assistolia" options={{ headerShown: false }} />
    </Stack>
  );
}
