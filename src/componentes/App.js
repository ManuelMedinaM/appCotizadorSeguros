import React, {Component} from 'react';
import Header from './Header';
import Formulario from './Formulario'
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper';
import Resumen from './Resumen';
import Resultado from './Resultado'
class App extends Component {

  state = {
    resultado: '',
    datos : {}

  }

  cotizarSeguro = (datos) =>{
    const {marca, plan, year} = datos;

    // base de 2000
    let resultado = 2000;

    //obtener la diferencia de año y por cada año restar
    //el 3%
    const diferencia = obtenerDiferenciaAnio(year);

    resultado -= ((diferencia*3) * resultado)/ 100;

    //americano =15%, asiatico 5% y europeo 30% de incremente al valor actual
    resultado = calcularMarca(marca) * resultado;

    //el plan basico 20% completa 50%

    let incremeoPlan= obtenerPlan(plan);

    resultado = parseFloat(incremeoPlan*resultado).toFixed(2);

    //crear objeto para el resumen
      const datosAuto={
        marca : marca,
        plan : plan,
        year : year

      }

    this. setState({
      resultado :  resultado,
      datos : datosAuto
    })
   // ya tenemos toda la informacion
  }


  render(){  
    return (
      <div className="contenedor">


        <Header
          titulo = 'Cotizador de Seguro de Auto'
        />
       

        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />

          <Resumen
            datos = {this.state.datos}
           
          />
          
          <Resultado
           resultado= {this.state.resultado}
          
                />

        </div>


      </div>
    );
  }
}

export default App;
