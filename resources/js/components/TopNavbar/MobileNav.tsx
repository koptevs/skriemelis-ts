import React from "react";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import {Menu} from "lucide-react";
import {Button} from "../ui/button";

import {Link} from "@inertiajs/react";
import NavContent from "./NavContent";
import {ModeToggle} from "@/components/TopNavbar/ModeToggle";

export default function  MobileNav () {
    return (
        <div className="ml-4 flex w-full items-center justify-end sm:hidden">
            <Sheet>
                <div className="flex w-full justify-between">
                    <ModeToggle />
                    <div></div>
                    {/* TODO remove if on sheet will close */}
                    <SheetTrigger asChild>
                        <Button variant="outline">
                            <Menu/>
                        </Button>
                    </SheetTrigger>
                </div>
                <SheetContent side="right" className="w-[300px]">
                    <SheetClose asChild>
                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2"
                        >
                            <img
                                src="/assets/images/site-logo.png"
                                alt="Site Logo"
                                width={20}
                                height={20}
                            />
                            <div className="py-2 font-bold">
                                NEXT-
                                <span className="text-orange-600">TUV</span>
                            </div>
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <NavContent />
                    </SheetClose>
                </SheetContent>
            </Sheet>
        </div>
    );
}

