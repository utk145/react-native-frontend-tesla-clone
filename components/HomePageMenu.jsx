import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, Pressable } from "react-native";
import { Entypo, MaterialCommunityIcons, MaterialIcons, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'; // https://icons.expo.fyi/
import { Link } from 'expo-router';

const HomePageMenu = ({ item }) => {
    return (
        <Link href={item.href} asChild>
            <Pressable style={styles.optionRow} >
                {item.icon && item.icon()}
                {/* Calling the icon function above because it is a cuustom component */}
                <MaterialCommunityIcons name={item.iconName} size={26} color='gray' />
                <Text style={styles.optionText} >{item.name}</Text>
                <MaterialIcons name="keyboard-arrow-right" size={26} color="gray" style={{ marginLeft: 'auto' }} />
            </Pressable>
        </Link>
    )
}




const styles = StyleSheet.create(
    {
        optionText: {
            color: "#eee",
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 10,
        },
        optionRow: {
            // display: "flex", it is by-default flex only
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
        },
    }
);






export default HomePageMenu