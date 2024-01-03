import React, { useState } from "react";
import Header from "../components/Header";
import {
    Alert,
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import ShoppingList from "../components/ShoppingList";
import AddShoppingItem from "../components/AddShoppingItem";

const ShoppingListPractice = () => {
    // states:
    const [showShoppingList, setShowShoppingList] = useState([
        {
            todo: "Buy a news papers",
            id: "1",
        },
        {
            todo: "Buy a Vegetables",
            id: "2",
        },
        {
            todo: "Buy Fruits",
            id: "3",
        },
        {
            todo: "Buy Rice",
            id: "4",
        },
    ]);

    // delete an product
    const deleteProduct = (item) => {
        setShowShoppingList((prevData) => {
            return prevData.filter((listId) => listId.id !== item.id);
        });
    };

    //  add an product

    const addProduct = (item) => {
        if (item?.length === 0) {
            Alert.alert("Alert", "Please Enter an item");
            return;
        }
        setShowShoppingList([
            ...showShoppingList,
            { todo: item, id: Math.random().toString() },
        ]);
    };

    const dismissKeyBoard = () => {
        return Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyBoard}>
            <View style={styles.Container}>
                <Header />
                <AddShoppingItem addProduct={addProduct} />
                <ShoppingList
                    list={showShoppingList}
                    deleteProduct={deleteProduct}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ShoppingListPractice;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 50,
    },
});
