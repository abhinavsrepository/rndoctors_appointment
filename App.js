import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Login from "./App/Screens/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import SignInWithOAuth from "./Components/SignInWithOAuth";
import {NavigationContainer} from '@react-navigation/native'
import Home from './App/Screens/Home'
import { useFonts } from 'expo-font';

import TabNavigation from "./App/Navigations/TabNavigation";
export default function App() {
  const [fontsLoaded] = useFonts({
    'appfont': require('./assets/fonts/Outfit-Regular.ttf'),
    'appfont-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'appfont-semi': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });
  if(!fontsLoaded)
  {
    return null;
  }
  return (
    <ClerkProvider
      publishableKey={
        "pk_test_ZW5nYWdpbmctdW5pY29ybi0yLmNsZXJrLmFjY291bnRzLmRldiQ"
      }
    >
      <SafeAreaView style={styles.container}>
        <StatusBar hidden/>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
            </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login/>
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   
  },
});
