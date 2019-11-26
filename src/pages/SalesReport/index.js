import React, { Component } from 'react';
import ChartBar from '../../components/ChartBar';
import data from '../../data.json';

import './style.css';

export default class SalesReport extends Component {

  state = {
    categoria: '',
    produto: '',
    marca: '',
    listaCategoria: [],
    listaProduto: [],
    listaMarca: [],
    vendas: []
  }

  componentDidMount() {
    const categoria = data.map(item => item.categoria);
    this.setState({ listaCategoria: categoria });
  }

  handleSelectCategoria = (e) => {
    const categoria = e.target.value;
    const { produtos } = data.find(item => item.categoria === categoria);
    this.setState({ categoria, listaProduto: produtos });
  }

  handleSelectProduto = (e) => {
    const produto = e.target.value;
    const { marcas } = this.state.listaProduto.find(item => item.produto === produto);
    this.setState({ produto, listaMarca: marcas });
  }

  handleSelectMarca = (e) => {
    const marca = e.target.value;
    const { vendas } = this.state.listaMarca.find(item => item.marca === marca);
    this.setState({ vendas, marca });
  }

  render() {
    const { listaCategoria, listaProduto, listaMarca, vendas, marca, produto } = this.state;

    return (
      <>
        {/* Report Select */}
        <div className="report-select">
          <form>
            {/* Selecao de Categoria */}
            <div className="form-group">
              <label htmlFor="categoria">Categoria: </label>
              <select className="form-control" id="categoria" onChange={this.handleSelectCategoria}>
                <option selected disabled>Selecione uma categoria</option>
                {
                  listaCategoria.length > 0 ? (
                    listaCategoria.map(categoria => {
                      return <option key={categoria} value={categoria}> {categoria} </option>
                    })
                  ) : null
                }
              </select>
            </div>

            {/* Selecao de Produto */}
            <div className="form-group">
              <label htmlFor="produto">Produto: </label>
              <select className="form-control" id="produto" onChange={this.handleSelectProduto}>
                {listaProduto.length > 0 ? <option selected disabled>Selecione um produto</option> : null}
                {
                  listaProduto.length > 0 ? (
                    listaProduto.map(item => {
                      return <option key={item.id} value={item.produto}> {item.produto} </option>
                    })
                  ) : <option>Selecione uma categoria</option>
                }
              </select>
            </div>

            {/* Seleciona Marca */}
            <div className="form-group">
              <label htmlFor="marca">Marca: </label>
              <select className="form-control" id="marca" onChange={this.handleSelectMarca}>
                {listaMarca.length > 0 ? <option selected disabled>Selecione uma marca</option> : null}
                {
                  listaMarca.length > 0 ? (
                    listaMarca.map(item => {
                      return <option key={item.id} value={item.marca}> {item.marca} </option>
                    })
                  ) : <option>Selecione um produto</option>
                }

              </select>
            </div>
          </form>
        </div>

        {/* Report Title */}
        <div className="report-title">
          <h3>Vendas por mes</h3>
          {produto ? <span>Produto: {produto}</span> : null}
          {marca ?  <span>Marca: {marca}</span> : null}         
        </div>

        {/* Chart Bar */}
        <div className="report-char">
          <ChartBar
            vendas={vendas}
          />
        </div>

      </>
    )
  }
}