import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Bem vindo ao SVL</h1>

            <nav>
                <Link to='/about'>About</Link>
                <Link to='/user'>User</Link>
            </nav>


        </div>


    )
}
