import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './listaAmigo.css';
import FormAmigo from './formAmigo';

const keys = require ('../core/keys.js');

export default class ListaAmigo extends Component {
  constructor (props) {
    super (props);

    this.apagarAmigo = this.apagarAmigo.bind (this);
    this.adicionarAmigo = this.adicionarAmigo.bind (this);
    this.editarAmigo = this.editarAmigo.bind (this);
    this.removerAmigo = this.removerAmigo.bind(this);
    this.atualizarLista = this.atualizarLista.bind(this);

    this.state = {
      amigoSet: [],
      atualizar: false
    };
  }

  componentDidMount () {
    axios.get (`${keys.mainURI}/amigos`).then (res => {
      const amigoSet = res.data;
      this.setState ({amigoSet});
    });
  }
  
  atualizarLista = () => this.setState({atualizar: true});

  removerAmigo = (amigoId) => this.state.amigoSet.filter(elem => {return elem._id !== amigoId})

  apagarAmigo (amigoId) {
    axios.delete (`${keys.mainURI}/amigo/${amigoId}`).then (res => {
       const amigoSet = this.removerAmigo(amigoId);
       this.setState ({amigoSet});
    });
  }

  adicionarAmigo () {
    ReactDOM.render (
      <FormAmigo _id={''} email={''} nome={''} visivel={true} atualizar={this.atualizarLista} />,
      document.getElementById ('toFormAmigo')
    );
  }

  editarAmigo (amigoId) {
    const Amigo = this.state.amigoSet.find(item => {
      return item._id == amigoId;
    });
    
    ReactDOM.render (
      <FormAmigo
        _id={amigoId}
        email={Amigo.email}
        nome={Amigo.nome}
        visivel={true}
        atualizar={this.atualizarLista}
      />,
      document.getElementById ('toFormAmigo')
    );
  }

  render () {
    return (
      <div>
        <div id="toFormAmigo"></div>
        <div id="toListAmigo">
          <div>
            <button onClick={this.adicionarAmigo}>Adicionar</button>
          </div>
          {this.state.amigoSet.length > 0 &&
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>e-mail</th>
                  <th colspan="2">Opções</th>
                </tr>
              </thead>
              <tbody>
                {this.state.amigoSet.map (amigo => (
                  <tr key={amigo._id}>
                    <td>{amigo.nome}</td>
                    <td>{amigo.email}</td>
                    <td>
                      <button onClick={this.editarAmigo.bind(this, amigo._id)}>Alterar</button>
                    </td>
                    <td>
                      <button onClick={this.apagarAmigo.bind(this, amigo._id)}>Apagar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>}
        </div>
      </div>
    );
  }
}
