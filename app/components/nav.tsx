import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/projects': {
    name: 'projects',
  },
  '/resume': {
    name: 'resume',
  },
  '/transcript': {
    name: 'transcript',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between px-4 py-2 bg-white-100 dark:bg-white-900"
          id="nav"
        >
          <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Ayaan Rahman</h1>
          <div className="flex flex-row space-x-4">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/projects" className="nav-link">
              Projects
            </Link>
            <Link href="/resume" className="nav-link">
              Resume
            </Link>
            <Link href="/transcript" className="nav-link">
              Transcript
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  )
}

