import React from 'react'
import { Link } from '@inertiajs/react'

export default function Layout({children}) {
  return (
    <div>
        <header>
            <nav>

                   <Link className='nav-link' href="/posts">Home</Link>
                    <Link className='nav-link' href="/posts/create">Create</Link>

            </nav>
        </header>
        <main>
            {children}
        </main>
    </div>
  )
}
