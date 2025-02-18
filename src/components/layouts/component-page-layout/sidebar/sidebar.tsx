/* eslint-disable no-nested-ternary */
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const SideLinks = [
  {
    label: 'Getting started',
    links: [
      {
        name: 'Introduction',
        href: 'introduction',
      },
      {
        name: 'Figma',
        href: '/figma',
      },
      {
        name: 'Templates',
        href: '/templates',
      },
    ],
  },
  {
    label: 'Components',
    links: [
      {
        name: 'Button',
        href: 'button',
      },
      {
        name: 'Drawer',
        href: 'drawer',
      },
    ],
  },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className='space-y-8 pr-16 sticky overflow-hidden bottom-0 top-20 left-0 pt-9 h-screen'>
      {SideLinks.map(({ label, links }) => (
        <div className='space-y-2' key={label}>
          <h2 className='font-bold'>{label}</h2>

          <nav>
            <ul className='gap-y-2 relative text-sm  flex flex-col items-center'>
              <div
                className='absolute top-0 left-0 w-[1px] opacity-80 bg-brand rounded-r-md'
                style={{
                  height: `${links.length <= 4 ? '75%' : links.length <= 9 ? '90%' : '95%'}`,
                }}
              />
              {links.map(({ name, href }) => (
                <Link
                  to={href}
                  key={name}
                  className='self-start group pt-[2px] ml-5'
                >
                  <img
                    src='/icons/line.svg'
                    className='w-4 h-4 absolute -left-[1px] -translate-y-[30%]'
                    alt='hsj'
                  />
                  <li
                    className={cn(
                      'transition-all group-hover:text-foreground text-text duration-200 group-hover:translate-x-2',
                      location.pathname.includes(href)
                        ? 'text-foreground font-semibold'
                        : '',
                    )}
                  >
                    {name}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      ))}
    </aside>
  );
};
