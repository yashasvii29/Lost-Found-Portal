import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='flex justify-around bg-green-700 min-h-16 items-center text-2xl'>
            <h2 className='font-bold text-4xl text-white'>Lost and Found Portal</h2>
            <ul className='flex gap-10 text-white text-xl '>
                <Link to='/'>All Items</Link>
                <Link to='/new'>post Item</Link>

            </ul>
        </nav>
    )
}

export default Navbar