import React, {Component} from 'react'

export default class Image extends Component {
    render(){
        return(
            <div>
                <img alt="Error 409 Pic" src ={this.props.picLocation} />
            </div>
        )
    }
}
