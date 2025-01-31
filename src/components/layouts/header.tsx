import { Link } from 'react-router-dom';

import { GlobalSearch } from '../ui/global-search';
import { ThemeSwitcher } from '../ui/theme-switcher';

export function Header() {
  return (
    <header className='bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
      <div className='flex justify-between items-center container'>
        <div className='flex items-center gap-20'>
          <Link to='/'>
            <img src='/icons/brand-logo.svg' alt='logo' width={110} />
          </Link>

          <nav>
            <ul className='flex gap-10'>
              {navlinks.map(({ label, to }) => (
                <Link to={to}>
                  <li>{label}</li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>

        <div className='flex gap-10'>
          <GlobalSearch />

          <ThemeSwitcher />

          <div>socials</div>
        </div>
      </div>
    </header>
  );
}

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
