import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "./src/firebase-config";


export default function App() {
  const [data, setData] = useState(null);
  const restaurantCollectionRef = collection(db, "restaurant");

  useEffect(async () => {
    const res = await getDocs(restaurantCollectionRef);
    console.log("res", res.map(doc => console.log("doc", doc)))
  }, []);

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
