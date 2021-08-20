import React from 'react'
import './style.css'

class Button extends React.Component {
    render() {
        return(
            <button className='buttonStyle' style={{backgroundColor : this.props.color, color: this.props.textColor}}>{this.props.title}</button>
        )
    }
}

export default Button