import React from 'react'
import Productos from '../Productos'
import './style.css'

class Carousel extends React.Component {
    render() {
        return (
            <div>
                <h2></h2>
                <div className='carouselContainer'>
                    {this.props.resultados.length > 0 ? (
                        <React.Fragment>
                            {this.props.resultados.map((item,key) => {
                                return <Productos data={item} key={key}/>
                            })}
                        </React.Fragment>
                    ) : (
                        <p>Todavía no hay resultados para este carousel</p>
                    )}
                </div>
            </div>
        )
    }
}

export default Carousel