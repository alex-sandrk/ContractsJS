// ERC20
const build = ({ context, reservetoken, log, handleError }) => ({
  // Standard ERC20-related functions
  getName: data =>
    reservetoken.name
      .call()
      .then(log)
      .catch(handleError),
  getSymbol: data =>
    reservetoken.symbol
      .call()
      .then(log)
      .catch(handleError),
  getDecimals: data =>
    reservetoken.decimals
      .call()
      .then(log)
      .catch(handleError),
  totalSupply: data =>
    reservetoken
      .totalSupply()
      .then(log)
      .catch(handleError),
  balanceOf: data =>
    reservetoken
      .balanceOf()
      .then(log)
      .catch(handleError),
  transfer: data =>
    reservetoken
      .transfer()
      .then(log)
      .catch(handleError),
  transferFrom: data =>
    reservetoken
      .transferFrom()
      .then(log)
      .catch(handleError),
  approve: data =>
    reservetoken
      .approve()
      .then(log)
      .catch(handleError),
  allowance: data =>
    reservetoken
      .allowance()
      .then(log)
      .catch(handleError),
  TransferEvent: data =>
    reservetoken
      .Transfer()
      .then(log)
      .catch(handleError),
  ApprovalEvent: data =>
    reservetoken
      .Approval()
      .then(log)
      .catch(handleError),
  // Custom ERC20-related functions
  /**
    *
    * These are safer versions of approve. They’re not standard,
    * but can be used by users who want to avoid the chance of a well-known race attack
    * against the standard version when updating values.
    *
    * approveMore(address _spender, uint _value)
    *
    * @returns {boolean ok}
    */
  approveMore: data =>
    reservetoken
      .approveMore(data)
      .then(log)
      .catch(handleError),
  /**
      *
      * These are safer versions of approve. They’re not standard,
      * but can be used by users who want to avoid the chance of a well-known race attack
      * against the standard version when updating values.
      *
      * approveLess(address _spender, uint _value)
      *
      * @returns {boolean ok}
      */
  approveLess: data =>
    reservetoken
      .approveLess(data)
      .then(log)
      .catch(handleError),
  /**
      *
      * Allows multiple transfers in a single transaction.
      * Each uint in the bits array represents on transfer;
      * the leftmost 160 bits are the address,
      * and 96 bits to the right are the amount.
      *
      * function multiTransfer(uint[] bits)
      *
      * @returns {boolean ok}
      */
  multiTransfer: data =>
    reservetoken
      .multiTransfer()
      .then(log)
      .catch(handleError)
})

module.exports = { build }