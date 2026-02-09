import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import MobileNav from "./components/MobileNav"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <>
      <div className="flex gap-12 lg:gap-0 border border-border-subtle">
        <MobileNav />
        <Sidebar className="hidden lg:flex flex-col" />
        <div className="flex-1">
          <Header />
          <main className="p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
