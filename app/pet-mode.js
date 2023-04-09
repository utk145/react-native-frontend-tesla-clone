import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';



const LocationScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <Pressable onPress={() => router.back()} style={styles.back}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Pressable>

      <Image
        source={{ uri: "https://techcrunch.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-13-at-8.38.44-PM.png" }}
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
    width: 400,
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

export default LocationScreen;
