import React from "react";
import {
    PDFViewer,
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Font,
} from "@react-pdf/renderer";
import PdfHeader from "./Partials/PdfHeader";
import PdfProtokolsNr from "./Partials/PdfProtokolsNr";
import Rekviziti from "./Partials/Rekviziti";
import RegistracijasNumurs from "./Partials/RegistracijasNumurs";
import ParbaudesVeids from "./Partials/ParbaudesVeids";
import Normativi from "./Partials/Normativi";
import ParbaudesRezultati from "./Partials/ParbaudesRezultati";
import ZinasParLifu from "./Partials/ZinasParLifu";
import LiftaTips from "./Partials/LiftaTips";
import Celtspeja from "./Partials/Celtspeja";
import Vertejumi from "./Partials/Vertejumi";
import Novertejums from "./Partials/Novertejums";
import NeatbilstibuApraksti from "./Partials/NeatbilstibuApraksti";

// Create styles
const styles = StyleSheet.create({
    page: {
        paddingTop: "10mm",
        paddingBottom: 65,
        paddingRight: "10mm",
        paddingLeft: "15mm",
    },
});

// Create Document Component
export default () => (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Document>
            <Page size="A4" style={styles.page}>
                <PdfHeader />
                <PdfProtokolsNr />
                <Rekviziti />
                <RegistracijasNumurs />
                <ParbaudesVeids />
                <Normativi />
                <ZinasParLifu />
                <LiftaTips />
                <Celtspeja />
                {/* <div style={{ height: "20px" }}></div> */}
                <ParbaudesRezultati />
                <Vertejumi />
                <Novertejums />
                <NeatbilstibuApraksti />
            </Page>
        </Document>
    </PDFViewer>
);
