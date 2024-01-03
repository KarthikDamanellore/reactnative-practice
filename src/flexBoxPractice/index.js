import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const FlexBoxPractice = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.outerView}>
                <View style={styles.one}>
                    <Text>One</Text>
                </View>
                <View style={styles.two}>
                    <Text>Two</Text>
                </View>
                <View style={styles.three}>
                    <Text>Three</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default FlexBoxPractice;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    outerView: {
        width: 250,
        height: 250,
        top: 60,
        position: "absolute",
        backgroundColor: "pink",
        flexDirection: "column",
        flexWrap: "wrap",
        alignContent: "center",
        // alignItems: "center",
        // justifyContent: "center",
    },
    one: {
        width: 50,
        height: 150,
        backgroundColor: "red",
    },
    two: {
        width: 50,
        height: 150,
        backgroundColor: "yellow",
    },
    three: {
        width: 50,
        height: 150,
        backgroundColor: "green",
    },
});
