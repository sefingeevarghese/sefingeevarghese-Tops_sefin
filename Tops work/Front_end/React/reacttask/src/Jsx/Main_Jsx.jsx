
/*

What is JSX?

JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.


JSX allows us to write HTML elements in JavaScript and place them in 
the DOM without any createElement()  and/or appendChild() methods.

{}

*/


import React from 'react'

import './mycss.css';

function Main_Jsx() {

    var name = "Raj";

    const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

    const myDiv = (
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Cherries</li>
        </ul>
    )


    var myStyle = { color: "red", textDecoration: 'uppercase', backgroundColor: 'pink' }


    const x = 50;
    let text = "Goodbye";
    if (x < 10) {
        text = "Hello";
    }



    return (
        <div>
            <h1>Hi i am jsx</h1>
            <h1>{name}</h1>
            {myElement}
            {5 + 5}
            {myDiv}
            <hr />
            {
                // single comment
                /*
                     multiline 
                     comment
                */
            }

            <hr />

            <h1 style={{ color: "red", backgroundColor: 'yellow' }}>Hi i am css</h1>

            <h1 style={myStyle}>Hi i am css with variable</h1>

            <h1 className='box'>Hi i am external css</h1>
            <h1 class='box'>Hi i am external css</h1>

            <hr />

            <h1>{text}</h1>

            <hr />

            <div>
                <h1 style={{ color: 'blue', backgroundColor: 'yellow' }}>HI GOOD MORNING</h1>
                <div className="spinner-border" />
            </div>

        </div>
    )
}

export default Main_Jsx
