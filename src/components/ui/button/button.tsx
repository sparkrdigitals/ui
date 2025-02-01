import cn from '@/utils/cn';

export const Button = ({ className }: { className?: string }) => {
  return <div className={cn('button', className)}>Button</div>;
};
