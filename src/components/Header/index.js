import { ReactComponent as Logo } from '../../assets/logo.svg';
import './Header.css';

export default function Header() {
  return (
    <header className='page-header'>
      <a className='logo-link' href='/'>
        <Logo />
        Guys & Mary
      </a>
      <nav className='page-nav'>
        <ul>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='#team'>Team</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
