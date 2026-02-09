import OverCard from "@/components/overview/OverviewCards";
import QuickCards from "@/components/overview/Quickactions";
import ActiveNav from "@/components/ActiveNav";

const Overview = () => {
    return (
        <>
            <ActiveNav />
            <div className="flex flex-col gap-6">
                <OverCard />
                <QuickCards />
            </div>
        </>
    );
}

export default Overview
