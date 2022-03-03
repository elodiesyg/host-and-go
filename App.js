import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from "react";
<<<<<<< HEAD
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "./src/firebase-config";
import { NativeRouter, Route, Link } from "react-router-native";
import Login from '/src/view/login';


export default function App() {
  const [data, setData] = useState(null);
  const restaurantCollectionRef = collection(db, "restaurant");

  useEffect(async () => {
    const res = await getDocs(restaurantCollectionRef);
    console.log("res", res.map(doc => console.log("doc", doc)))
  }, []);

  return (
    <NativeRouter>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      
         <Route path="/login" component={Login} />
     
    </View>
     </NativeRouter>
=======
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
>>>>>>> master
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
