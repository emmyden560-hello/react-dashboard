import Header from "./Header"
import Sidebar from "./Sidebar"

const Layout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <Header />
        </div>
    )
}

export default Layout