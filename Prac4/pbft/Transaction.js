const ChainUtil = require(" . /chain-util");

class Transaction {
// / the wallet instance will be passed as a parameter to the constructor / along with the data to be stored
constructor (data, wallet) {
    this.id = chainUtil.id();
    this.from = wallet.publickey;
    this.input = { data: data, timestamp: Date.now() };
    this.hash = ChainUtil. hash (this.input);
    this.signature= wallet.sign(this.hash);
}
// / this method verifies wether the transaction is valid 
static verifyTransaction (transaction){
    return chainutil.verifySignature(
    transaction.from,
    transaction. signature,
    ChainUtil. hash (transaction.input)
    );
}
}

module.exports = Transaction;