import React from "react";
// import { usePathname } from "next/navigation";
import {Slot} from "@radix-ui/react-slot";
import {SheetClose} from "@/components/ui/sheet";
import {Home, Beer, Calendar} from "lucide-react";
import {cn} from "@/lib/utils";
import {Link, usePage} from "@inertiajs/react";

export default function NavContent() {
    // const pathname = usePathname();
    const {url, component} = usePage();

    const navLinks: {
        icon: React.ReactNode;
        path: string;
        label: string;
    }[] = [
        {
            icon: <Home/>,
            path: "/",
            label: "Home",
        },
        {
            icon: <Calendar/>,
            path: "/dashboard",
            label: "Dashboard",
        },
        {
            icon: <Beer/>,
            path: "/about",
            label: "About",
        },
    ];
    return (
        <div className="mt-8 flex w-full flex-col items-center gap-2">
            {navLinks.map((item) => {
                const isActive = url === item.path;
                // (pathname.includes(item.path) && item.path.length > 1) ||
                // pathname == item.path;
                return (
                    <SheetClose asChild key={item.path}>
                        <Link
                            href={item.path}
                            // className="flex gap-2"
                            className={cn(
                                "flex w-full items-center justify-start gap-3 px-6 py-3",
                                {
                                    "bg-slate-300/30": isActive,
                                }
                            )}
                        >
                            <Slot
                                className={cn("text-slate-500", {
                                    "text-slate-800": isActive,
                                })}
                            >
                                {item.icon}
                            </Slot>

                            <span
                                className={cn("", {
                                    "font-bold": isActive,
                                })}
                            >
                                {item.label}
                            </span>
                        </Link>
                    </SheetClose>
                );
            })}
        </div>
    );
};
