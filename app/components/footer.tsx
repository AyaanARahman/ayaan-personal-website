function ArrowIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayaanrahman7972/' },
  { label: 'GitHub', href: 'https://github.com/AyaanARahman' },
  { label: 'Email', href: 'mailto:ayaanrah99@gmail.com' },
  {
    label: 'Source of this site',
    href: 'https://github.com/AyaanARahman/ayaan-personal-website',
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t divider pt-6 pb-10">
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              className="footer-link flex items-center gap-1.5 text-sm"
              rel="noopener noreferrer"
              target="_blank"
              href={link.href}
            >
              <ArrowIcon />
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-xs text-subtle">
        © {new Date().getFullYear()} Ayaan Rahman · MIT Licensed
      </p>
    </footer>
  );
}
