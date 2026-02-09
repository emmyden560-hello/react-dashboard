import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";
import Sidebar from "./Sidebar";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="lg:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="text-white fixed top-3 left-3 z-50 p-2 bg-surface-sidebar rounded-md border border-border-subtle"
            >
                <Menu className="size-{2px}" />
            </button>

            {/* Backdrop */}
            <div
                onClick={() => setIsOpen(false)}
                className={cn(
                    "fixed inset-0 bg-background/60 backdrop-blur-xs z-[100] transition-opacity duration-300",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            />

            {/* Sliding Sidebar Container */}
            <div
                className={cn(
                    "fixed top-0 left-0 bottom-0 w-64 bg-surface-sidebar z-[101] transition-transform duration-300 ease-in-out transform",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="h-full relative">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-7.5 right-4 text-white/60 hover:text-white"
                    >
                        <X size={24} />
                    </button>
                    <Sidebar className="w-full border-none flex flex-col" />
                </div>
            </div>
        </section>
    )
}

export default MobileNav
