import React, { Component } from 'react'
import styles from './CurrencyConverter.module.css'

export class CurrencyConverter extends Component {
    constructor() {
        super();
        this.state = {
            amount: 0,
            fromCurrency: 'USD',
            toCurrency: 'EUR',
            convertedAmount: 0,
            exchangeRates: {
                USD: 1,
                EUR: 0.92,
                GBP: 0.79,
                INR: 83.12,
                JPY: 151.61
            }
        }
        // Bind methods in constructor
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleFromCurrencyChange = this.handleFromCurrencyChange.bind(this);
        this.handleToCurrencyChange = this.handleToCurrencyChange.bind(this);
        this.convertCurrency = this.convertCurrency.bind(this);
    }

    handleAmountChange(e) {
        this.setState({ amount: e.target.value }, () => {
            this.convertCurrency();
        });
    }

    handleFromCurrencyChange(e) {
        this.setState({ fromCurrency: e.target.value }, () => {
            this.convertCurrency();
        });
    }

    handleToCurrencyChange(e) {
        this.setState({ toCurrency: e.target.value }, () => {
            this.convertCurrency();
        });
    }

    convertCurrency() {
        const { amount, fromCurrency, toCurrency, exchangeRates } = this.state;
        const fromRate = exchangeRates[fromCurrency];
        const toRate = exchangeRates[toCurrency];
        const convertedAmount = (amount * toRate) / fromRate;
        this.setState({ convertedAmount: convertedAmount.toFixed(2) });
    }

    render() {
        const { amount, fromCurrency, toCurrency, convertedAmount } = this.state;
        const currencies = ['USD', 'EUR', 'GBP', 'INR', 'JPY'];

        return (
            <div className={styles.container}>
                <h2 className={styles.title}>Currency Converter</h2>
                <div className={styles.converter}>
                    <div className={styles.inputGroup}>
                        <input
                            type="number"
                            value={amount}
                            onChange={this.handleAmountChange}
                            className={styles.input}
                            placeholder="Enter amount"
                        />
                        <select
                            value={fromCurrency}
                            onChange={this.handleFromCurrencyChange}
                            className={styles.select}
                        >
                            {currencies.map(currency => (
                                <option key={currency} value={currency}>{currency}</option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.arrow}>→</div>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            value={convertedAmount}
                            readOnly
                            className={styles.input}
                        />
                        <select
                            value={toCurrency}
                            onChange={this.handleToCurrencyChange}
                            className={styles.select}
                        >
                            {currencies.map(currency => (
                                <option key={currency} value={currency}>{currency}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrencyConverter 