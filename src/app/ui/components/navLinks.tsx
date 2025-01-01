import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Sunglasses", href: "/glasses/sunglasses" },
  { name: "Sportsglasses", href: "/glasses/sportsglasses" },
  { name: "Contact", href: "/glasses/contact" },
];
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            className={pathname === link.href ? "text-purple-600" : ""}
            key={link.name}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
