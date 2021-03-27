 class Block{
   public index: number;
   public hash :string;
   public previouseHash :string;
   public data :string;
   public timestamp :number;
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

 let blockchain:[Block] = [genesisBlock];

 console.log(blockchain);
export {};
