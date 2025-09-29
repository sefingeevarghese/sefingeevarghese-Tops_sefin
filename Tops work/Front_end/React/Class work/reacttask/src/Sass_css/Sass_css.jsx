import React from 'react'

import './mySass.scss';

function Sass_css() {
    return (
        <div>
            <div className='sassbox'>Hello SASS CSS</div>

            <hr />

            <nav>
                <ul>
                    <Link>
                        <a href="">Home</a>
                    </li>
                    <Link>
                        <a href="">About</a>
                    </li>
                    <Link>
                        <a href="">Contact</a>
                    </li>
                    <Link>
                        <a href="">Blog</a>
                    </li>
                </ul>
            </nav>

            <hr />

            <h2>Hello i am nested SASS css</h2>

            <hr />

            <button className='button-basic'>Baisc</button>
            <button className='red'>Red</button>
            <button className='blue'>blue</button>
            <button className='yellow'>yellow</button>
            <button className='orange'>orange</button>

        </div>
    )
}

export default Sass_css