import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Research", path: "/research" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container-narrow py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Khwanchai. All rights reserved.
          </p>
          <nav>
            <ul className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
