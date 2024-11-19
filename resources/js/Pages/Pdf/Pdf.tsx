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
                <div style={{ height: "20px" }}></div>
                <ParbaudesRezultati />
            </Page>
        </Document>
    </PDFViewer>
);
