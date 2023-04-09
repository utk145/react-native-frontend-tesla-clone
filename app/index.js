import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import { Entypo, MaterialCommunityIcons, MaterialIcons, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'; // https://icons.expo.fyi/
import Car from '../assets/images/car.png';
import menuOptions from "../assets/menuOptions";
import HomePageMenu from "../components/HomePageMenu";
import Controls from "../components/Controls";






export default function Page() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>My Model S</Text>
                    <Text style={styles.subtitle}>Parked</Text>
                </View>
                <FontAwesome name="user-circle" size={30} color="gray" />
            </View>
            <Image source={Car} style={styles.image} resizeMode='contain' />
            <Controls />
            {/* You can also write that <View> here as well but to leverage the component functionality it is used that way */}

            {/* <View style={styles.optionRow}>

                <MaterialCommunityIcons name="car" size={26} color='gray' />
                <Text style={styles.optionText}>Controls</Text>

                <MaterialIcons name="keyboard-arrow-right" size={26} color="gray" style={{ marginLeft: 'auto' }}
                />
            </View> */}

            <FlatList

                data={menuOptions}

                // renderItem={({item}) => (
                //     <View style={styles.optionRow}>
                //         {item.icon && item.icon()} 
                //         {/* Calling the icon function above */}
                //         <MaterialCommunityIcons name={item.iconName} size={26} color='gray' />
                //         <Text style={styles.optionText}>{item.name}</Text>
                //         <MaterialIcons name="keyboard-arrow-right" size={26} color="gray" style={{ marginLeft: 'auto' }} />
                //     </View>
                // )}
                
                renderItem={HomePageMenu}
                showsVerticalScrollIndicator={false}

            />


        </View>


    )
}





 const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 24,
            backgroundColor: "#161818",
        },
        header: {
            marginTop: 50,
            flexDirection: "row",
            justifyContent: "space-between",
        },
        title: {
            fontSize: 24,
            color: "#eee",
            fontWeight: "bold",
            marginBottom: 8
        },
        subtitle: {
            color: 'gray',
            fontWeight: '500',
        },
        image: {
            width: '100%',
            height: 300,
        },
        controls: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 20,
        },
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



