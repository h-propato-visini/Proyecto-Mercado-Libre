import React from 'react'
import Carousel from '../Carousel'
import CarouselCat from '../CarouselCat'
import './style.css'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            products: [],
            items: [],
            autos: []
        }
    }

    handleChange(e) {
        this.setState ({
            value : e.target.value
        })

        console.log(this.state.value)
    }

    async handleClick() {
        const response = await fetch (`https://api.mercadolibre.com/sites/MLA/search?q=${this.state.value}`)
        const responseJson = await response.json()
        this.setState({
            products: responseJson.results
        })
        console.log(this.state.products)
    }

    async componentDidMount() {
        const result = await fetch ('https://api.mercadolibre.com/sites/MLA/search?category=MLA1144&limit=4')
        const resultJson = await result.json()

        this.setState({
            items: resultJson.results
        })
    }

    render() {
        return (
            <React.Fragment>
            <header>
                <img className='imgHeader' src='https://img.mundopmmi.com/files/base/pmmi/mundo/image/2021/04/mercado_libre_logo.606e0981e5e08.png?auto=format%2Ccompress&q=70&w=700'/>
                <div className='searcher'>
                    <input className='searchInput' type='text' onChange={e => this.handleChange(e)}></input>
                    <button className='searchButton' onClick={()=> this.handleClick()}><img className= 'imgSearch' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwF6-xgFDFGzP3ywCU54Qd0Y6UVbpxWiNe1A&usqp=CAU'/></button>
                </div>
                <div className='pagoContainer'>
                    <img className='imgPago' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0CIQwsHsz2GuYcF5RaLkP2rM0Lq_cPPteQ&usqp=CAU'/>
                    <span>Comprá en 12 cuotas sin tarjeta</span>
                </div>
            </header>
            <div className='mainContainerCarousel'>
                <Carousel resultados = {this.state.products} />
            </div>
            <div>
                <CarouselCat videojuegos = {this.state.items} />
            </div>
            </React.Fragment>
        )
    }
}

export default Home