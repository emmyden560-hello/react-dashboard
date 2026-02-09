import { useLocation } from "react-router-dom";
import { navs, lownav } from "./Sidebar";

const ActiveNav = () => {
    const location = useLocation();

    const allnavs = [...navs, ...lownav];

    const activeNav = allnavs.find(nav => nav.href === location.pathname);

    return (
        <div className="mb-8">
            <p className="text-sm text-text-primary/50 tracking-wider">
                Home {'>'} Dashboard {'>'} <span className="font-bold text-text-primary">{activeNav?.name || "Overview"}</span>
            </p>
        </div>
    )
}

export default ActiveNav
