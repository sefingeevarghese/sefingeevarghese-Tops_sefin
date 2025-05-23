import React, { Component } from 'react'
import Class_img from './Class_img';

export class Main_classstate extends Component {
    constructor() {
        super();
        this.state = {
            name: "sefin",
            number: 1,
            isImage: true
        }
    }

    plus = () => {
        this.setState({ number: this.state.number + 1 });
    }
    minus = () => {
        this.setState({ number: this.state.number - 1 });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ name: "Akash" })}>Change</button>
                <h1>Hi my name is : {this.state.name}</h1>

                <hr />

                <button onClick={this.plus}>+</button>
                <h1>{this.state.number}</h1>
                <button onClick={this.minus}>-</button>

                <hr />
                <button onClick={()=>this.setState({isImage:false})}>Hide</button>
                <button onClick={()=>this.setState({isImage:true})}>Show</button>
                <button onClick={()=>this.setState({isImage:!this.state.isImage})}>Hide/Show</button>
                {
                    this.state.isImage ? <Class_img /> : null
                }
            </div>
        )
    }
}

export default Main_classstate 