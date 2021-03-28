import * as CryptoJS from "crypto-js";

class Block {
  static calculateBlockHash = (
    index: number,
    previouseHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previouseHash + timestamp + data).toString();

  static validateStructure = (aBlock: Block): boolean =>
    typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previouseHash === "string" &&
    typeof aBlock.data === "string" &&
    typeof aBlock.timestamp === "number";

   public index: number;
   public hash: string;
   public previouseHash: string;
   public data: string;
   public timestamp: number;

  constructor(
    index: number,
    hash: string,
    previouseHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previouseHash = previouseHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "202023232", "", "Hello", 1234556);

let blockchain: Block[] = [genesisBlock];

const getBlockChain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimeStamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimeStamp,
    data
  );

  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimeStamp
  );
  return newBlock;
};

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if(!Block.validateStructure(candidateBlock)){
   return false 
  }else if(previousBlock.index +1 !== candidateBlock.index){
    return false
  } else if (previousBlock.hash !== candidateBlock.previouseHash){
    return false
  }
};

export {};

//calculateBlockHash , getBlockChain , getLatestBlock ,getNewTimeStamp
