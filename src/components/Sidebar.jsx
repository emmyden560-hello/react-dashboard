import { ArrowLeft, BarChart3, FileText, LayoutDashboard, LogOut, Menu, Settings, User, Users, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "../lib/utils";

const navs = [
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


const Sidebar = ({ className }) => {

    return (
        <section className={cn("side-bar", className)}>
            <div>
                <div>
                    <h1 className="flex-between gap-2 mt-2 mb-5">
                        <img src="/logo-2.png" alt="logo-2" className="w-10 h-10" />
                        <ArrowLeft className="hidden md:block text-white/40" />
                    </h1>
                </div>

                <div>
                    {navs.map((nav, index) => {
                        return (
                            <NavLink to={nav.href} key={index} className="nav-item">
                                <span>{nav.icon}</span>{nav.name}
                            </NavLink>
                        )
                    })}
                </div>
            </div>

            <div className="border-t-1 border-border-subtle">
                <div className="nav-item">
                    <User />
                    Profile
                </div>
                <div className="nav-item">
                    <LogOut />
                    Logout
                </div>
            </div>
        </section>
    );
}

export default Sidebar