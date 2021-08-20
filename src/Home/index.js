import React from 'react'
import Carousel from '../Carousel'
import Header from '../Header'
import './style.css'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            games: [],
            autos: [],
            comidas: []
        }
    }

    async searchProduct(data) {
        const response = await fetch (`https://api.mercadolibre.com/sites/MLA/search?q=${data}&limit=6`)
        const responseJson = await response.json()
        // this.setState({
        //     products: responseJson.results
        // })
        console.log(responseJson.results)
    }

    async componentDidMount() {
        const result = await fetch ('https://api.mercadolibre.com/sites/MLA/search?category=MLA1144&limit=4')
        const result2 = await fetch ('https://api.mercadolibre.com/sites/MLA/search?category=MLA5725&limit=4')
        const result3 = await fetch ('https://api.mercadolibre.com/sites/MLA/search?category=MLA1403&limit=4')
        const resultJson = await result.json()
        const resultJson2 = await result2.json()
        const resultJson3 = await result3.json()

        this.setState({
            games: resultJson.results,
            autos: resultJson2.results,
            comidas: resultJson3.results
        })
    }

    handleCallback(results) {
        this.setState ({
            products: results
        })
    }

    render() {
        return (
            <React.Fragment>
            <Header handleCallback={results => this.handleCallback(results)}/>
            <div className='mainContainerCarousel'>
                <Carousel title='Busquedas' resultados = {this.state.products} />
            </div>
            <div className='mainContainerCarousel'>
                <Carousel title ='Videojuegos' resultados = {this.state.games} />
            </div>
            <div className='mainContainerCarousel'>
                <Carousel title ='Automóviles y repuestos' resultados = {this.state.autos} />
            </div>
            <div className='mainContainerCarousel'>
                <Carousel title ='Comidas y Bebidas' resultados = {this.state.comidas} />
            </div>
            </React.Fragment>
        )
    }
}

export default Home