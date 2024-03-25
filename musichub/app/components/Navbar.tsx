"use client"

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: 'Home', href: '/' },
    { name: 'Guitars', href: '/guitars' },
    { name: 'Drums', href: '/drums' }
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <header className="mb-8 border-b">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <Link href="/">
                    <h1 className="text-2xl font-bold">Music<span className="text-primary">Hub</span></h1>
                </Link>

                <nav className="gap-12 flex 2xl:ml-16">
                    {links.map((link, i) => (
                        <div key={i}>
                            {pathname === link.href ? (
                                <Link className="text-lg font-semibold text-primary" href={link.href}>
                                    {link.name}
                                </Link>
                            ) : (
                                <Link className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary" href={link.href}>{link.name}</Link>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="flex divide-x border-r sm:border-l">
                    <Button className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none">
                        <ShoppingBag />
                        <span className="text-xs font-semibold text-gray-100 sm:block hidden-sm">Cart</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}