/* eslint-disable prettier/prettier */
import * as React from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-slate-50 hover:bg-primary-hover dark:bg-primary dark:text-white dark:hover:bg-primary-hover',
        destructive:
          'bg-destructive text-slate-50 hover:bg-destructive-hover dark:bg-destructive dark:text-slate-50 dark:hover:bg-destructive-hover',
        outline:
          'border border-slate-200 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 bg-transparent dark:hover:bg-slate-800 dark:hover:text-slate-50',
        success:
          'bg-success text-white hover:bg-success-hover dark:bg-success dark:hover:bg-success-hover',
        warn: 'bg-warn hover:bg-warn-hover text-gray-800 dark:bg-warn hover:text-gray-800 dark:hover:bg-warn-hover',
        gray: 'text-white dark:bg-gray dark:hover:bg-gray-hover hover:bg-gray-hover bg-gray  dark:text-slate-50',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & {
    asChild?: boolean;
    className?: string;
    variant?: string;
    size?: string;
  }
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = 'Button';

export { Button, buttonVariants };
