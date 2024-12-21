"use client";
import Link from 'next/link'
import { useEffect, useState } from 'react'


export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
    document.documentElement.classList.toggle('dark', !isDarkMode)
  }

  //persisting
  useEffect(() => {
    const storedPreference = localStorage.getItem('darkMode') === 'true'
    setIsDarkMode(storedPreference)
    if (storedPreference){
      document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', String(isDarkMode))
  }, [isDarkMode])

  
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between px-4 py-2 bg-white-100 dark:bg-white-900"
          id="nav"
        >
          <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 name">Ayaan Rahman</h1>
          <div className="flex flex-row space-x-4">
            <Link href="/" className="nav-link">
              About
            </Link>
            <Link href="/projects" className="nav-link">
              Projects
            </Link>
            <Link href="/resume.pdf" className="nav-link">
              Resume
            </Link>
            <Link href="/transcript.pdf" className="nav-link">
              Transcript
            </Link>

            <button onClick={toggleDarkMode} className="ml-4 px-2 clicker py-1 text-sm font-semibold dark:bg-gray-800 rounded">
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </nav>
      </div>
    </aside>
  )
}

