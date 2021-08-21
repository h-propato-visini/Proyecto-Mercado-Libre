import React from 'react'
import './style.css'

class Autocomplete extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            value : ''
        }
    }

    handleChange(e) {
        this.setState ({
            value : e.target.value
        })
    }

    async handleClick() {
        const results = await this.search(this.state.value)

        this.props.handleSearch(results.results)
    }

    async handlePress(e) {
        if (e.key == 'Enter') {
            const results = await this.search(this.state.value)

            this.props.handleSearch(results.results)
        }
    }

    async search(value) {
        const result = await fetch (`https://api.mercadolibre.com/sites/MLA/search?q=${this.state.value}`)
        return await result.json()
    }

    render(){
        return (
            <div className='searcher'>
                <input className='searchInput' type='text' placeholder='Buscar productos, marcas y mas...' onChange={e => this.handleChange(e)} onKeyPress={e => this.handlePress(e)} handleSearch = {this.handleSearch}></input>
                <button className='searchButton' onClick={()=> this.handleClick()}><img className= 'imgSearch' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwF6-xgFDFGzP3ywCU54Qd0Y6UVbpxWiNe1A&usqp=CAU'/></button>
            </div>
        )
    }
}

export default Autocomplete


