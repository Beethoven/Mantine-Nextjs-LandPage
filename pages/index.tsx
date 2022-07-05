import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderUI } from '../components/Layout/Header';

const Links = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/about',
    label: 'About',
  },
  {
    link: '/contact',
    label: 'Contact',
  },
];

export default function HomePage() {
  return (
    <>
      <HeaderUI links={Links} />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
