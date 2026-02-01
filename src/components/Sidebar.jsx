import { Bell, Notebook, Package, Settings2 } from "lucide-react";

const navs = [
    {
        name: "Overview",
        icon: <Package />
    },
    {
        name: "Analytics",
        icon: <Bell />
    },
    {
        name: "Settings",
        icon: <Settings2 />
    }
]


const Sidebar = () => {
    return (
        <>
            <div className="px-6 py-4 w-[300px] border-r-1 border-gray-300 min-h-screen bg-gray-100">
                <div>
                    <h1 className="flex items-center gap-2 text-3xl font-semibold mt-3 mb-8">
                        <span><Notebook size={30} /></span>EDashboard
                    </h1>
                </div>

                <div>
                    {navs.map((nav, index) => {
                        return (
                            <div>
                                <div key={index} className="flex items-center gap-3 font-semibold text-xl mb-3 bg-gray-300 p-2 rounded-full">
                                    <span>{nav.icon}</span>{nav.name}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Sidebar