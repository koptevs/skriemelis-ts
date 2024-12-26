import {router} from "@inertiajs/react";
import React from "react";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";

const Index = ({lifts, filters}: { lifts: any; filters: any }): JSX.Element => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Lifti
                </h2>
            }
        >
            <Head title="Lifti"/>
            <div className="flex space-x-4">
                {/*<div className="mb-4 text-xl font-bold">LiftIndex</div>*/}
                <label htmlFor="search-reg" className="text-sm">
                    Поиск по Reg. Nr.{"  "}
                </label>
                <input
                    id="search-reg"
                    type="text"
                    value={filters.search}
                    // placeholder={filters.search}
                    className="rounded-lg"
                    onChange={(e) => {
                        router.get(
                            "/lifts",
                            {search: e.target.value},
                            {
                                preserveState: true,
                                replace: true,
                            }
                        );
                    }}
                />
                <label htmlFor="search-street" className="text-sm">
                    Поиск по улице {"  "}
                </label>
                <input
                    id="search-street"
                    type="text"
                    placeholder={filters.street}
                    className="border px-4 py-2 rounded-lg"
                    onChange={(e) =>
                        router.get(
                            "/lifts",
                            {street: e.target.value},
                            {
                                preserveState: true,
                                replace: true,
                            }
                        )
                    }
                />
                {/* <pre>{JSON.stringify(lifts, null, 2)}</pre> */}
            </div>
            <div className=" flex flex-wrap space-x-4">
                {lifts.data.map((lift: any) => (
                    <div key={lift.id} className="mb-4 ml-4">
                        <h3 className="font-bold">{lift.reg_number}</h3>
                        <p>{lift.address}</p>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
