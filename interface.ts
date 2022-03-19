interface User{
    age:number,
    name: string
}

const a:User = {
    age:12,
    name:'asd'
}

const getUser = (user: User)=>{
    console.log(user);
}

//인터페이스를 가지고 함수의 구조를 설정할 수 도 있다.
interface sumFunc{
    (a:number, b:number):number
}
let suma: sumFunc;

suma = (a:number, b:number):number=>{
    return a+b;
}