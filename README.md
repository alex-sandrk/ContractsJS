<h1 align="center">
  <img src="./logo.png" alt="Lumerin Contracts JS" width="50%">
</h1>

🔌  [Web3](https://github.com/ethereum/web3.js) Contracts for [Lumerin Token](http://lumerin.io) ready to be used.

[![Build Status](https://travis-ci.org/autonomoussoftware/lumerin-contracts-js.svg?branch=master)](https://travis-ci.org/autonomoussoftware/lumerin-contracts-js)
[![Code Style](https://img.shields.io/badge/code%20style-bloq-0063a6.svg)](https://github.com/bloq/eslint-config-bloq)
[![Known Vulnerabilities](https://snyk.io/test/github/autonomoussoftware/lumerin-contracts-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/autonomoussoftware/lumerin-contracts-js) [![Greenkeeper badge](https://badges.greenkeeper.io/autonomoussoftware/lumerin-contracts-js.svg)](https://greenkeeper.io/)

## Install

```shell
npm install --save lumerin-contracts
```

## Usage

```js
const Web3 = require('web3')
const LumerinContracts = require('lumerin-contracts')

const web3 = new Web3('http://localhost:8545')
const lumerinContracts = new LumerinContracts(web3, 'mainnet')

lumerinContracts.LMRToken.methods.balanceOf(address).call().then(console.log)
```

## API

### `LumerinContracts(web3, chain)`

Constructor for the Lumerin contracts object.
It shall receive a `web3` instance and an optional `chain` parameter that default to `'mainnet'`.
Other supported chains are: `'classic'`, `'ropsten'` and `'mordor'`.
Numeric chain IDs can also be used.

### `lumerinContracts.{contractName}`

The instance of the Lumerin contracts will have a property for each contract: `Auctions`, `AutonomousConverter`, `LMRToken`, `TokenPorter` and `Validator`.
Each contract is an instance of `web3.eth.Contract`.

### `LumerinContracts.{chain}.{contractName}`

This is a convenience object containing the `abi`, `address` and the `birthblock` of the contract on the specified chain.

## Contracts API

  - [`Auctions`](https://github.com/autonomoussoftware/documentation/blob/master/owners_manual/owners_manual.md#auction-api)
  - [`Autonomous Converter`](https://github.com/autonomoussoftware/documentation/blob/master/owners_manual/owners_manual.md#autonomous-converter-contract-api)
  - [`LMRToken`](https://github.com/autonomoussoftware/documentation/blob/master/owners_manual/owners_manual.md#token-api)
  - `Proposals`
  - [`TokenPorter`](https://github.com/autonomoussoftware/documentation/blob/master/owners_manual/owners_manual.md#tokenporter-api)
  - [`Validator`](https://github.com/autonomoussoftware/documentation/blob/master/owners_manual/owners_manual.md#validator-api)

## License

MIT
