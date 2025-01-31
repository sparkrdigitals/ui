import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <Link to='/'>
        <img src='/icons/brand-logo.svg' alt='logo' />
      </Link>
    </header>
  );
}
