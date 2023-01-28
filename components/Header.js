import Link from 'next/link';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Header = ({ darkMode, setDarkMode }) => {

  return (
    <header className="bg-transparent dark:bg-gray-900 pt-4 absolute z-[1]">
      <nav className="nav__header flex flex-row justify-between w-1/2 mx-auto">
        <ul className="flex flex-row gap-2">
          <li className="cursor-pointer">
            <Link href="/">
              <span className="dark:text-white">Home</span>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/experiences">
              <span className="dark:text-white">Experiences</span>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/projects">
              <span className="dark:text-white">Projects</span>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <BsFillSunFill
              className="cursor-pointer text-2xl dark:text-white"
              onClick={() => {setDarkMode(!darkMode)}}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
