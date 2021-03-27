interface Human {
  name:string,
  age:number,
  gender:string;
}
//interface만 JS에서 작동 안함

const person={
  name:"HyeongSeok",
  age:25,
  gender:"Male"
};


const sayHi = (person:Human):string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};
//아무런 값도 반환하지 않을경우 : void | 문자열 반환시 string
console.log(sayHi(person));
export {};
