"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//class = js 파일 상에서 나타남 (react,express,node 등등을 사용하게된다면 class 사용해야함) , interface = js 파일상에서 안나타남 (ts측면에서 더 안전함)
class Human {
    constructor(name, age, gender) {
        //constructor=생성자  클래스가 시작할때마다 호출되는 method
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
//interface만 JS에서 작동 안함
const Seok = new Human("Hyeong", 26, "Male");
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};
//아무런 값도 반환하지 않을경우 : void | 문자열 반환시 string
console.log(sayHi(Seok));
//# sourceMappingURL=index.js.map