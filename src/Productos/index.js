import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

class Productos extends React.Component {
    render() {
        return (       
                <Link style={{textDecoration:'none'}} to={`/producto/${this.props.data.id}`}>
                    <div className='productsContainer'>
                        <div className='imgContainerCarousel'><img className='imgCarousel' src={this.props.data.thumbnail}/></div>
                        <hr/>
                        <div className='priceContainer'><span>${this.props.data.price}</span></div>
                        <div className='infoContainer'><span>{this.props.data.title}</span></div>
                    </div>
                </Link>

        )
    }
}

export default Productos
