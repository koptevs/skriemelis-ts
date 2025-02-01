//@ts-nocheck
import React from "react";
import { Page, Text, View, StyleSheet, Font, Image } from "@react-pdf/renderer";

import { sizes, borders, debug } from "../variables";

const { headerHeight, checkListWidth } = sizes;
const { borderNormal, borderThick } = borders;

Font.register({
    family: "Arial",
    src: "/fonts/ArialRegular.ttf",
});
Font.register({
    family: "ArialBold",
    src: "/fonts/ArialBold.ttf",
});

const commonLineStyles = {
    height: `${20 / 3}mm`,
    alignItems: "center",
    justifyContent: "center",
};

const styles = StyleSheet.create({
    wrapper: {
        width: checkListWidth,
        display: "flex",
        flexDirection: "row",
        height: headerHeight,
        // border: "0.1mm solid black",
        // borderBottom: borderThick,
        // paddingBottom: "1mm",
        backgroundColor: debug ? "#ff7e7e" : "transparent",
    },
    textBlockWrapper: {
        width: "115mm",
        display: "flex",
        flexDirection: "column",
        backgroundColor: debug ? "#777eee" : "transparent",
    },
    firstLine: {
        ...commonLineStyles,
        ...{
            borderBottom: borderNormal,
        },
    },
    secondLine: {
        height: `${20 / 3}mm`,
        alignItems: "center",
        justifyContent: "center",
        borderBottom: borderNormal,
    },
    thirdLine: {
        height: `${20 / 3}mm`,
        alignItems: "center",
        justifyContent: "center",
        borderBottom: borderNormal,
    },
    firstLineText: {
        fontFamily: "ArialBold",
        fontSize: "4mm",
    },
    secondLineText: {
        fontFamily: "Arial",
        fontSize: "4mm",
        // paddingBottom: "1mm",
    },
    thirdLineText: {
        fontFamily: "Arial",
        fontSize: "4mm",
        // paddingTop: "1mm",
        // paddingBottom: "0.5mm",
    },

    qrCode: {
        flexGrow: 1,
    },
    image: {
        width: "20mm",
        height: "20mm",
    },
});

const Header = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.textBlockWrapper}>
                <View style={styles.firstLine}>
                    <Text style={styles.firstLineText}>First Line</Text>
                </View>
                <View style={styles.secondLine}>
                    <Text style={styles.secondLineText}>Second Line</Text>
                </View>
                <View style={styles.thirdLine}>
                    <Text style={styles.thirdLineText}>Third Line</Text>
                </View>
            </View>
            <View style={styles.qrCode}>
                <Image style={styles.image} src="/assets/images/tuv.jpg" />
            </View>
        </View>
    );
};

export default Header;
