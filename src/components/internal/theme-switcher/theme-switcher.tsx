import useTheme from '@/hooks/use-theme';
import { cn } from '@/lib/utils';
import { Moon, SunMedium } from 'lucide-react';

export const ThemeSwitcher = ({
  className,
}: {
  className?: string;
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type='button'
      onClick={toggleTheme}
      className={cn(
        className,
        'px-3 py-2 dark:hover:bg-[#292B32] hover:bg-slate-100 rounded-[8px] focus-within:transition-none hover:duration-300 transition focus:transition-none',
      )}
    >
      {theme === 'dark' ? (
        <SunMedium size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
};
