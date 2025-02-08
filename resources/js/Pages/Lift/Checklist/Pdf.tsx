//@ts-nocheck
import React from "react";
import dayjs from "dayjs";
import {
    PDFViewer,
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Font,
    Image,
    Svg,
} from "@react-pdf/renderer";
import { sharedStyles } from "./variables";
import Zazhim from "./Partials/Zazhim";
import Header from "./Partials/Header";

import type { LiftWithInspections } from "@/types";
import { sizes, borders, debug } from "./variables";
import Bedre from "./Partials/Bedre";
import Kabine from "./Partials/Kabine";
import SectionHeader from "./Partials/SectionHeader";
import Mashinka from "./Partials/Mashinka";
import JumtsUnShahta from "./Partials/JumtsUnShahta";

const { zazhimHeight, checkListPaddingX, checkListWidth, col_1, col_2, col_4 } =
    sizes;
const { borderNormal, borderThick, borderThin } = borders;

Font.register({
    family: "Arial",
    src: "/fonts/ArialRegular.ttf",
});
Font.register({
    family: "ArialBold",
    src: "/fonts/ArialBold.ttf",
});

// Create styles
const styles = StyleSheet.create({
    page: {
        // paddingTop: "10mm",
        // paddingBottom: 65,
        // backgroundColor: "#ccffee",
        // marginRight: checkListPaddingX,
        marginLeft: checkListPaddingX,
        // backgroundColor: "yellow",
        // paddingLeft: checkListPaddingX,
    },
});

// Create Document Component
export default function ({ lift }: { lift: LiftWithInspections }) {
    const {
        reg_number: regNr,
        address: address,
        factory_number: factoryNumber,
        speed: speed,
        load: load,
        installation_year: installationYear,
        floors_serviced: floorsServiced,
        entry_code: entryCode,
        bir_url: birUrl,
        inspections: inspections,
    } = lift;
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

    const shortAddress = address
        .replace(/bulvāris/i, "b.")
        .replace(/prospects/i, "pr.")
        .replace(/gatve/i, "g.")
        .replace(/Annas Meierovica/i, "A.M.")
        .replace(/ iela/i, "");

    const inspectionsNewestFirst = inspections
        .sort(
            (insp1, insp2) => dayjs(insp2.date_start) - dayjs(insp1.date_start)
        )
        .map((inspection) => {
            return {
                proto: inspection.protocol_number,
                result: inspection.inspection_result,
                type: inspection.inspection_type,
                notes: inspection.notes,
                started: dayjs(inspection.date_start).format("DD.MM.YYYY"),
                next: dayjs(inspection.date_next).format("DD.MM.YYYY"),
                whatsWrong1: JSON.parse(inspection.non_compliances_1),
                whatsWrong2: inspection.non_compliances_2,
                whatsWrong3: inspection.non_compliances_3,
            };
        });

    return (
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
            <Document>
                <Page size="A5" style={styles.page}>
                    <Zazhim />
                    <Header
                        regNr={regNr}
                        address={shortAddress}
                        factoryNumber={factoryNumber}
                        speed={speed}
                        load={load}
                        installationYear={installationYear}
                        floorsServiced={floorsServiced}
                        entryCode={entryCode}
                        birUrl={birUrl}
                    />
                    <SectionHeader header="BEDRE" />
                    <Bedre />
                    <SectionHeader header="KABĪNE" />
                    <Kabine isCE={parseInt(installationYear) >= 2000} />
                    <SectionHeader header="MAŠĪNTELPA" />
                    <Mashinka />
                    <SectionHeader header="KABĪNES JUMTS UN ŠAHTA" />
                    <JumtsUnShahta />
                    <View style={sharedStyles.lineWrapper}></View>
                    <View style={sharedStyles.lineWrapper}></View>
                    <View style={sharedStyles.lineWrapper}></View>

                    {inspectionsNewestFirst[0].whatsWrong1.map((nonComp) => (
                        <Text style={{ ...sharedStyles.text }}>{nonComp}</Text>
                    ))}
                    <Text style={{ ...sharedStyles.text }}>
                        {JSON.stringify(inspectionsNewestFirst[0], null, 2)}
                        {/* dayjs(inspection.date_end).format(
                                            "DD.MM.YYYY"
                                        ) */}
                    </Text>
                    {/*<Text>{JSON.stringify(inspectionType)}</Text>*/}
                    {/*<Text>{inspectionType}</Text>*/}
                </Page>
            </Document>
        </PDFViewer>
    );
}
