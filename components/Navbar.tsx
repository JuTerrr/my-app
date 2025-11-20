import Link from "next/link";
import { ReactNode } from "react";

type NavLinksProps = {
  href: string;
  children: ReactNode;
};

function NavLinks(props: NavLinksProps) {
  return (
    <li className="hover:bg-j-red transition-colors rounded-md px-4 py-2">
      <Link href={props.href}>{props.children}</Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="bg-j-teel-dark text-j-beige px-2 py-2 fixed w-full z-50 ">
      <ul className="container mx-auto flex justify-between">
        <div className="flex gap-7">
          <NavLinks href="/">Acceuil</NavLinks>
          <NavLinks href="/Nouveautes">Nouveautés</NavLinks>
          <NavLinks href="/Femmes">Femmes</NavLinks>
          <NavLinks href="/Hommes">Hommes</NavLinks>
          <NavLinks href="/Enfants">Enfants</NavLinks>
        </div>
        <div className="flex gap-7">
          <NavLinks href="/A-propos">À propos</NavLinks>
        </div>
      </ul>
    </nav>
  );
}
