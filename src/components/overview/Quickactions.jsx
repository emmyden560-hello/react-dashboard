import { ExternalLink, FileText, Settings, User } from "lucide-react"
import { cn } from "@/lib/utils"

const Cards = [
    {
        title: "Add New User",
        icon: User,
    },
    {
        title: "Create Reports",
        icon: FileText,
    },
    {
        title: "Manage Roles",
        icon: Settings,
    },
    {
        title: "View Logs",
        icon: ExternalLink,
    },
]

const QuickCards = () => {
    return (
        <div className="mt-3">
            <h2 className="text-text-primary font-semibold font-sans text-lg mb-2">Quick Action</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Cards.map((card, key) => (
                    <div
                        key={key}
                        className={cn(
                            "group hover:card-hover-glow quickcard transition-all duration-300",
                            card.isPrimary ? "quickcard-action" : "quickcard"
                        )}
                    >
                        <span className={cn(
                            "p-3 rounded-xl transition-all bg-surface-popover"
                        )}>
                            <card.icon size={24} strokeWidth={1.5} />
                        </span>
                        <span className={cn(
                            "font-medium text-center transition-colors",
                            card.isPrimary ? "text-white" : "text-text-secondary group-hover:text-[#f5f5f5]"
                        )}>
                            {card.title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default QuickCards