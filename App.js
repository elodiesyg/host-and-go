import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import db from "./src/firebase-config";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(
    () =>
      onSnapshot(collection(db, "restaurant"), (snapshot) =>
        setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  console.log(data)

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
