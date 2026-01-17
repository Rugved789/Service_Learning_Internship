
import { Link } from "react-router-dom";

const NavBar = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/work", label: "Our Work" },
    { href: "/donate", label: "Donate" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <section className="px-20 py-5">
      <nav>
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-30">
              <img src="/logo.png" alt="Logo" />
            </div>
          </Link>

          {/* Desktop Version*/}
          <div className="hidden md:flex gap-8">
            {navLinks.map((links, key) => {
              return (
                <Link key={key} to={links.href} className="text-sm font-medium text-muted-foreground">
                  {links.label}
                </Link>
              );
            })}
          </div>

          <div></div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
