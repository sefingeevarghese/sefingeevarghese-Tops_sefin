import React, { Component } from 'react'
import Cprops_card from './Cprops_card'

export class Class_props extends Component {
    render() {
        return (
            <div className='row'>
                <Cprops_card img="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" title="Fjallraven " description="Foldsack No. 1 Backpack, Fits 15 Laptops" />
                <Cprops_card img="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" title="T-Shirts " description="Mens Casual Premium Slim Fit T-Shirts" />
                <Cprops_card img="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" title="Jacket " description="Mens Cotton Jacket" />
            </div>
        )
    }
}

export default Class_props