/*



*/





import React from 'react'

//import './normal.css';   import normal css


// IMPORT MODULE CSS 

import A from './mystyle1.module.css';
import B from './mystyle2.module.css';

function Module_css() {
  return (
    <div>
        <h1>Module_css</h1>
        <hr />

        <div className={A.bigblue}>
            Hi i mystyle 1
        </div>    

        <div className={B.bigblue}>
            Hi i mystyle 2
        </div>  

    </div>
  )
}

export default Module_css