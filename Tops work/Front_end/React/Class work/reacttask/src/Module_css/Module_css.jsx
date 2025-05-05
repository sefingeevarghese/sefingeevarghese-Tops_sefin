import React from 'react'

import A from './mystyle1.module.css';
import B from './mystyle2.module.css';

function Module_css() {
  return (
    <div>
        <h1>Module_css</h1>
        <hr />

        <div className={A.box}>
            Hi i mystyle 1
        </div>    

        <div className={B.box}>
            Hi i mystyle 2
        </div>  

    </div>
  )
}

export default Module_css