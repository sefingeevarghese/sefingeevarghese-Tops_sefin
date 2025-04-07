/*

Props are arguments passed into React components.

Props are passed to components via HTML attributes.
props stands for properties.


function Car(props) {
  return <h2>I am a { props.title }!</h2>;
}

<Car title="SUV Car" />

or

function Car(title) {
  return <h2>I am a { title }!</h2>;
}

<Car title="Car" />

*/



import React from 'react'
import Fprops_card from './Fprops_card'

function Func_props() {
  return (
    <div className='row'>
        <Fprops_card img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" title="Fjallraven " description="Foldsack No. 1 Backpack, Fits 15 Laptops"/>
        <Fprops_card img="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" title="T-Shirts " description="Mens Casual Premium Slim Fit T-Shirts"/>
        <Fprops_card img="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" title="Jacket " description="Mens Cotton Jacket"/>
    </div>
  )
}

export default Func_props