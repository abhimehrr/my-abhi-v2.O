import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectViewFooter() {
    return (
        <div className="bg-slate-800 px-10 py-10 rounded-t-lg text-lg flex items-center justify-center gap-4">
            <Link className='flex items-center font-semibold group gap-2 cursor-pointer' target='_blank' to='https://instagram.com/abhii.js'>
                <span className='text-gray-300 group-hover:text-purple-500 transition-all'>
                    &copy; {new Date().getFullYear()}
                </span>
                <span className='text-purple-500 group-hover:text-gray-300 transition-all'>
                    Abhishek
                </span>
            </Link>
        </div>
    )
}
