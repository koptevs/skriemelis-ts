import React from "react";
import dayjs from "dayjs";
import {Link} from "@inertiajs/react";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";

const Show = ({lift}:{lift:any}) => {
    const {
        reg_number,
        address,
        installation_year,
        factory_number,
        load,
        speed,
        inspections,
        entry_code,
    } = lift;

    const recentInspection = inspections.sort((a:any, b:any) => {
        return dayjs(b.date_start).unix() - dayjs(a.date_start).unix();
    })[0];

    return (
    <AuthenticatedLayout
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                Lifts - {address} {entry_code ? "( " + entry_code + " )" : null}
            </h2>
        }
    >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">

        {reg_number}<br/>
        Address:{" "}
        <span style={{fontSize: "13px", fontWeight: "bold"}}>
                    {address}
        </span><br/>
    Year:{" "}
    <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                    {installation_year} g.
                </span><br/>
        Factory number:{" "}
        <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                    {factory_number}
                </span><br/>
        Load:{" "}
        <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                    {load} kg.
                </span><br/>
        Speed:{" "}
        <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                    {speed} m/s
                </span><br/>
        Code:{" "}
        <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                    {entry_code}
                </span><br/>


    {/*#################################################*/}
        {recentInspection && (
            <>
                    <h5>Last Inspection Results</h5>

                <Link
                    href={route("inspections.show", recentInspection.id)}>

                        <h6>{recentInspection.protocol_number}</h6>
                </Link>

                <p>
                    Insp. start -{" "}
                    <span style={{ fontWeight: 600 }}>
                            {dayjs(recentInspection.date_start).format(
                                "DD.MM.YYYY"
                            )}
                        </span>
                </p>
                <p>
                    Insp. Next -{" "}
                    <span style={{ fontWeight: 600 }}>
                            {dayjs(recentInspection.date_next).format(
                                "DD.MM.YYYY"
                            )}
                        </span>
                </p>
                <p>
                    Insp. Next Type -{" "}
                    <span style={{ fontWeight: 600 }}>
                            {recentInspection.inspection_next_type}
                        </span>{" "}
                </p>

                {/*{recentInspection.non_compliances_1.length > 4 && (*/}
                {/*    <>*/}
                {/*        <p style={{ fontWeight: 600 }}>*/}
                {/*            Neatbilsības 1:{" "}*/}
                {/*        </p>*/}
                {/*        <div style={{ fontSize: "11px", width: "100%" }}>*/}
                {/*            /!* {recentInspection.non_compliances_1.replace(*/}
                {/*        /(\r\n|\r|\n)/g,*/}
                {/*        "<br>"*/}
                {/*    )} *!/*/}
                {/*            {Object.entries(*/}
                {/*                JSON.parse(*/}
                {/*                    recentInspection.non_compliances_1*/}
                {/*                )*/}
                {/*            ).map(([index, value]) => (*/}
                {/*                <p key={index}>{value}</p>*/}
                {/*            ))}*/}
                {/*        </div>*/}
                {/*    </>*/}
                {/*)}*/}

                {/*{recentInspection.non_compliances_2.length > 4 && (*/}
                {/*    <>*/}
                {/*        <p style={{ fontWeight: 600 }}>*/}
                {/*            Neatbilsības 2:{" "}*/}
                {/*        </p>*/}
                {/*        <div style={{ fontSize: "11px", width: "100%" }}>*/}
                {/*            /!* {recentInspection.non_compliances_1.replace(*/}
                {/*        /(\r\n|\r|\n)/g,*/}
                {/*        "<br>"*/}
                {/*    )} *!/*/}
                {/*            {Object.entries(*/}
                {/*                JSON.parse(*/}
                {/*                    recentInspection.non_compliances_2*/}
                {/*                )*/}
                {/*            ).map(([index, value]) => (*/}
                {/*                <p key={index}>{value}</p>*/}
                {/*            ))}*/}
                {/*        </div>*/}
                {/*    </>*/}
                {/*)}*/}

                {/*{recentInspection.non_compliances_3.length > 4 && (*/}
                {/*    <>*/}
                {/*        <p style={{ fontWeight: 600 }}>*/}
                {/*            Neatbilsības 3:{" "}*/}
                {/*        </p>*/}
                {/*        <div style={{ fontSize: "11px", width: "100%" }}>*/}
                {/*            /!* {recentInspection.non_compliances_1.replace(*/}
                {/*        /(\r\n|\r|\n)/g,*/}
                {/*        "<br>"*/}
                {/*    )} *!/*/}
                {/*            {Object.entries(*/}
                {/*                JSON.parse(*/}
                {/*                    recentInspection.non_compliances_3*/}
                {/*                )*/}
                {/*            ).map(([index, value]) => (*/}
                {/*                <p key={index}>{value}</p>*/}
                {/*            ))}*/}
                {/*        </div>*/}
                {/*    </>*/}
                {/*)}*/}
            </>
        )}
    {/*    ########################################*/}


        <Link
            href={route("lifts.edit", lift.id)}
            className="no-underline font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
        >
            <h3 className="text-2xl text-sky-800 dark:text-sky-500 mt-4 ">Edit</h3>
        </Link>

        {/*<Button*/}
        {/*    variant="link"*/}
        {/*    size="small"*/}
        {/*    onClick={() =>*/}
        {/*        router.delete(`/lifts/${lift.id}`, {*/}
        {/*            onBefore: () =>*/}
        {/*                confirm("Чем лифт тебе мешает? Точно удалить?"),*/}
        {/*        })*/}
        {/*    }*/}
        {/*>*/}
        {/*    Delete*/}
        {/*</Button>*/}


        </div>
    </AuthenticatedLayout>)

};

export default Show;
