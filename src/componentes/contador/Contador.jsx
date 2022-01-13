import "./Contador.css"
import React, { Component } from "react";
import Display from "./Display";
import PassForm from "./PassForm";
import Botoes from "./Botoes";

export default class Contador extends Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0,
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    /*
        constructor(props) {
            super(props)
            this.state = {
                passo: props.passo,
                valor: 0
            }
        }
    */
    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <PassForm passo={this.state.passo} 
                onPassoChange={this.mudarPasso}></PassForm>

                <Display valor={this.state.valor}></Display>

                <Botoes onInc={this.inc} onDec={this.dec}></Botoes>

            </div>

        );
    }
}