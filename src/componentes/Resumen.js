import React, {Component} from 'react';
import { primeraMayuscula } from '../helper';


 class Resumen extends Component {

    mostrarResumen = () =>{
  //utilizando destrucion
  const {marca, year, plan } = this.props.datos;
    //si no hay nada en los props no salte
    if(!marca || !year || !plan) return null
    
    return (
        <div className="resumen">
            <h2> Resumen de cotizacion </h2>
            <li> Marca: { primeraMayuscula(marca) }</li>
            <li> Plan: { primeraMayuscula(plan)}</li>
            <li> Año: { primeraMayuscula(year)}</li>

        </div>
        )

    }

    render() {
      
        return (
            <div>
                {this.mostrarResumen()}
               
            </div>
        );
    }
}


export default Resumen;