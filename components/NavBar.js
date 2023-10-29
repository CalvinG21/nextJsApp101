// components/Navbar.js
import Link from 'next/link'

//navbar functional component, has links to all pages.
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
           Home
          </Link>
        </li>
        
        <li>
          <Link href="/projects">
            Projects
          </Link>
        </li>

        <li>
          <Link href="/about">
            Contact Info
          </Link>
        </li>


      </ul>
    </nav>
  );
};

export default NavBar;