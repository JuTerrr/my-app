import Link from "next/link";
import { ReactNode } from "react";

type NavLinksProps = {
  href: string;
  children: ReactNode;
};

function NavLinks(props: NavLinksProps) {
  return (
    <li>
      <Link href={props.href}>{props.children}</Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="bg-teal-800 text-amber-100 px-4 py-4 fixed w-full z-50">
      <ul className="container mx-auto flex justify-between">
        <div className="flex gap-7">
          <NavLinks href="#">Nouveautés</NavLinks>
          <NavLinks href="#">Femmes</NavLinks>
          <NavLinks href="#">Hommes</NavLinks>
          <NavLinks href="#">Enfants</NavLinks>
        </div>
        <div className="flex gap-7">
          <NavLinks href="/A-propos">À propos</NavLinks>
        </div>
      </ul>
    </nav>
  );
}
