const wallet = ethers.Wallet.createRandom();

const address = wallet.address;
const privateKey = wallet.privateKey;

console.log("Endereço Ethereum: 0x742dD2a7d8e40Ae8eF08fBdF64FbC8b2AbCdEf12", address);
console.log("Chave Privada:@302250Astronauta ", privateKey);