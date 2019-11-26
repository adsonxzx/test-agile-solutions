import React, { Component } from 'react';
import Chart from 'react-apexcharts';

export default class ChartBar extends Component {

  render() {
    const { vendas } = this.props

    let options;
    let series;

    if (vendas) {

      options = {
        xaxis: {
          title: {
            text: 'Meses'
          },
          categories: vendas.map(item => item.mes)
        },
        yaxis: {
          title: {
            text: 'Vendas'
          }
        }
      }

      series = [
        {
          name: "Vendas",
          data: vendas.map(item => item.numero)
        }
      ]

    }

    return (
      vendas ? (
        <Chart
          options={options}
          series={series}
          type="bar"
          height="400"
        />
      ) : null

    )
  }
}
