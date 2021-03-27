"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previouseHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previouseHash = previouseHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previouseHash, timestamp, data) => CryptoJS.SHA256(index + previouseHash + timestamp + data).toString();
const genesisBlock = new Block(0, "202023232", "", "Hello", 1234556);
let blockchain = [genesisBlock];
const getBlockChain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
console.log(blockchain);
//calculateBlockHash , getBlockChain , getLatestBlock ,getNewTimeStamp
//# sourceMappingURL=index.js.map