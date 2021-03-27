const sayHi = (name:string, age:number, gender:string):string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}!`;
};
//아무런 값도 반환하지 않을경우 : void | 문자열 반환시 string
console.log(sayHi("HyeongSeok",25,"Male"));
export {};
