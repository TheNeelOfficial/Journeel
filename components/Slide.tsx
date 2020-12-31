import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.85 * height;

interface SlideProps {
    label: string;
    right?: boolean;
}

const Slide = ({ label, right } : SlideProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{label}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width,
    },
    titleContainer: {
        height: 100,
        justifyContent: "center",
        transform: [
            { translateY: (SLIDE_HEIGHT - 100) / 2 },
            { translateX:  -width / 2 + 50 },
            { rotate: "-270deg" },
        ],
    },
    title: {
        fontSize: 70,
        lineHeight: 70,
        // fontFamily: "SFProText-Bold",
        fontWeight: "900",
        color: "#ffffff",
        textAlign: "center",
    },
});

export default Slide;