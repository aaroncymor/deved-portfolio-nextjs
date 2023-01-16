import Link from 'next/link';
import { BsFillMoonStarsFill } from "react-icons/bs";

const Header = ({ darkMode, setDarkMode }) => {

  return (
    <header className="dark:bg-gray-900">
      <nav className="nav__header flex flex-row justify-between w-1/2 mx-auto">
        <ul className="flex flex-row gap-2">
          <li>
            <Link href="/">
              <span className="dark:text-white">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <span className="dark:text-white">Services</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span className="dark:text-white">Projects</span>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <BsFillMoonStarsFill
                onClick={() => {setDarkMode(!darkMode)}}
                className=" cursor-pointer text-2xl"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
