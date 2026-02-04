import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"


const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md transition-smooth focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: 'bg-brand-primary text-white hover:bg-brand-primary/90',
        secondary: 'bg-white border border-border-subtle text-slate-900 hover:bg-slate-50',
        ghost: 'hover:bg-slate-50 text-slate-600',
      },
      size: {
        sm: 'h-9 px-3 text-xs',
        md: "h-10 px-4 text-sm",
        lg: "h-full px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
