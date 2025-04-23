import React, { Component } from 'react'
import Cprops_card from './Cprops_card'

export class Class_props extends Component {
    render() {
        return (
            <div className='row'>
                <Cprops_card
                    img="https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png"
                    title="Dior J'adore"
                    description= "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication."
                />
                <Cprops_card
                    img="https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png"
                    title= "Dolce Shine Eau de"
                    description= "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent."
                />
                <Cprops_card
                    img="https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png"
                    title= "Annibale Colombo Sofa"
                    description="The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room."
                />
            </div>
        )
    }
}

export default Class_props