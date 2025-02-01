import useTheme from '@/hooks/use-theme';
import { Moon, SunMedium } from 'lucide-react';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type='button'
      onClick={toggleTheme}
      className='px-3 py-2 dark:hover:bg-black/10 hover:bg-slate-100
       rounded-[8px] focus-within:transition-none hover:duration-300 transition focus:transition-none'
    >
      {theme === 'dark' ? (
        <SunMedium size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
};
