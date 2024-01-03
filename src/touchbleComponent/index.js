import { useState } from "react";
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";
const TocuchbaleComponent = () => {
    const [months, setMonths] = useState([
        { month: "jan", id: 1 },
        { month: "jan", id: 2 },
        { month: "jan", id: 3 },
        { month: "jan", id: 4 },
        { month: "jan", id: 5 },
        { month: "jan", id: 6 },
        { month: "jan", id: 7 },
        { month: "jan", id: 8 },
        { month: "jan", id: 9 },
        { month: "jan", id: 10 },
        { month: "jan", id: 11 },
        { month: "jan", id: 12 },
        { month: "jan", id: 13 },
        { month: "jan", id: 14 },
        { month: "jan", id: 15 },
    ]);

    const handlePress = (item) => {
        console.log("handlepress");
        setMonths((prevMonth) => {
            prevMonth.filter((name) => {
                return name.id !== item.id;
            });
        });
    };
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headingStyles}>Touchable Component</Text>
            <FlatList
                data={months}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableHighlight
                        onPress={() => handlePress(item)}
                        underlayColor="transparent">
                        <Text style={styles.monthTextStyles}>{item.month}</Text>
                    </TouchableHighlight>
                )}
            />
        </SafeAreaView>
    );
};

export default TocuchbaleComponent;

// styles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
    },
    headingStyles: {
        flex: 1,
        color: "green",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    monthTextStyles: {
        backgroundColor: "yellow",
        padding: 20,
        marginBottom: 10,
        width: 100,
        margin: 10,
        height: "auto",
    },
});
