import {Link, router} from "@inertiajs/react";
import React from "react";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";

const Index = ({lifts, filters}: { lifts: any; filters: any }): JSX.Element => {
    console.log(lifts)
    return (
        <AuthenticatedLayout
                        header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Lifti
                </h2>
            }
        >
            <Head title="Lifti"/>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="space-x-4 mt-4 flex justify-center text-xl">
                        {lifts.links.map((link:any) => (
                            <Link
                                key={link.id}
                                // component={InertiaLink}
                                // className={`relative block rounded bg-transparent px-2 py-1 text-sm  no-underline transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white  ${
                                //     link.active ? "text-red-500" : "text-slate-900"
                                // }`}
                                href={link.url}
                                // sx={{
                                //     textDecoration: "none",
                                //     fontWeight: "600",
                                //     fontSize: "1rem",
                                //     marginRight: "1em",
                                //     color: link.active
                                //         ? colors.redAccent[500]
                                //         : colors.blueAccent[300],
                                // }}
                            >
                                {link.label === "&laquo; Previous"
                                    ? "<<"
                                    : link.label === "Next &raquo;"
                                        ? ">>"
                                        : link.label}
                            </Link>

                        ))}

                        {/* <pre>{JSON.stringify(lifts, null, 2)}</pre> */}
                    </div>
            <div className=" md:space-x-4 mt-4  md:flex ">
               <div>
                   <label htmlFor="search-reg" className="text-sm mr-3">
                       Поиск по Reg. Nr.{"  "}
                   </label>
                   <input
                       id="search-reg"
                       type="text"
                       value={filters.search}
                       // placeholder={filters.search}
                       className="rounded-lg  text-gray-800 dark:text-gray-200 dark:bg-gray-800"
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
               </div>
                <div className="mt-2 md:mt-0">
                    <label htmlFor="search-street" className="text-sm mr-3 md:ml-4">
                        Поиск по улице {"  "}
                    </label>
                    <input
                        id="search-street"
                        type="text"
                        placeholder={filters.street}
                        className="border px-4 py-2 rounded-lg text-gray-800 dark:text-gray-200 dark:bg-gray-800"
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
                </div>
            </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {lifts.data.map((lift: any) => {
                    let statusMarkColor = null;
                    const status = lift.inspection_status;

                    if (status === "0") {
                        statusMarkColor = "transparent";
                    } else if (status === "1") {
                        statusMarkColor = "green";
                    } else if (status === "2") {
                        statusMarkColor = "orange";
                    } else if (status === "3") {
                        statusMarkColor = "red";
                    }

                    return (
                        <div key={lift.id} className="bg-gray-100 p-2 rounded-md  text-gray-800 dark:text-gray-200 dark:bg-gray-800">
                            <Link
                                href={route("lifts.show", lift.id)}

                            >
                            <h3 className="font-bold">{lift.reg_number}</h3>
                            <p>{lift.address}</p>
                            </Link>

                        </div>
                    )

                })}
            </div>
                </div>

        </AuthenticatedLayout>
    );
};

export default Index;
