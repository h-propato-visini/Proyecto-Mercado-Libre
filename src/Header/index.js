import React from 'react'
import './style.css'
import Autocomplete from '../Autocomplete'

class Header extends React.Component {
    handleSearch(results) {
        this.props.handleCallback(results)
    }

    render() {
        return(
            <header>
            <img className='imgHeader' src='https://img.mundopmmi.com/files/base/pmmi/mundo/image/2021/04/mercado_libre_logo.606e0981e5e08.png?auto=format%2Ccompress&q=70&w=700'/>
            <Autocomplete handleSearch={results => this.handleSearch(results)}/>
            <div className='pagoContainer'>
                <img className='imgPago' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0CIQwsHsz2GuYcF5RaLkP2rM0Lq_cPPteQ&usqp=CAU'/>
                <span>Comprá en 12 cuotas sin tarjeta</span>
            </div>
        </header>
        )
    }
}

export default Header