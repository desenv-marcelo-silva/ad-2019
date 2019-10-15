import React, {Component} from 'react';
import axios from 'axios';

const keys = require ('../core/keys.js');

export default class BotaoSorteio extends Component {
  constructor (props) {
    super (props);
    this.sortearAmigoSecreto = this.sortearAmigoSecreto.bind(this);
  }

  sortearAmigoSecreto() {
    axios.get(`${keys.mainURI}/sorteio`).then (res => {
      if (res.erro) {
        alert('Houve algum problema. Não foi possível realizar o sorteio.')
        return false;
      }
      alert('O sorteio foi realizado com sucesso.');
   });
  }

 render () {
    return (
      <div>
        <button onClick={this.sortearAmigoSecreto}>Realizar sorteio e enviar e-mail</button>
      </div>
    );
  }
}
