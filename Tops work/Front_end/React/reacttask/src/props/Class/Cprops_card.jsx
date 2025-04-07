/*

Props
Another way of handling component properties is by using props.

Props are like function arguments, and you send them into the component as attribut


class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}


*/



import React, { Component } from 'react'

export class Cprops_card extends Component {
    
    render() {
        return (
            <div className='col-md-4 mt-2'>
                <div className="card p-3" style={{ width: '100%' }}>
                    <img className="card-img-top" src={this.props.img} alt="Card image" style={{ width: '100%', height: '250px' }} />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.title} </h4>
                        <p className="card-text">{this.props.description}</p>
                        <a href="#" className="btn btn-primary">View Product</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cprops_card