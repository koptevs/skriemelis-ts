import * as React from "react";
import { Link } from "@inertiajs/react";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
// import MobileNav from "@/components/TopNavbar/MobileNav";
import MobileNav from "@/components/TopNavbar/MobileNav";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];

export default function TopNavbar() {
    return (
        <>

            <div className="container mx-auto flex h-[56px] w-full max-w-2xl justify-between px-6 lg:max-w-7xl">
                {/* <div className="flex items-center">LOGO</div> */}
                <Link
                    href="/"
                    className="flex min-w-max items-center justify-center gap-2"
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
                <NavigationMenu className="max-sm:hidden">
                    <NavigationMenuList>
                        {" "}
                        <NavigationMenuItem>
                            <Link href="/">
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Getting started
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                {/* <Icons.logo className="h-6 w-6" /> */}
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    shadcn/ui
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Beautifully designed
                                                    components built with Radix
                                                    UI and Tailwind CSS.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/docs" title="Introduction">
                                        Re-usable components built using Radix
                                        UI and Tailwind CSS.
                                    </ListItem>
                                    <ListItem
                                        href="/docs/installation"
                                        title="Installation"
                                    >
                                        How to install dependencies and
                                        structure your app.
                                    </ListItem>
                                    <ListItem
                                        href="/docs/primitives/typography"
                                        title="Typography"
                                    >
                                        Styles for headings, paragraphs,
                                        lists...etc
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Components
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[450px] md:grid-cols-2 lg:w-[550px]">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/dashboard">
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Dashboard
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/about">
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    About
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    <div className="ml-8"></div>
                    {/* <ModeToggle /> */}
                </NavigationMenu>
                <MobileNav/>
            </div>
        </>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
    >(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
