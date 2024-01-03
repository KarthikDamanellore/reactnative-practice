import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ShoppingList = ({ list, deleteProduct }) => {
    return (
        <FlatList
            data={list}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => {
                return <View style={styles.separator}></View>;
            }}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => deleteProduct(item)}>
                        <View style={styles.container}>
                            <Text style={styles.item}>{item.todo}</Text>
                            <MaterialIcons
                                name="delete"
                                size={20}
                                color="black"
                                style={styles.iconStyles}
                            />
                        </View>
                    </TouchableOpacity>
                );
            }}
            style={styles.flatListStyle}
        />
    );
};

export default ShoppingList;

const styles = StyleSheet.create({
    separator: {
        height: 0.5,
        backgroundColor: "gray",
    },
    item: {
        fontSize: 16,
        fontWeight: "bold",
        padding: 20,
    },
    flatListStyle: {
        paddingTop: 20,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    iconStyles: {
        marginRight: 20,
    },
});
