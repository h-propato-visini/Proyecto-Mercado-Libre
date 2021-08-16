import React from 'react'

class Productos extends React.Component {
    render() {
        return (
            
                <div className='productContainer'>
                <div className='imgContainerCarousel'><img className='imgCarousel' src={this.props.data.thumbnail}/></div>
                <hr/>
                <div><span>{this.props.data.price}</span></div>
                <div><span>{this.props.data.title}</span></div>
                </div>

        )
    }
}

export default Productos
