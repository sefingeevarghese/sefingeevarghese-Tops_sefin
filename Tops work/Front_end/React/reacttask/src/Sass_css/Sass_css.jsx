
/*
Sass stands for Syntactically Awesome Stylesheet
Sass is an extension to CSS
Sass is a CSS pre-processor
Sass is completely compatible with all versions of CSS
Sass reduces repetition of CSS and therefore saves time
Sass was designed by Hampton Catlin and developed by Natalie Weizenbaum in 2006
Sass is free to download and use

npm i sass 

Stylesheets are getting larger, more complex, and harder to maintain. 
This is where a CSS pre-processor can help.

Sass lets you use features that do not exist in CSS, like 

variables, 
nested rules, 
mixins, 
imports, 
inheritance, 
built-in functions, 
and other stuff.

/* define variables for the primary colors  $primary_1: #a2b9bc; */
/* comment */





import React from 'react'

import './mySass.scss';

function Sass_css() {
    return (
        <div>
            <div className='sassbox'>Hello SASS CSS</div>

            <hr />

            <nav>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
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