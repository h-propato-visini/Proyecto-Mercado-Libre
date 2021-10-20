import React from 'react'
import './style.scss'
import Button from '../Button'
import Header from '../Header'
import Slider from 'react-slick'

class Ficha extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            result: {}
        }
    }

    async componentDidMount() {
        const result = await fetch(`https://api.mercadolibre.com/items/${this.props.match.params.id}`)
        const resultJson = await result.json()

        this.setState({
            result: resultJson
        })
    }
    
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            className: 'carousel'
        }

        console.log(this.state.result)
        const { title, price, pictures, initial_quantity } = this.state.result
        return (          
        <React.Fragment>
            <Header show='false'/>
            <div className='fichaMainContainer'>
                <div className='imgContainerFicha'>
                    <Slider {...settings}>
                        {pictures && pictures.map((item, key)=>{                                return(
                                <img className='imgFicha' src={item.url} key={key}/> 
                            )
                        })}
                    </Slider>
                </div>
                <div className='infoFicha'>
                    <span className='ventas'>Nuevo - 1893 artículos vendidos</span>
                    <span className='text'>{title}</span>
                    <span className='price'>${price}</span>
                    <div className='quantity'>
                        <label>Cantidad:</label>
                        <select className='select-quantity'>
                            <option>1 unidad</option>
                            <option>2 unidades</option>
                            <option>3 unidades</option>
                            <option>Otra Cantidad</option>
                        </select>
                        <span className='disponibility'>({initial_quantity} disponibles)</span>
                    </div>
                    <div className='buttonContainer'>
                        <Button title='Comprar' color='blue' textColor='white'/>
                        <Button title='Añadir al carrito' color='white' textColor='blue'/>
                    </div>
                        {/* <div className='buttons'>
                            <button className='button1'>Comprar Ahora</button>    
                            <button className='button2'>Agregar al carrito</button>    
                        </div> */}
                    <div className='info-Container'>
                        <span className='mainInfo'>Compra protegida</span>
                        <span className='info'>, recibí el producto que esperabas o te devolvemos el dinero</span> 
                    </div>
                    <div className='info-Container'>
                        <span className='mainInfo'>Mercado Puntos</span>
                        <span className='info'>, suma 590 puntos</span> 
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default Ficha