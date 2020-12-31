import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Slide, {SLIDE_HEIGHT} from "./Slide";

const {width, height} = Dimensions.get("window");

const Welcome = () => {
    return(
        <View style={styles.container}>
            <View style={styles.slider}>
                <ScrollView 
                    horizontal snapToInterval={width} 
                    decelerationRate="fast" 
                    showsHorizontalScrollIndicator={false} 
                    bounces={false}
                >
                    <Slide label="Inspire"/>
                    <Slide label="Releax" right/>
                    <Slide label="Boost"/>
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "#DCF2FF"}}/>
                <View style={{flex: 1, backgroundColor: "#ffffff", borderTopLeftRadius: 75}}>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slider: {
        height: SLIDE_HEIGHT,
        backgroundColor: "#DCF2FF",
        borderBottomRightRadius: 75,
    },
    footer: {
        flex: 1,
    },
})

export default Welcome;