import React, { Component } from "react";
import "./estilo.css";
import Cronometro from "../Cronometro/Cronometro";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";
import Agenda from '../Date/demo'

class CardNota extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>

          <DeleteSVG onClick={this.apagar.bind(this)} />
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
        <Cronometro />
        <Agenda/>
      </section>
    );
  }
}

export default CardNota;
