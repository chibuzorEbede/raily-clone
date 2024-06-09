import { navList } from "./navlist";

const NavLinks = () => {
  return (
    <ul className="text-white px-4 py-2 hidden md:flex  bg-navbg rounded-3xl blur-xs ">
      {navList.map((link) => (
        <li className="hover:bg-navlink hover:outline-none py-[.5em] px-[1.9em] border border-transparent rounded-3xl">
          <a href={link.url}> {link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
