import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="mx-auto max-w-7xl py-1">
      <div className="flex items-center justify-around">
        <Link href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/6/67/Medium_logo_%282020%29.png"
            alt=""
            className="w-44 cursor-pointer  object-contain"
          />
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3 className="cursor-pointer font-bold">About</h3>
          <h3 className="cursor-pointer font-bold">Contact</h3>
          <h3 className="cursor-pointer rounded-full bg-green-700 px-4 py-1 font-bold text-white">
            Follow
          </h3>
        </div>
        <div className="flex items-center space-x-5">
          <button className="font-bold text-green-600">Sign in</button>
          <button className="rounded-full border border-green-600 px-4 py-1 font-bold text-green-600">
            Get started
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
