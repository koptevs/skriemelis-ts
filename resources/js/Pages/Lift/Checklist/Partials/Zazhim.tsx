import { View, StyleSheet } from "@react-pdf/renderer";
import { sizes, debug } from "../variables";

const { zazhimHeight, checkListWidth } = sizes;

const styles = StyleSheet.create({
    zazhim: {
        width: checkListWidth,
        height: zazhimHeight,
        backgroundColor: debug ? "#aabbff" : "transparent",
    },
});

const Zazhim = () => {
    return <View style={styles.zazhim}></View>;
};

export default Zazhim;
