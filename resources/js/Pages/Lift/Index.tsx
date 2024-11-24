import { router } from "@inertiajs/react";
import React from "react";

const Index = ({ lifts, filters }: { lifts: any; filters: any }) => {
    return (
        <>
            <div className="flex space-x-14">
                <div className="mb-4 text-xl font-bold">LiftIndex</div>
                <input
                    type="text"
                    value={filters.search}
                    // placeholder={filters.search}
                    className="rounded-lg"
                    onChange={(e) => {
                        router.get(
                            "/lifts",
                            { search: e.target.value },
                            {
                                preserveState: true,
                                replace: true,
                            }
                        );
                    }}
                ></input>
                {/* <pre>{JSON.stringify(lifts, null, 2)}</pre> */}
            </div>
            <div className="flex flex-wrap space-x-4">
                {lifts.data.map((lift: any) => (
                    <div key={lift.id} className="mb-2">
                        <h3 className="font-bold">{lift.reg_number}</h3>
                        <p>{lift.address}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Index;
