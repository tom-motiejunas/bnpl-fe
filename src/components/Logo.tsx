import React from 'react';
import LogoPicture from '../assets/Logo.png';
import { cn } from '@/lib/utils';

const Logo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex h-[30px] w-[135px] items-center gap-2', className)}
      {...props}
    >
      <img src={LogoPicture} />
      <h2 className="text-center text-xs text-tertiary">Place Holder Co.</h2>
    </div>
  );
});

export { Logo };
