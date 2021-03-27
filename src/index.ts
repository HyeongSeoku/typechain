 import * as CryptoJS from "crypto-js";
 
 class Block{
   public index: number;
   public hash :string;
   public previouseHash :string;
   public data :string;
   public timestamp :number;

   static calculateBlockHash=(
    index:number,
    previouseHash:string,
    timestamp:number,
    data:string
   ):string => CryptoJS.SHA256(index + previouseHash + timestamp + data).toString();

   constructor(index: number,
    hash :string,
     previouseHash :string,
    data :string,
    timestamp :number){
      this.index=index;
      this.hash=hash;
      this.previouseHash=previouseHash;
      this.data=data;
      this.timestamp=timestamp;
   }
 }

 const genesisBlock:Block = new Block(0,"202023232","","Hello",1234556);

 let blockchain:Block[] = [genesisBlock];

 const getBlockChain = (): Block[] =>blockchain;

 const getLatestBlock = (): Block => blockchain[blockchain.length -1];

 const getNewTimeStamp = ():number => Math.round(new Date().getTime()/1000);

 console.log(blockchain);

export {};

//calculateBlockHash , getBlockChain , getLatestBlock ,getNewTimeStamp