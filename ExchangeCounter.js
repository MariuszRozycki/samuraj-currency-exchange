const Cash = (props) => (
  <div>{props.title} {props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}</div>
)


class ExchangeCounter extends React.Component {

  currencies = [
    {
      id: 1,
      name: 'dollar',
      ratio: 3.6,
      title: 'Wartosc w dolarach'
    },
    {
      id: 2,
      name: 'euro',
      ratio: 4.1,
      title: 'Wartosc w euro'
    },
    {
      id: 3,
      name: 'pound',
      ratio: 4.7,
      title: 'Wartosc w funtach'
    },
    {
      id: 4,
      name: 'nok',
      ratio: 4.4,
      title: 'Wartosc w NOK'
    }
  ]

  state = {
    amount: ""
  }

  handleChange = e => {
    this.setState({
      amount: e.target.value
    })
  }

  render() {

    const calculators = this.currencies.map(currency => (
      <Cash
        key={currency.id}
        name={currency.name}
        ratio={currency.ratio}
        title={currency.title}
        cash={this.state.amount} />
    ))

    return (
      <div className="app">
        <label>
          <input type="number" value={this.state.amount} onChange={this.handleChange} />
        </label>
        {calculators}
      </div>
    )
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'));