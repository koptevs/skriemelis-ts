import React from "react";
import type { LiftWithInspections } from "@/types";
import {
    PDFViewer,
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Font,
} from "@react-pdf/renderer";
import Zazhim from "./Partials/Zazhim";
import Header from "./Partials/Header";

import { sizes, borders, debug } from "./variables";

const { zazhimHeight, checkListPaddingX } = sizes;
const { borderNormal, borderThick } = borders;

// Create styles
const styles = StyleSheet.create({
    page: {
        // paddingTop: "10mm",
        // paddingBottom: 65,
        backgroundColor: "#ccffee",
        // marginRight: checkListPaddingX,
        marginLeft: checkListPaddingX,
    },
});

// Create Document Component
export default function ({ lift }: { lift: LiftWithInspections }) {
    const { reg_number: regNr } = lift;
    // const {
    //     protocol_number: protocolNumber,
    //     inspection_type: inspectionType,
    //     inspection_next_type: inspection_next_type,
    //     expert: expert,
    //     date_start: date_start,
    //     date_end: date_end,
    //     date_next: date_next,
    //     date_next_normal: date_next_normal,
    //     label: label,
    //     bir_number: bir_number,
    //     inspection_result: inspection_result,
    //     participants: participants,
    //     non_compliances_0: non_compliances_0,
    //     non_compliances_1: non_compliances_1,
    //     non_compliances_2: non_compliances_2,
    //     non_compliances_3: non_compliances_3,
    //     extra_check_reason: extra_check_reason,
    //     not_checked_forced: not_checked_forced,
    //     notes: notes,
    //     notes_for_protokol: notes_for_protokol,
    // } = inspection;

    return (
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
            <Document>
                <Page size="A4">
                    <Zazhim />
                    <Header />
                    <Text>{JSON.stringify(lift.inspections[2])}</Text>
                    {/*<Text>{JSON.stringify(inspectionType)}</Text>*/}
                    {/*<Text>{inspectionType}</Text>*/}
                </Page>
            </Document>
        </PDFViewer>
    );
}
