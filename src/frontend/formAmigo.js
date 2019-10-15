import React, {Component} from 'react';

import './formAmigo.css';
import axios from 'axios';

const keys = require("../core/keys.js");

class FormAmigo extends Component {
  constructor (props) {
    super (props);
    
    this.state = {
      _id: this.props._id, 
      nome: this.props.nome, 
      email: this.props.email
    };
    
    this.baseState = this.state;

    this.handleChange = this.handleChange.bind (this);
    this.handleChangeMail = this.handleChangeMail.bind (this);
    this.handleSubmit = this.handleSubmit.bind (this);
    this.gravarAmigo = this.gravarAmigo.bind (this);
    this.cancelarEdicao = this.cancelarEdicao.bind(this);
    this.existeId = this.existeId.bind(this);
    this.dadosInvalidos = this.dadosInvalidos.bind(this);
  }

  handleChange (event) {
    this.setState ({nome: event.target.value});
  }

  handleChangeMail (event) {
    this.setState ({email: event.target.value});
  }

  dadosInvalidos = () => !this.state.nome 
    || !this.state.email 
    || this.state.nome === "" 
    || this.state.email === "";

  handleSubmit (event) {
    if (this.dadosInvalidos()) return
    this.gravarAmigo();
    event.preventDefault();
  }

  cancelarEdicao = () => {
    this.setState(this.baseState)
    this.props.atualizar();
    return false;
  }
  
  existeId = () => this.state._id !== "";

  gravarAmigo(){
    const Amigo = { 
      nome: this.state.nome, 
      email: this.state.email 
    }

    if (this.existeId()) {
        axios
        .patch(`${keys.mainURI}/amigo/${this.state._id}`, Amigo)
        .then(res => {      
          const _amigoSet = res.data;
          this.setState ({_id: _amigoSet._id, nome: _amigoSet.nome, email: _amigoSet.email});
      });
    } 
    else 
    {
        axios
        .post(`${keys.mainURI}/amigo/`, Amigo)
        .then(res => {      
          const _amigoSet = res.data;
          this.setState ({_id: _amigoSet._id, nome: _amigoSet.nome, email: _amigoSet.email});
      });
    }
  }

  render () {
    return (
        <div>
          {this.props.visivel && 
         <form onSubmit={this.handleSubmit}>
          <div>
          <label>
            Nome:
            <input type="text"
              value={this.state.nome}
              onChange={this.handleChange}
            />
          </label>
          </div>
          <div>
          <label>
            e-mail:
            <input type="email"
              value={this.state.email}
              onChange={this.handleChangeMail}
            />
          </label>
          </div>
          <div>
            <input type="submit" value="Gravar" />
            <input type="button" value="Cancelar" onClick={this.cancelarEdicao} />
          </div>
        </form>
      }
      </div>
    );
  }
}

export default FormAmigo;