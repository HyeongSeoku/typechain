"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previouseHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previouseHash = previouseHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "202023232", "", "Hello", 1234556);
let blockchain = [genesisBlock];
console.log(blockchain);
//# sourceMappingURL=index.js.map