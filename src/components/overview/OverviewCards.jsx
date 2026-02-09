import { cn } from '@/lib/utils';
import {
    DollarSign,
    Users,
    Activity,
    ArrowUpRight,
    ArrowDownRight,
    TrendingUp
} from 'lucide-react';

const overcards = [
    {
        id: 'total-revenue',
        title: 'Total Revenue',
        value: '$124,800',
        icon: DollarSign,
        // Blue/Purple gradient theme
        iconColor: "text-white",
        iconBg: "bg-emerald-300/50",
        trend: {
            value: "+12%",
            isPositive: true,
            text: "from last month"
        },
        hasGraph: true
    },
    {
        id: 'active-users',
        title: 'Active Users',
        value: '14.2k',
        icon: Users,
        // Bright Blue theme
        iconColor: "text-cyan-300",
        iconBg: "bg-blue-500/20",
        trend: {
            value: "+452",
            isPositive: true,
            text: "today"
        }
    },
    {
        id: 'new-signups',
        title: 'New Signups',
        value: '890',
        icon: Users,
        // Golden Yellow theme
        iconColor: "text-yellow-300",
        iconBg: "bg-yellow-500/15",
        trend: {
            value: "+5%",
            isPositive: false,
            text: "from last month"
        }
    },
    {
        id: 'system-health',
        title: 'System Health',
        value: '99.9%',
        icon: Activity,
        // Bright Green theme
        iconColor: "animate-pulse text-green-400",
        iconBg: "bg-green-500/20",
        trend: {
            value: "Uptime",
            isPositive: true,
            text: ""
        }
    },
];

const OverCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-1">
            {overcards.map((card) => {
                return (
                    <div key={card.id} className='overcard group'>
                        {/* Header: Title and Icon */}
                        <div className='flex justify-between items-start'>
                            <span className='text-text-primary/80 font-medium text-md'>{card.title}</span>
                            <span className={cn('p-2 rounded-lg', card.iconBg)}>
                                <card.icon size={18} className={cn(card.iconColor)} />
                            </span>
                        </div>

                        {/* Value */}
                        <div className='mt-2'>
                            <span className='text-text-primary font-mono font-bold text-3xl'>{card.value}</span>
                        </div>

                        {/* Footer: Trend and Description */}
                        <div className='mt-auto flex items-center gap-2 text-sm'>
                            {card.id === 'system-health' ? (
                                <span className='text-text-secondary'>{card.trend.value}</span>
                            ) : (
                                <>
                                    <span className={cn('flex items-center font-medium',
                                        card.trend.isPositive ? 'text-emerald-400' : 'text-red-400'
                                    )}>
                                        {card.trend.isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                                        {card.trend.value}
                                    </span>
                                    <span className='text-text-secondary text-xs'>{card.trend.text}</span>
                                </>
                            )}

                            {/* Decorative Graph Placeholder for Revenue */}
                            {/* {card.hasGraph && (
                                <TrendingUp className="ml-auto text-emerald-500/50 w-12 h-6" />
                            )} */}
                        </div>

                        {/* Decorative Gradient Background for Revenue Only to match image */}
                        {/* {card.id === 'total-revenue' && (
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 to-purple-600/8 pointer-events-none rounded-2xl" />
                        )} */}
                    </div>
                )
            })}
        </div>
    )
}

export default OverCard
