import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";

const Overview = () => {
    return (
        <div className="flex">
            <MobileNav />
            <Sidebar className="hidden md:flex flex-col gap-60" />
            <main className="flex-1 md:ml-64">
                <Header />
            </main>
        </div>
    );
}

export default Overview
