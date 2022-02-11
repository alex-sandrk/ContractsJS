<h1>
  <img src="./logo.png" alt="Lumerin Contracts JS" width="20%">
</h1>

🔌  [Web3](https://github.com/ethereum/web3.js) Contracts for [Lumerin Token](http://lumerin.io) ready to be used.

<!-- [![Build Status](https://travis-ci.org/autonomoussoftware/lumerin-contracts-js.svg?branch=master)](https://travis-ci.org/autonomoussoftware/lumerin-contracts-js)
[![Code Style](https://img.shields.io/badge/code%20style-bloq-0063a6.svg)](https://github.com/bloq/eslint-config-bloq)
[![Known Vulnerabilities](https://snyk.io/test/github/autonomoussoftware/lumerin-contracts-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/autonomoussoftware/lumerin-contracts-js) [![Greenkeeper badge](https://badges.greenkeeper.io/autonomoussoftware/lumerin-contracts-js.svg)](https://greenkeeper.io/) -->

## Install

```shell
npm install --save @lumerin/contracts
```

## Usage

```js
const Web3 = require('web3')
const LumerinContracts = require('@lumerin/contracts')

const web3 = new Web3('http://localhost:8545')
const lumerinContracts = new LumerinContracts(web3, 'mainnet')

lumerinContracts.Lumerin.methods.balanceOf(address).call().then(console.log)
```

## API

### `LumerinContracts(web3, chain)`

Constructor for the Lumerin contracts object.
It shall receive a `web3` instance and an optional `chain` parameter that default to `'mainnet'`.
<!-- Other supported chains are: `'classic'`, `'ropsten'` and `'mordor'`. -->
Other supported chains are: `'ropsten'`.
Numeric chain IDs can also be used.

### `LumerinContracts.{contractName}`

The instance of the Lumerin contracts will have a property for each contract: `CloneFactory`, `Implementation` and `Lumerin`.
Each contract is an instance of `web3.eth.Contract`.

### `LumerinContracts.{chain}.{contractName}`

This is a convenience object containing the `abi`, `address` and the `birthblock` (The block that the contract was deployed in) of the contract on the specified chain.

## Contracts API
### TODO - update links when docs are finalized

  - [`Lumerin (token)`](https://github.com/Lumerin-protocol/lumerin-overview/blob/main/docs/00-overview.md)
  - [`CloneFactory`](https://github.com/Lumerin-protocol/lumerin-overview/blob/main/docs/00-overview.md)
  - [`Implementation`](https://github.com/Lumerin-protocol/lumerin-overview/blob/main/docs/00-overview.md)

## License

MIT
