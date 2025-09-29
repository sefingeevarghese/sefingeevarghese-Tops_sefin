import React, { Component } from 'react'

export class Class_img extends Component {
    render() {
        return (
            <div>
                <img 
                    src="https://picsum.photos/200/300" 
                    alt="Random" 
                    style={{ width: '200px', height: '300px' }}
                />
            </div>
        )
    }
}

export default Class_img 