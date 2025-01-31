import cn from '@/utils/cn';

export function Button({ className }: { className?: string }) {
  return <div className={cn('button', className)}>Button</div>;
}
