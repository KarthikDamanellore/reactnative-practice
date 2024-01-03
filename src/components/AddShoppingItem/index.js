import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const AddShoppingItem = ({ addProduct }) => {
    const [item, setItem] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Add An Item"
                value={item}
                onChangeText={(text) => setItem(text)}
            />
            <Button
                title="Add item"
                onPress={() => {
                    addProduct(item);
                    setItem();
                }}
                color="cornflowerblue"
            />
        </View>
    );
};

export default AddShoppingItem;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        marginVertical: 20,
        textAlign: "center",
    },
});
