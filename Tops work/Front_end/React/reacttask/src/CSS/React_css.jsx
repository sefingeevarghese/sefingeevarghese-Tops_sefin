
import React from 'react'

import './mystyle1.css';
import './mystyle2.css';

function React_css() {

 var mystyle={color: 'pink', backgroundColor: 'red'}

  return (
    <div>
       <h1 style={{color: 'red', backgroundColor: 'yellow'}}>Hi i am inline css</h1>

       <hr />

       <h1 style={mystyle}>Hi i am var store css</h1>

       <hr />

       <div className='item1'>
            hello box 1
       </div>
       
       <hr />
       
       <div className='item1'>
            hello box 2
       </div>
       
       
    </div>
  )
}

export default React_css
