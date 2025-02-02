import useTheme from '@/hooks/use-theme';
import { Link } from 'react-router-dom';

import { GlobalSearch } from '../internal/global-search';
import { ThemeSwitcher } from '../internal/theme-switcher';

export const Header = () => {
  const { theme } = useTheme();

  return (
    <header className='py-4'>
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
              width={110}
            />
          </Link>

          <nav>
            <ul className='flex gap-10 text-sm font-medium'>
              {navlinks.map(({ label, to }) => (
                <Link
                  to={to}
                  className='capitalize hover:text-white duration-300'
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
              className='font-medium hover:text-white duration-300 text-sm'
            >
              Twitter
            </Link>

            <Link
              to='/'
              className='font-medium hover:text-white duration-300 text-sm'
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
