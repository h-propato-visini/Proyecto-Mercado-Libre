import React from 'react'
import './style.css'
import Button from '../Button'
import Header from '../Header'

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
        return (            
        <React.Fragment>
            <Header/>
                <div className='fichaMainContainer'>
                    <div className='imgContainerFicha'><img className='imgFicha' src={this.state.result.thumbnail}/></div>
                    <div className='infoFicha'>
                        <span className='ventas'>Nuevo - 1893 artículos vendidos</span>
                        <span className='text'>{this.state.result.title}</span>
                        <span className='price'>${this.state.result.price}</span>
                        <div className='quantity'>
                            <label>Cantidad:</label>
                            <select>
                                <option>1 unidad</option>
                                <option>2 unidades</option>
                                <option>3 unidades</option>
                                <option>Otra Cantidad</option>
                            </select>
                        </div>
                        <div className='buttonContainer'>
                            <Button title='Comprar' color='blue' textColor='white'/>
                            <Button title='Añadir al carrito' color='white' textColor='blue'/>
                        </div>
                        {/* <div className='buttons'>
                            <button className='button1'>Comprar Ahora</button>    
                            <button className='button2'>Agregar al carrito</button>    
                        </div> */}
                        <span>Compra protegida, recibí el producto que esperabas o te devolvemos el dinero</span> 
                        <span>Mercado Puntos, suma 590 puntos</span> 
                    </div>
                </div>
        </React.Fragment>
        )
    }
}

export default Ficha