'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'

export default function Nav() {
  const path = usePathname()

  const links = [
    {
      path: '/about',
      text: 'About',
    },
    {
      path: '/thought',
      text: 'Thoughts',
    },
    {
      path: '/learning',
      text: 'Learning',
    },
  ]

  return (
    <div className="fixed top-5 left-0 z-50 w-full">
      <nav className="text-main-foreground border-border shadow-shadow rounded-base bg-main dark:bg-[#1c0252] font-base mx-auto flex w-[750px] max-w-[calc(100%-20px)] items-center border-2 p-2.5 px-3 sm:px-5 text-sm sm:text-base">
        <div className="font-heading text-lg w-[120px] hidden sm:block whitespace-nowrap">
          <span>Nufar Galin</span>
        </div>
        <div className="flex flex-1 justify-center gap-1 sm:gap-8">
          {links.map((link) => {
            return (
              <Link
                key={link.path}
                className={clsx(
                  'hover:border-border rounded-base border-2 px-2 sm:px-3 py-1.5 transition-colors',
                  path === link.path ? 'border-border' : 'border-transparent',
                  'text-foreground',
                  'hover:translate-x-boxShadowX hover:translate-y-boxShadowY',
                  'hover:shadow-none'
                )}
                href={link.path}
              >
                {link.text}
              </Link>
            )
          })}
        </div>
        <div className="w-[40px] sm:w-[120px] flex justify-end">
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  )
}
