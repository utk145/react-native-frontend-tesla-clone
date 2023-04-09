import React from 'react';
import { View, Text, StyleSheet, Image,Pressable } from 'react-native';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';




const SecurityScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.back}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Pressable>
      <Image
        source={{ uri: "https://tesla-cdn.thron.com/delivery/public/image/tesla/5003c1ba-99c9-4646-a598-eae3a706898c/bvlatuR/std/1586x800/safety-score" }}
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
    width: 310,
    height: 400,
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

export default SecurityScreen;
