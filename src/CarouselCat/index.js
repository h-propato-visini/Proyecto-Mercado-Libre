import React from 'react'
import Productos from '../Productos'

class CarouselCat extends React.Component {
    render() {
        return (
            <div className='carouselCat-main-container'>
                <h2>{this.props.title}</h2>
                <div className='carouselCat-container'>
                    {this.props.videojuegos.length > 0 ? (
                        <React.Fragment>
                            {this.props.videojuegos.map((item, key) => {
                                return <Productos data ={item} key ={key} />
                            })}
                        </React.Fragment>
                    ) : (
                        <p>No hay resultados para este carousel</p>
                    )}
                </div>
            </div>
        )
    }
}

export default CarouselCat