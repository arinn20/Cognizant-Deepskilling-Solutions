import React, { Component } from 'react';
// github id: @mukherjeea10
class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: '',
      convertedRupees: '',
      convertedEuro: ''
    };
  }

  handleRupeeChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleEuroChange = (e) => {
    this.setState({ euro: e.target.value });
  };

  convertToEuro = () => {
    const rate = 0.011;
    const euro = (this.state.rupees * rate).toFixed(2);
    this.setState({ convertedEuro: euro });
  };

  convertToRupees = () => {
    const rate = 91; // Example: 1 EUR ≈ ₹91
    const rupees = (this.state.euro * rate).toFixed(2);
    this.setState({ convertedRupees: rupees });
  };

  render() {
    return (
      <div>
        <h2>Currency Convertor</h2>

        <div>
          <input
            type="number"
            placeholder="₹ Rupees to convert"
            value={this.state.rupees}
            onChange={this.handleRupeeChange}
          />
          <button onClick={this.convertToEuro}>Convert to Euro</button>
          <p>Euro: €{this.state.convertedEuro}</p>
        </div>

        <br />

        <div>
          <input
            type="number"
            placeholder="€ Euro to convert"
            value={this.state.euro}
            onChange={this.handleEuroChange}
          />
          <button onClick={this.convertToRupees}>Convert to Rupees</button>
          <p>Rupees: ₹{this.state.convertedRupees}</p>
        </div>
      </div>
    );
  }
}

export default CurrencyConvertor;
