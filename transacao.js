const crypto = require ('crypto')
const EC = require('elliptic').ec;
const SHA256 = require('crypto-js/sha256');
const CryptumSdk = require('cryptum-sdk');
const SDK = new CryptumSdk();

const Web3 = require('web3');
const web3 = new Web3('https:...');


const sdk = new CryptumSDK({
    enviroment: 'testnet',
    apiKey: '42OELP0OP5NvqKvckOUT6xU728wDTkmj'
  })


const wallet = await sdk.wallet.generateWallet({
    protocol: 'ETHEREUM',
    derivation: { account: 1, address: 1 }
})

const { hash } = await sdk.token.create({
    wallet,
    name: 'moedinha',
    symbol: 'MOE',
    decimals: 18,
    amount: '1000000',
    protocol: 'ETHEREUM'
})

const { contractAddress } = await sdk.transaction.getTransactionReceiptByHash({
    protocol: 'ETHEREUM',
    hash: 'd2f28cbea78b5c92f43f212437e3351a'
})

const { hash } = await sdk.token.burn({
    wallet,
    token: '0xABC123DEF456GHI789JKL',  
    amount: '42',
    protocol: 'ETHEREUM'
})

const { hash } = await sdk.token.transfer({
    wallet,
    token: '0xABC123DEF456GHI789JKL',  // endereço de token
    destination: 'TKNXYZ987654',  // token de destino
    amount: '42',
    protocol: 'ETHEREUM'
})

class CaixaEletronico {
    constructor() {
      this.saldo = 0;
      this.tokens = 0;
    }
  
    depositar(valor) {
      this.saldo += valor;
      return `Depósito de R$${valor.toFixed(2)} realizado com sucesso.`;
    }
  
    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        return `Saque de R$${valor.toFixed(2)} realizado com sucesso.`;
      } else {
        return "Saldo insuficiente.";
      }
    }
  
    comprarComTokens(valor) {
      if (valor <= this.tokens) {
        this.tokens -= valor;
        return `Compra de R$${valor.toFixed(2)} realizada com sucesso usando tokens.`;
      } else {
        return "Tokens insuficientes.";
      }
    }
  
    depositarTokens(qtdTokens) {
      this.tokens += qtdTokens;
      return `Depósito de ${qtdTokens} tokens realizado com sucesso.`;
    }
  
    consultarSaldo() {
      return `Saldo: R$${this.saldo.toFixed(2)} / Tokens: ${this.tokens}`;
    }
  }
  
  const caixa = new CaixaEletronico();
  
  console.log(caixa.depositar(100)); // Depósito de R$100.00 realizado com sucesso.

  console.log(caixa.sacar(50)); // Saque de R$50.00 realizado com sucesso.

  console.log(caixa.comprarComTokens(10)); // Tokens insuficientes.

  console.log(caixa.depositarTokens(20)); // Depósito de 20 tokens realizado com sucesso.

  console.log(caixa.comprarComTokens(10)); // Compra de R$10.00 realizada com sucesso usando tokens.

  console.log(caixa.consultarSaldo()); // Saldo: R$50.00 / Tokens: 10