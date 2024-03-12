import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="hidden space-x-4 text-sm font-medium lg:flex">
      <Link
        to={"story"}
        className="text-gray-900 hover:underline dark:text-gray-100 dark:hover:underline"
      >
        Story
      </Link>
      <Link
        className="text-gray-900 hover:underline dark:text-gray-100 dark:hover:underline"
        to={"paint"}
      >
        Paint
      </Link>
      <Link
        to={"about"}
        className="text-gray-900 hover:underline dark:text-gray-100 dark:hover:underline"
      >
        About
      </Link>
      <Link
        className="text-gray-900 hover:underline dark:text-gray-100 dark:hover:underline"
        to={"contact"}
      >
        Contact
      </Link>
    </nav>
  );
};
