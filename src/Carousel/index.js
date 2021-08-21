import React from 'react'
import Productos from '../Productos'
import './style.css'
import Slider from 'react-slick'

class Carousel extends React.Component {
    render() {
        const settings = {
            slidesToScroll: 4,
            slidesToShow: 4,
        };

        return (
            <div className='carouselMainContainer'>
                <h2>{this.props.title}</h2>
                <div className='carouselContainer'>
                    {this.props.resultados.length > 0 ? (
                        <Slider {...settings}>
                            {this.props.resultados.map((item,key) => {
                                return <Productos data={item} key={key}/>
                            })}
                        </Slider>
                    ) : (
                        <p>Todavía no hay resultados para este carousel</p>
                    )}
                </div>
            </div>
        )
    }
}

export default Carousel