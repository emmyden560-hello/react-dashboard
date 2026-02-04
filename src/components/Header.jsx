import { Button } from "./ui/button";


const Header = () => {
    return (
        <header className="font-sans max-w-[] lg:max-w-[1280px] mx-auto p-6 lg:p-10">
            <div className="flex items-center gap-4">
                <input type="text" placeholder="Search" className="w-full p-2 rounded-lg bg-surface-sidebar border border-border-subtle text-text-primary" />
                <Button className="bg-surface-popover p-2 rounded-lg border border-border-subtle text-text-primary/40">
                    WIN+K
                </Button>
            </div>
        </header>
    )
}

export default Header