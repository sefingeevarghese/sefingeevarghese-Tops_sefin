import React, { Component } from 'react'

export class Cprops_card extends Component {
    render() {
        const { img, title, description } = this.props
        return (
            <div className='col-md-4 mt-2'>
                <div className="card p-3" style={{ width: '100%' }}>
                    <img className="card-img-top" src={img} alt="Card image" style={{ width: '100%', height: '250px' }} />
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{description}</p>
                        <a href="#" className="btn btn-primary">View Product</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cprops_card