import { useState } from "react";
import { router } from "@inertiajs/react";

import { useForm } from "@inertiajs/react";
import { cn } from "@/lib/utils";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    function onSubmitHandler(e: React.SyntheticEvent) {
        // console.log(data);
        e.preventDefault();
        post("/lifts", {
            preserveScroll: true,
            onSuccess: (thing) => console.log("console: ", thing),
        });
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <input
                type="text"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
            />
            {errors.email && <div>{errors.email}</div>}
            <input
                type="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
            />
            {errors.password && <div>{errors.password}</div>}
            <input
                type="checkbox"
                checked={data.remember}
                onChange={(e) => setData("remember", e.target.checked)}
            />{" "}
            Remember Me
            <button
                type="submit"
                disabled={processing}
                // disabled={true}
                className={cn(
                    "rounded-lg bg-slate-400 px-4 py-2",
                    processing && "border border-black bg-slate-200"
                )}
            >
                Login
            </button>
        </form>
    );
}
