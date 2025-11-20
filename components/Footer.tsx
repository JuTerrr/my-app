import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";

type FootLinksProps = {
  href: string;
  children: ReactNode;
};

function FootLinks(props: FootLinksProps) {
  return (
    <li className="hover:bg-j-red transition-colors rounded-md px-4 py-2">
      <Link href={props.href} target="blank">
        {props.children}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-j-teel-dark text-j-beige px-2 py-2 w-full z-50 min-h-20">
      <ul className="container mx-auto flex justify-between">
        <div className="flex gap-7">
          <FootLinks href="https://www.instagram.com">
            <Image
              src="/instagram.svg"
              alt="Instagram Logo"
              width={45}
              height={45}
            />
          </FootLinks>
          <FootLinks href="https://www.tiktok.com">
            <Image
              src="tiktok-logo.svg"
              alt="Logo TikTok"
              height="45"
              width="45"
            />
          </FootLinks>
          <FootLinks href="https://www.youtube.com">
            <Image
              src="youtube.svg"
              alt="Logo Youtube"
              height="45"
              width="45"
            />
          </FootLinks>
          <FootLinks href="https://www.facebook.com">
            <Image
              src="facebook.svg"
              alt="Logo Facebook"
              height="45"
              width="45"
            />
          </FootLinks>
        </div>
      </ul>
    </footer>
  );
}
