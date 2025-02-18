import useTheme from '@/hooks/use-theme';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

import { GlobalSearch } from '../../../internal/global-search';
import { ThemeSwitcher } from '../../../internal/theme-switcher';

export const Header = () => {
  const { theme } = useTheme();
  const location = useLocation();

  return (
    <header className='py-4 header fixed left-0 right-0 top-0 z-50 border-b dark:border-white/15 border-black/15 bg-background'>
      <div className='flex justify-between items-center container'>
        <div className='flex items-center gap-20'>
          <Link to='/'>
            <img
              src={
                theme === 'dark'
                  ? '/icons/logo-white.svg'
                  : '/icons/brand-logo.svg'
              }
              alt='logo'
              width={80}
            />
          </Link>

          <nav>
            <ul className='flex gap-10 text-sm font-medium'>
              {navlinks.map(({ label, to }) => (
                <Link
                  to={to}
                  className={cn(
                    'hover:text-foreground text-text capitalize duration-300',
                    location.pathname.includes(to) &&
                      'text-foreground font-semibold',
                  )}
                >
                  <li>{label}</li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>

        <div className='flex items-center gap-5'>
          <div className='flex items-center gap-4'>
            <GlobalSearch />

            <ThemeSwitcher />
          </div>

          <div className='flex items-center gap-4'>
            <Link
              to='/'
              className='font-medium hover:text-foreground text-text duration-300 text-sm'
            >
              Twitter
            </Link>

            <Link
              to='/'
              className='font-medium hover:text-foreground text-text duration-300 text-sm'
            >
              Discord
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const navlinks = [
  {
    label: 'components',
    to: '/components',
  },
  {
    label: 'Figma',
    to: '/figma',
  },
];
