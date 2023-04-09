import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';



const Updates = () => {

  const router = useRouter();
  return (
    <View style={styles.container}>

      <Pressable onPress={() => router.back()} style={styles.back}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Pressable>


      <Text style={styles.text}>Updates</Text>
      <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Qg_AgHpi7S5dT-5VRUfBf8M24z94-o6qYnXrI15kFQ&usqp=CAU&ec=48665699" }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: "#161818",
  },
  text: {
    fontSize: 24,
    color: "#eee",
    fontWeight: "bold",
    marginBottom: 16,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 8,
  },

  back: {
    position: 'absolute',
    top: 50,
    left: 25,
    backgroundColor: '#2f3030',
    padding: 10,
    borderRadius: 5,
  },
});

export default Updates;
