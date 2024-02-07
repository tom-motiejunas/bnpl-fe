import React from 'react';
import LogoPicture from '../assets/Logo.png';

const Logo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={'flex h-[30px] w-[135px] items-center gap-2'}
      {...props}
    >
      <img src={LogoPicture} />
      <h2 className="text-center text-xs text-tertiary">Place Holder Co.</h2>
    </div>
  );
});

export { Logo };
