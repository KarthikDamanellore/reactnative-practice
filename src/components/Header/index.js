import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Shopping List</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        backgroundColor: "blue",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
    },
});
