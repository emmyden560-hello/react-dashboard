import { useEffect, useState, useRef } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Bell, Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";

const Header = () => {
    const [query, setQuery] = useState("");

    const inputRef = useRef(null);

    useEffect(() => {
        const keydown = (e) => {
            if (e.ctrlKey &&
                e.key.toLowerCase() === "k") {
                e.preventDefault();
                inputRef.current?.focus();
            }
        }

        window.addEventListener("keydown", keydown);

        return () => {
            window.removeEventListener("keydown", keydown);
        }
    }, []);

    return (
        <header
            className="font-sans flex w-full items-center justify-between gap-3 py-3 px-3 border-b border-border-subtle">
            <div className="flex flex-1 items-center gap-3">
                <div className="lg:hidden">
                    <MobileNav />
                </div>
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary w-4 h-4" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className={cn(
                            "w-full pl-10 pr-16 py-2 rounded-xl bg-surface-card border border-border-subtle font-[14px] text-text-primary",
                            "outline-none focus:border-primary-main/50 focus:ring-1 focus:ring-primary-main/10 transition-all placeholder:text-text-secondary/50"
                        )}
                    />

                    {!query && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <kbd className="hidden lg:inline-flex h-6 items-center gap-1 rounded border border-border-subtle bg-white/5 px-2 font-mono text-[10px] font-medium text-text-secondary opacity-100">
                                <span className="text-xs">Ctrl</span>+K
                            </kbd>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-3">
                <NavLink to="/reports">
                    <Button className="relative bg-surface-card border border-border-subtle p-2.5 rounded-xl text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-surface-card" />
                    </Button>
                </NavLink>

                <div className="hidden lg:block pl-2 border-l border-border-subtle">
                    <NavLink to="/profile" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <img src="./favicon.svg.png" alt="profile" className="w-12 h-10 rounded-full bg-surface-card border border-border-subtle" />
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header