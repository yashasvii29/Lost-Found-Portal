import React from 'react'
import { Link } from 'react-router-dom'
import logoimg from '../../assets/lost.png'

function Navbar() {
    return (
        <nav className='flex justify-around bg-green-700 min-h-20 items-center text-2xl'>
            <div className="flex items-center space-x-2">
                <img
                    src={logoimg}
                    className="h-14"
                    alt="Logo"
                />
                <h2 className='font-bold text-4xl text-white'>Lost and Found Portal</h2>
        </div>
            <ul className='flex gap-10 text-white text-xl '>
                <Link to='/'>All Items</Link>
                <Link to='/new'>post Item</Link>
                <Link to='/login'>Login</Link>
                {/* <Link to='/register'>Register</Link> */}

            </ul>
        </nav>
    )
}

export default Navbar