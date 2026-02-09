import { ArrowBigLeftDashIcon, BarChart3, FileText, LayoutDashboard, LogOut, Settings, User, Users } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { cn } from "../lib/utils";

export const navs = [
    {
        name: "Overview",
        href: "/",
        icon: <LayoutDashboard size={20} strokeWidth={1.5} />
    },
    {
        name: "Analytics",
        href: "/analytics",
        icon: <BarChart3 size={20} strokeWidth={1.5} />
    },
    {
        name: "Users",
        href: "/users",
        icon: <Users size={20} strokeWidth={1.5} />
    },
    {
        name: "Reports",
        href: "/reports",
        icon: <FileText size={20} strokeWidth={1.5} />
    },
    {
        name: "Settings",
        href: "/settings",
        icon: <Settings size={20} strokeWidth={1.5} />
    }
]

export const lownav = [
    {
        name: "Profile",
        href: "/profile",
        icon: <User size={20} strokeWidth={1.5} />
    },
    {
        name: "Logout",
        href: "/logout",
        icon: <LogOut size={20} strokeWidth={1.5} />
    }
]

const Sidebar = ({ className }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);

    return (
        <>
            <section className={cn(
                "side-bar", className,
                isCollapsed ? "!w-16 !py-4" : "!w-54"
            )}>
                <div>
                    <div>
                        <h1 className="flex-between gap-2 mt-2 mb-5">
                            <img src="/logo-2.png" alt="logo-2" className={cn("w-10 h-10", isCollapsed && "hidden")} />
                            <button onClick={toggleSidebar}>
                                <ArrowBigLeftDashIcon className={cn("text-text-secondary hidden lg:block transition-transform duration-300", isCollapsed && "rotate-180")} />
                            </button>
                        </h1>
                    </div>

                    <div>
                        {navs.map((nav, index) => {
                            return (
                                <NavLink
                                    to={nav.href}
                                    key={index}
                                    className={({ isActive }) => cn("nav-item", isActive && "nav-item-active")}>
                                    <span>{nav.icon}</span>
                                    {/* Only show the name if not collapsed */}
                                    {!isCollapsed && <span className="transition-opacity duration-300">{nav.name}</span>}
                                </NavLink>
                            )
                        })}
                    </div>
                </div>

                <div className="mt-auto border-t-1 border-border-subtle">
                    {lownav.map((nav, index) => {
                        return (
                            <NavLink
                                to={nav.href}
                                key={index}
                                className={({ isActive }) => cn("nav-item mt-2", isActive && "nav-item-active")}>
                                <span>{nav.icon}</span>
                                {/* Only show the name if not collapsed */}
                                {!isCollapsed && <span className="transition-opacity duration-300">{nav.name}</span>}
                            </NavLink>
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default Sidebar